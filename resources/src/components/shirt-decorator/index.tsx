import { createSignal, onMount, onCleanup } from "solid-js";
import { css } from "solid-styled";
import { fabric } from 'fabric';

// Note: This component requires fabric.js and its TypeScript definitions
// These have been added to package.json as dependencies

export default function ShirtDecorator() {
    let canvasRef: HTMLCanvasElement | undefined;
    let fabricCanvas: fabric.Canvas;

    const [canvasWidth, setCanvasWidth] = createSignal(600);
    const [canvasHeight, setCanvasHeight] = createSignal(500);
    const [selectedColor, setSelectedColor] = createSignal("#ffffff");
    const [fabricLoaded, setFabricLoaded] = createSignal(false);

    // Available shirt colors
    const shirtColors = [
        { name: "White", value: "#ffffff" },
        { name: "Black", value: "#000000" },
        { name: "Red", value: "#ff0000" },
        { name: "Blue", value: "#0000ff" },
        { name: "Green", value: "#008000" },
    ];

    // Initialize fabric canvas
    onMount(() => {
        try {
            if (typeof fabric !== 'undefined' && canvasRef) {
                fabricCanvas = new fabric.Canvas(canvasRef, {
                    width: canvasWidth(),
                    height: canvasHeight(),
                    backgroundColor: selectedColor(),
                });

                // Load shirt template
                loadShirtTemplate();

                // Set fabric as loaded
                setFabricLoaded(true);

                // Handle window resize
                const handleResize = () => {
                    const containerWidth = document.querySelector('.canvas-container')?.clientWidth || 600;
                    if (containerWidth < canvasWidth()) {
                        const scale = containerWidth / canvasWidth();
                        fabricCanvas.setZoom(scale);
                        fabricCanvas.setWidth(containerWidth);
                        fabricCanvas.setHeight(canvasHeight() * scale);
                    }
                };

                window.addEventListener('resize', handleResize);
                handleResize();

                onCleanup(() => {
                    window.removeEventListener('resize', handleResize);
                    fabricCanvas.dispose();
                });
            } else {
                console.error("Fabric.js is not loaded or canvas reference is missing");
            }
        } catch (error) {
            console.error("Error initializing fabric canvas:", error);
        }
    });

    // Load shirt template
    const loadShirtTemplate = () => {
        if (!fabricCanvas) return;

        // Clear canvas
        fabricCanvas.clear();
        fabricCanvas.setBackgroundColor(selectedColor(), fabricCanvas.renderAll.bind(fabricCanvas));

        // Create basic shirt shape (simplified)
        const shirtPath = new fabric.Path('M 300,50 L 450,100 L 500,250 L 450,400 L 300,450 L 150,400 L 100,250 L 150,100 Z', {
            fill: selectedColor(),
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
        });

        // Add collar
        const collar = new fabric.Path('M 270,50 L 300,100 L 330,50 Z', {
            fill: '#dddddd',
            stroke: '#aaaaaa',
            strokeWidth: 1,
            selectable: false,
            evented: false,
        });

        // Add sleeves
        const leftSleeve = new fabric.Path('M 150,100 L 50,150 L 100,250 Z', {
            fill: selectedColor(),
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
        });

        const rightSleeve = new fabric.Path('M 450,100 L 550,150 L 500,250 Z', {
            fill: selectedColor(),
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
        });

        // Add all elements to canvas
        fabricCanvas.add(shirtPath, collar, leftSleeve, rightSleeve);
        fabricCanvas.renderAll();
    };

    // Change shirt color
    const changeShirtColor = (color: string) => {
        setSelectedColor(color);
        if (fabricCanvas) {
            fabricCanvas.getObjects().forEach((obj: fabric.Object) => {
                if (obj.fill !== '#dddddd') { // Don't change collar color
                    obj.set('fill', color);
                }
            });
            fabricCanvas.renderAll();
        }
    };

    // Add text to shirt
    const addText = () => {
        if (!fabricCanvas) return;

        const text = new fabric.IText('Custom Text', {
            left: 250,
            top: 200,
            fontFamily: 'Arial',
            fontSize: 30,
            fill: selectedColor() === '#ffffff' ? '#000000' : '#ffffff',
            textAlign: 'center',
        });

        fabricCanvas.add(text);
        fabricCanvas.setActiveObject(text);
        fabricCanvas.renderAll();
    };

    // Add image to shirt
    const addImage = (e: Event) => {
        if (!fabricCanvas) return;
        const input = e.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imgObj = new Image();
                imgObj.src = event.target?.result as string;

                imgObj.onload = () => {
                    const image = new fabric.Image(imgObj);

                    // Scale image to fit on shirt
                    const maxWidth = 200;
                    const maxHeight = 200;

                    if (image.width && image.height) {
                        if (image.width > maxWidth || image.height > maxHeight) {
                            const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
                            image.scale(scale);
                        }
                    }

                    image.set({
                        left: 250,
                        top: 200,
                        originX: 'center',
                        originY: 'center',
                    });

                    fabricCanvas.add(image);
                    fabricCanvas.setActiveObject(image);
                    fabricCanvas.renderAll();
                };
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    // Delete selected object
    const deleteSelected = () => {
        if (!fabricCanvas) return;

        const activeObject = fabricCanvas.getActiveObject();
        if (activeObject) {
            fabricCanvas.remove(activeObject);
            fabricCanvas.renderAll();
        }
    };

    css`
    .shirt-decorator {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .canvas-container {
      margin: 20px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      max-width: 100%;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 20px;
      justify-content: center;
    }

    .color-options {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }

    .color-option {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid #ddd;
      transition: transform 0.2s;
    }

    .color-option:hover {
      transform: scale(1.1);
    }

    .color-option.selected {
      border: 2px solid #333;
    }

    .action-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    button {
      padding: 8px 16px;
      background-color: #335d92;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #264673;
    }

    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }

    .file-input {
      display: none;
    }

    .file-label {
      padding: 8px 16px;
      background-color: #335d92;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.2s;
    }

    .file-label:hover {
      background-color: #264673;
    }

    .fabric-not-loaded {
      padding: 20px;
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeeba;
      border-radius: 4px;
      margin-bottom: 20px;
      text-align: center;
    }
  `;

    return (
        <div class="shirt-decorator">
            <h2>Custom Shirt Designer</h2>

            {!fabricLoaded() && (
                <div class="fabric-not-loaded">
                    <p>Fabric.js library is not loaded. The library is included in package.json.</p>
                    <p>Make sure to run <code>npm install</code> or <code>yarn</code> to install all dependencies.</p>
                    <p>If you're still seeing this message, try restarting the development server.</p>
                </div>
            )}

            <div class="controls">
                <div>
                    <h3>Shirt Color</h3>
                    <div class="color-options">
                        {shirtColors.map((color) => (
                            <div
                                class={`color-option ${color.value === selectedColor() ? 'selected' : ''}`}
                                style={{ "background-color": color.value }}
                                onClick={() => changeShirtColor(color.value)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>

                <div class="action-buttons">
                    <button onClick={addText} disabled={!fabricLoaded()}>Add Text</button>
                    <label class="file-label" style={{ opacity: !fabricLoaded() ? '0.5' : '1', cursor: !fabricLoaded() ? 'not-allowed' : 'pointer' }}>
                        Add Image
                        <input
                            type="file"
                            class="file-input"
                            accept="image/*"
                            onChange={addImage}
                            disabled={!fabricLoaded()}
                        />
                    </label>
                    <button onClick={deleteSelected} disabled={!fabricLoaded()}>Delete Selected</button>
                </div>
            </div>

            <div class="canvas-container">
                <canvas ref={canvasRef} width={canvasWidth()} height={canvasHeight()}></canvas>
            </div>

            <p>Click and drag elements to position them. Click on text to edit.</p>
        </div>
    );
}
