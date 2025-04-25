/**
 * PaneFlow
 * https://paneflow.com
 * Copyright 2025 PaneFlow
 * Released under the PaneFlow Regular License
 * April 25, 2025
 */

function getBlockCSSVars(paneParams, blockParams) {
    const { cols = 1, rows = 1 } = paneParams;
    const { col, row, widthCols, heightRows } = blockParams;
    return {
        '--pf-cols': String(cols),
        '--pf-rows': String(rows),
        '--pf-col': String(col),
        '--pf-row': String(row),
        '--pf-width-cols': String(widthCols),
        '--pf-height-rows': String(heightRows),
    };
}

function getContainerCSSVars(params) {
    let { gap = '0px', padding = '0px', blockBorderRadius = '0px' } = params;
    if (typeof gap === 'number') {
        gap = `${gap}px`;
    }
    if (typeof padding === 'number') {
        padding = `${padding}px`;
    }
    return {
        '--pf-padding': String(padding),
        '--pf-gap': String(gap),
        '--pf-transition-duration': String((params.transitionDuration || 0) + 'ms'),
        '--pf-border-radius': typeof blockBorderRadius === 'string'
            ? blockBorderRadius
            : `${blockBorderRadius}px`,
    };
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object' || obj instanceof Element) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const nextTick = (cb) => setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(() => cb())));

const isHTMLElement = (el) => {
    return el.nodeType && el.nodeType === 1;
};
class PaneFlow {
    params;
    el;
    currentPaneIndex;
    keyboardControl;
    pagination;
    navigation;
    _expectedSlideChangeEndIndexes;
    _autoplayInterval;
    _transitionEndTimeout;
    _document;
    constructor(params) {
        const defaults = {
            el: null,
            panes: [],
            blockDelay: 0,
            transitionDuration: 1000,
            gap: 0,
            padding: 0,
            initialPaneIndex: 0,
        };
        this.el = null;
        this.params = Object.assign(defaults, deepClone(params || {}));
        this.currentPaneIndex = Number(this.params.initialPaneIndex || 0);
        this.pagination = {
            el: null,
            bulletEls: [],
            thumbEls: [],
            onClick: () => { },
        };
        this.navigation = {
            prevEl: null,
            nextEl: null,
            onClick: () => { },
        };
        this.keyboardControl = {
            initialized: false,
            onKeyDown: () => { },
        };
        this._expectedSlideChangeEndIndexes = [];
        this._autoplayInterval = null;
        this._transitionEndTimeout = null;
        this._document = params.document || document;
        // FIND EL
        let sliderEl;
        if (typeof this.params.el === 'string') {
            sliderEl = this._document.querySelector(this.params.el);
        }
        else {
            sliderEl = params.el;
        }
        if (!sliderEl)
            return this;
        this.el = sliderEl;
        this.init();
        return this;
    }
    emit(event, ...data) {
        if (this.params.on?.[event]) {
            // @ts-ignore
            this.params.on[event](this, ...data);
        }
    }
    getBlockEl(el) {
        if (typeof el === 'string') {
            return this.el?.querySelector(el);
        }
        return el;
    }
    getBlockParamsByEl(paneParams, blockEl) {
        return paneParams.blocks.find((blockParams) => typeof blockParams.el === 'string'
            ? blockEl.matches(blockParams.el)
            : blockParams.el === blockEl);
    }
    setBlockCSSVars(paneParams, blockParamsOrEl) {
        let blockParams;
        if (isHTMLElement(blockParamsOrEl)) {
            blockParams = this.getBlockParamsByEl(paneParams, blockParamsOrEl);
        }
        else {
            blockParams = blockParamsOrEl;
        }
        if (!blockParams) {
            return;
        }
        let blockEl = this.getBlockEl(blockParams.el);
        if (!blockEl)
            return;
        const blockCSSVars = getBlockCSSVars(paneParams, blockParams);
        Object.entries(blockCSSVars).forEach(([key, value]) => {
            // @ts-ignore
            blockEl.style.setProperty(key, value);
        });
    }
    setBlockChildren(paneParams, blockParamsOrEl, { setParallax = false, stage = 'enter', direction = 'next' } = {}) {
        let blockParams;
        const paneFlow = this;
        if (isHTMLElement(blockParamsOrEl)) {
            blockParams = this.getBlockParamsByEl(paneParams, blockParamsOrEl);
        }
        else {
            blockParams = blockParamsOrEl;
        }
        if (!blockParams.children)
            return;
        const blockEl = paneFlow.getBlockEl(blockParams.el);
        if (!blockEl)
            return;
        blockParams.children.forEach((childParams) => {
            const { el, translateX, translateY, translateZ, scale, rotate, opacity, width, height, transformOrigin, textColor, bgColor, parallax = 0, } = childParams;
            const element = typeof el === 'string'
                ? blockEl.querySelector(el)
                : el;
            if (!element)
                return;
            const hasTransform = [translateX, translateY, translateZ, scale, rotate].filter((value) => typeof value !== 'undefined').length > 0 || element.style.transform;
            const styleObj = {};
            if (hasTransform) {
                const parallaxOffset = paneFlow.getChildParallaxOffset(blockParams, stage, parallax, direction);
                // @ts-ignore
                element.__hasParallax = false;
                const translateValue = [
                    translateX || 0,
                    translateY || 0,
                    translateZ || 0,
                ]
                    .map((value, index) => {
                    if (!setParallax)
                        return value;
                    const offset = parallaxOffset[index];
                    if (!offset)
                        return value;
                    // @ts-ignore
                    element.__hasParallax = true;
                    return `calc(${value || '0px'} ${offset > 0 ? '+' : '-'} ${Math.abs(offset * parallax * 25)}cqw)`;
                })
                    .join(',');
                const scaleValue = typeof scale === 'undefined' ? '1' : scale;
                const rotateValue = typeof rotate === 'undefined'
                    ? '0deg'
                    : typeof rotate === 'number'
                        ? `${rotate}deg`
                        : rotate;
                styleObj.transform = `translate3d(${translateValue}) scale(${scaleValue}) rotate(${rotateValue})`;
            }
            if (typeof opacity !== 'undefined') {
                styleObj.opacity = String(opacity);
            }
            if (typeof width !== 'undefined') {
                styleObj.width = typeof width === 'number' ? `${width}px` : width;
            }
            if (typeof height !== 'undefined') {
                styleObj.height = typeof height === 'number' ? `${height}px` : height;
            }
            if (typeof transformOrigin !== 'undefined') {
                styleObj.transformOrigin = transformOrigin;
            }
            if (typeof textColor !== 'undefined') {
                styleObj.color = textColor;
            }
            if (typeof bgColor !== 'undefined') {
                styleObj.backgroundColor = bgColor;
            }
            Object.assign(element.style, styleObj);
        });
    }
    getChildParallaxOffset(blockParams, stage, parallax, direction) {
        let x = 0;
        let y = 0;
        let z = 0;
        if (!parallax)
            return [x, y, z];
        const position = this.getBlockDirection(blockParams, direction, stage);
        if (position === 'top' ||
            position === 'top-left' ||
            position === 'top-right') {
            y = -1;
        }
        if (position === 'right' ||
            position === 'bottom-right' ||
            position === 'top-right') {
            x = 1;
        }
        if (position === 'bottom' ||
            position === 'bottom-left' ||
            position === 'bottom-right') {
            y = 1;
        }
        if (position === 'left' ||
            position === 'top-left' ||
            position === 'bottom-left') {
            x = -1;
        }
        return [x, y, z];
    }
    setBlockOutTransform(paneParams, blockParams, position) {
        let x = '0';
        let y = '0';
        let scale = '1';
        const paneFlow = this;
        paneParams.cols;
        paneParams.rows;
        blockParams.widthCols;
        blockParams.heightRows;
        if (position === 'top' ||
            position === 'top-left' ||
            position === 'top-right') {
            y = `-100cqh`;
        }
        if (position === 'right' ||
            position === 'bottom-right' ||
            position === 'top-right') {
            x = `100cqw`;
        }
        if (position === 'bottom' ||
            position === 'bottom-left' ||
            position === 'bottom-right') {
            y = `100cqh`;
        }
        if (position === 'left' ||
            position === 'top-left' ||
            position === 'bottom-left') {
            x = `-100cqw`;
        }
        if (position === 'center') {
            x = '0';
            y = '0';
            scale = '0';
        }
        const blockEl = paneFlow.getBlockEl(blockParams.el);
        if (!blockEl)
            return;
        // @ts-ignore
        blockEl.style.transform = `translate3d(${x},${y},0) scale(${scale})`;
    }
    getBlockDirection(blockParams, direction, stage) {
        if (stage === 'enter') {
            const { enterFrom = direction === 'next' ? 'right' : 'left', exitTo } = blockParams;
            return direction === 'next' ? enterFrom : exitTo || enterFrom;
        }
        if (stage === 'exit') {
            const { exitTo = direction === 'next' ? 'left' : 'right', enterFrom } = blockParams;
            return direction === 'next' ? exitTo : enterFrom || exitTo;
        }
    }
    blockEnter(paneParams, blockParams, direction) {
        const moveTo = this.getBlockDirection(blockParams, direction, 'enter');
        this.setBlockOutTransform(paneParams, blockParams, moveTo);
    }
    blockExit(paneParams, blockParams, direction) {
        const moveTo = this.getBlockDirection(blockParams, direction, 'exit');
        this.setBlockOutTransform(paneParams, blockParams, moveTo);
    }
    withBlockChildren(blockParamsOrBlockEl, cb) {
        if (!cb)
            return;
        const getChildEl = (blockEl, childEl) => {
            if (typeof childEl === 'string') {
                return blockEl.querySelector(childEl);
            }
            return childEl;
        };
        if (isHTMLElement(blockParamsOrBlockEl)) {
            const allChildren = [];
            this.params.panes.forEach((paneParams) => {
                paneParams.blocks.forEach((blockParams) => {
                    const blockEl = this.getBlockEl(blockParams.el);
                    if (blockEl === blockParamsOrBlockEl) {
                        const childrenElements = (blockParams.children || []).map((childParams) => getChildEl(blockEl, childParams.el));
                        allChildren.push(...childrenElements);
                    }
                });
            });
            allChildren.forEach((subEl) => {
                if (subEl)
                    cb(subEl);
            });
        }
        else {
            const blockParams = blockParamsOrBlockEl;
            blockParams.children?.forEach((childParams) => {
                const childEl = getChildEl(blockParams.el, childParams.el);
                if (!childEl)
                    return;
                return cb(childEl);
            });
        }
    }
    getTransitionEndTargetEl({ blocksToEnter, blocksToChange, blocksToExit, direction, currentPaneParams, newPaneParams, }) {
        const paneFlow = this;
        if (blocksToEnter.length > 0) {
            return direction === 'next'
                ? blocksToEnter[blocksToEnter.length - 1]
                : blocksToEnter[0];
        }
        if (blocksToChange.length > 0) {
            const blocks = [...blocksToChange].filter((blockEl) => {
                const currentBlockParams = paneFlow.getBlockParamsByEl(currentPaneParams, blockEl);
                const newBlockParams = paneFlow.getBlockParamsByEl(newPaneParams, blockEl);
                const { col: currentCol, row: currentRow, widthCols: currentWidthCols, heightRows: currentHeightRows, } = currentBlockParams;
                const { col: newCol, row: newRow, widthCols: newWidthCols, heightRows: newHeightRows, } = newBlockParams;
                return (currentCol !== newCol ||
                    currentRow !== newRow ||
                    currentWidthCols !== newWidthCols ||
                    currentHeightRows !== newHeightRows);
            });
            return blocks[blocks.length - 1];
        }
        if (blocksToExit.length > 0) {
            return direction === 'next'
                ? blocksToExit[blocksToExit.length - 1]
                : blocksToExit[0];
        }
    }
    prevPane() {
        let newPaneIndex = this.currentPaneIndex - 1;
        if (newPaneIndex < 0)
            newPaneIndex = this.params.panes.length - 1;
        this.setPane(newPaneIndex, 'previous');
    }
    nextPane() {
        let newPaneIndex = this.currentPaneIndex + 1;
        if (newPaneIndex === this.params.panes.length)
            newPaneIndex = 0;
        this.setPane(newPaneIndex, 'next');
    }
    setPane(newPaneIndex, direction) {
        const paneFlow = this;
        const { currentPaneIndex } = paneFlow;
        if (currentPaneIndex === newPaneIndex)
            return;
        const { panes, blockDelay: BLOCK_DELAY = 0, transitionDuration: TRANSITION_DURATION, } = paneFlow.params;
        const currentPaneParams =
        // @ts-ignore
        panes[currentPaneIndex] || { blocks: [] };
        const newPaneParams = panes[newPaneIndex];
        if (!newPaneParams) {
            return;
        }
        if (typeof direction === 'undefined') {
            direction = newPaneIndex > currentPaneIndex ? 'next' : 'prev';
        }
        const currentPaneBlocksEls = currentPaneParams.blocks
            .map((blockParams) => blockParams.el)
            .map((el) => paneFlow.getBlockEl(el));
        const newPaneBlocksEls = newPaneParams.blocks
            .map((blockParams) => blockParams.el)
            .map((el) => paneFlow.getBlockEl(el));
        const blocksToExit = currentPaneBlocksEls.filter((blockEl) => !newPaneBlocksEls.includes(blockEl));
        const blocksToEnter = newPaneBlocksEls.filter((blockEl) => !currentPaneBlocksEls.includes(blockEl));
        const blocksToChange = [];
        currentPaneBlocksEls.forEach((blockEl) => {
            if (newPaneBlocksEls.includes(blockEl)) {
                blocksToChange.push(blockEl);
            }
        });
        newPaneBlocksEls.forEach((blockEl) => {
            if (currentPaneBlocksEls.includes(blockEl) &&
                !blocksToChange.includes(blockEl)) {
                blocksToChange.push(blockEl);
            }
        });
        const allBlockEls = [...blocksToChange, ...blocksToEnter, ...blocksToExit];
        const resetTransitionDurationDelay = () => {
            allBlockEls.forEach((el) => {
                el.style.transitionDuration = '0ms';
                el.style.transitionDelay = '0ms';
                this.withBlockChildren(el, (subEl) => {
                    subEl.style.transitionDuration = '0ms';
                    subEl.style.transitionDelay = '0ms';
                });
            });
        };
        resetTransitionDurationDelay();
        // PREPARE ENTER
        blocksToEnter.forEach((blockToEnterEl) => {
            const blockParams = paneFlow.getBlockParamsByEl(newPaneParams, blockToEnterEl);
            paneFlow.setBlockCSSVars(newPaneParams, blockParams);
            paneFlow.setBlockChildren(newPaneParams, blockParams, {
                setParallax: true,
                stage: 'enter',
                direction,
            });
            paneFlow.blockEnter(newPaneParams, blockParams, direction);
        });
        const transitionEndTargetEl = paneFlow.getTransitionEndTargetEl({
            blocksToEnter,
            blocksToChange,
            blocksToExit,
            direction,
            currentPaneParams,
            newPaneParams,
        });
        this._expectedSlideChangeEndIndexes = [currentPaneIndex, newPaneIndex];
        const onTransitionsEnd = () => {
            resetTransitionDurationDelay();
            if (this._expectedSlideChangeEndIndexes[0] === currentPaneIndex &&
                this._expectedSlideChangeEndIndexes[1] === newPaneIndex) {
                allBlockEls.forEach((el) => {
                    el.style.transitionDuration = '0ms';
                    paneFlow.withBlockChildren(el, (subEl) => {
                        subEl.style.transitionDuration = '0ms';
                    });
                });
                this.startAutoplay();
                paneFlow.emit('slideChangeEnd', {
                    direction,
                    currentPaneIndex,
                    newPaneIndex,
                });
            }
            if (transitionEndTargetEl) {
                transitionEndTargetEl.removeEventListener('transitionend', onTransitionsEnd);
            }
        };
        nextTick(() => {
            this.stopAutoplay();
            paneFlow.emit('slideChangeStart', {
                direction,
                currentPaneIndex,
                newPaneIndex,
            });
            // animate
            const exitDelay = blocksToExit.length * BLOCK_DELAY;
            const changeDelay = blocksToChange.length * BLOCK_DELAY;
            allBlockEls.forEach((el) => {
                el.style.transitionDuration = `${TRANSITION_DURATION}ms`;
            });
            [...blocksToChange, ...blocksToEnter].forEach((el) => {
                el.classList.forEach((className) => {
                    if (className.startsWith('current-pane-')) {
                        el.classList.remove(className);
                    }
                });
                el.classList.add(`current-pane-${newPaneIndex}`);
            });
            // ANIMATE CHANGE
            blocksToChange.forEach((blockEl, blockElIndex) => {
                paneFlow.setBlockCSSVars(newPaneParams, blockEl);
                paneFlow.setBlockChildren(newPaneParams, blockEl);
                const blockDelay = exitDelay + blockElIndex * BLOCK_DELAY;
                blockEl.style.transitionDelay = `${blockDelay}ms`;
                paneFlow.withBlockChildren(blockEl, (subEl) => {
                    subEl.style.transitionDelay = `${blockDelay}ms`;
                    subEl.style.transitionDuration = `${TRANSITION_DURATION}ms`;
                });
            });
            // ANIMATE EXIT
            blocksToExit.forEach((blockEl, blockElIndex, arr) => {
                const blockParams = paneFlow.getBlockParamsByEl(currentPaneParams, blockEl);
                const delay = direction === 'next'
                    ? blockElIndex * BLOCK_DELAY
                    : (arr.length - blockElIndex - 1) * BLOCK_DELAY;
                blockEl.style.transitionDelay = `${delay}ms`;
                paneFlow.setBlockChildren(newPaneParams, blockParams, {
                    setParallax: true,
                    stage: 'exit',
                    direction,
                });
                paneFlow.withBlockChildren(blockEl, (subEl) => {
                    subEl.style.transitionDelay = `${delay}ms`;
                    subEl.style.transitionDuration = `${TRANSITION_DURATION}ms`;
                });
                paneFlow.blockExit(currentPaneParams, blockParams, direction);
            });
            blocksToEnter.forEach((blockEl, blockElIndex, arr) => {
                const blockParams = paneFlow.getBlockParamsByEl(newPaneParams, blockEl);
                const delay = direction === 'next'
                    ? blockElIndex * BLOCK_DELAY
                    : (arr.length - blockElIndex - 1) * BLOCK_DELAY;
                blockEl.style.transform = `translate3d(0,0,0)`;
                blockEl.style.transitionDelay = `${exitDelay + changeDelay + delay}ms`;
                paneFlow.withBlockChildren(blockEl, (subEl) => {
                    // @ts-ignore
                    if (subEl.__hasParallax) {
                        // @ts-ignore
                        subEl.style.transitionDuration = `${TRANSITION_DURATION * 1.2}ms`;
                    }
                    subEl.style.transitionDelay = `${exitDelay + changeDelay + delay}ms`;
                });
                paneFlow.setBlockChildren(newPaneParams, blockParams);
                paneFlow.playVideo(blockEl);
            });
            if (transitionEndTargetEl) {
                transitionEndTargetEl.addEventListener('transitionend', onTransitionsEnd);
            }
            else {
                // @ts-ignore
                paneFlow._transitionEndTimeout = setTimeout(() => {
                    onTransitionsEnd();
                }, TRANSITION_DURATION);
            }
            paneFlow.currentPaneIndex = newPaneIndex;
            paneFlow.updatePagination();
        });
    }
    updatePagination() {
        this.pagination.bulletEls.forEach((bulletEl, bulletElIndex) => {
            if (bulletElIndex === this.currentPaneIndex) {
                bulletEl.classList.add('paneflow-pagination-item-active');
            }
            else {
                bulletEl.classList.remove('paneflow-pagination-item-active');
            }
        });
        this.pagination.thumbEls.forEach((thumbEl, thumbElIndex) => {
            if (thumbElIndex === this.currentPaneIndex) {
                thumbEl.classList.add('paneflow-thumbs-item-active');
            }
            else {
                thumbEl.classList.remove('paneflow-thumbs-item-active');
            }
        });
    }
    initPaginationThumbs() {
        const { el, _document } = this;
        const { panes } = this.params;
        if (!el || panes.length < 2)
            return;
        const paginationParams = this.params.pagination;
        el.classList.add(`paneflow-with-thumbs`);
        let paginationEl = document.querySelector('.paneflow-thumbs');
        if (!paginationEl) {
            paginationEl = _document.createElement('div');
            paginationEl.classList.add('paneflow-thumbs');
        }
        else {
            paginationEl.innerHTML = '';
        }
        const thumbsContainerEl = _document.createElement('div');
        thumbsContainerEl.classList.add('paneflow-thumbs-container');
        paginationEl.appendChild(thumbsContainerEl);
        if (paginationParams?.clickable) {
            paginationEl.classList.add('paneflow-thumbs-clickable');
        }
        this.pagination.el = paginationEl;
        el.appendChild(paginationEl);
        panes.forEach((paneParams, paneIndex) => {
            const thumbEl = _document.createElement('div');
            thumbEl.classList.add('paneflow-thumbs-item');
            paneParams.blocks.forEach((blockParams) => {
                const blockEl = _document.createElement('div');
                blockEl.classList.add('paneflow-thumbs-item-block');
                const blockCSSVars = getBlockCSSVars(paneParams, blockParams);
                Object.entries(blockCSSVars).forEach(([key, value]) => {
                    blockEl.style.setProperty(key, value);
                });
                thumbEl.appendChild(blockEl);
            });
            if (paneIndex === this.currentPaneIndex) {
                thumbEl.classList.add('paneflow-thumbs-item-active');
            }
            this.pagination.thumbEls.push(thumbEl);
            thumbsContainerEl.appendChild(thumbEl);
        });
        this.pagination.onClick = (e) => {
            const thumbEl = e.target.closest('.paneflow-thumbs-item');
            const index = this.pagination.thumbEls.indexOf(thumbEl);
            if (index === -1)
                return;
            this.setPane(index);
        };
        this.pagination.el.addEventListener('click', this.pagination.onClick);
    }
    initPaginationBullets() {
        const { el, _document } = this;
        const { panes } = this.params;
        if (!el || panes.length < 2)
            return;
        const paginationParams = this.params.pagination;
        el.classList.add(`paneflow-with-pagination`);
        let paginationEl = el.querySelector('.paneflow-pagination');
        if (!paginationEl) {
            paginationEl = _document.createElement('div');
            paginationEl.classList.add('paneflow-pagination');
        }
        else {
            paginationEl.innerHTML = '';
        }
        if (paginationParams?.clickable) {
            paginationEl.classList.add('paneflow-pagination-clickable');
        }
        this.pagination.el = paginationEl;
        el.appendChild(paginationEl);
        panes.forEach((paneParams, paneIndex) => {
            const bulletEl = _document.createElement('div');
            bulletEl.classList.add('paneflow-pagination-item');
            if (paneIndex === this.currentPaneIndex) {
                bulletEl.classList.add('paneflow-pagination-item-active');
            }
            this.pagination.bulletEls.push(bulletEl);
            paginationEl.appendChild(bulletEl);
        });
        this.pagination.onClick = (e) => {
            const bulletEl = e.target.closest('.paneflow-pagination-item');
            const index = this.pagination.bulletEls.indexOf(bulletEl);
            if (index === -1)
                return;
            this.setPane(index);
        };
        this.pagination.el.addEventListener('click', this.pagination.onClick);
    }
    initPagination() {
        const { el } = this;
        const { panes } = this.params;
        if (!el || panes.length < 2)
            return;
        const paginationParams = this.params.pagination;
        if (paginationParams?.type === 'thumbs') {
            this.initPaginationThumbs();
        }
        else {
            this.initPaginationBullets();
        }
    }
    initNavigation() {
        const { el, _document } = this;
        const { panes } = this.params;
        if (!el || panes.length < 2)
            return;
        const prevEl = _document.createElement('div');
        prevEl.classList.add('paneflow-prev');
        prevEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="128" height="128" viewBox="0 0 128 128"><polygon fill-rule="evenodd" points="72 25 33 64 72 103 78.922 96.078 46.845 64 78.922 31.922"/></svg>`;
        el.appendChild(prevEl);
        const nextEl = _document.createElement('div');
        nextEl.classList.add('paneflow-next');
        nextEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="128" height="128" viewBox="0 0 128 128"><polygon fill-rule="evenodd" points="55.922 25 94.922 64 55.922 103 49 96.078 81.078 64 49 31.922"/></svg>`;
        el.appendChild(nextEl);
        this.navigation.prevEl = prevEl;
        this.navigation.nextEl = nextEl;
        this.navigation.onClick = (e) => {
            const navEl = e.target.closest('.paneflow-prev, .paneflow-next');
            if (navEl.classList.contains('paneflow-prev')) {
                this.prevPane();
            }
            else {
                this.nextPane();
            }
        };
        this.navigation.prevEl.addEventListener('click', this.navigation.onClick);
        this.navigation.nextEl.addEventListener('click', this.navigation.onClick);
    }
    initKeyboardControl() {
        const { el, _document } = this;
        if (this.keyboardControl.initialized)
            return;
        this.keyboardControl.onKeyDown = (e) => {
            const isCmdKey = e.metaKey || e.ctrlKey;
            // ignore if cmd key is pressed
            if (!el || isCmdKey)
                return;
            // determine is focusable element is active
            const activeElement = _document.activeElement;
            if (activeElement &&
                activeElement.matches('input, textarea, select, [contenteditable]')) {
                return;
            }
            // determine if el is in viewport
            const elRect = el.getBoundingClientRect();
            const isInViewport = elRect.top <= window.innerHeight && elRect.bottom >= 0;
            if (!isInViewport)
                return;
            // navigate
            if (e.key === 'ArrowLeft') {
                this.prevPane();
            }
            else if (e.key === 'ArrowRight') {
                this.nextPane();
            }
        };
        _document.addEventListener('keydown', this.keyboardControl.onKeyDown);
    }
    startAutoplay() {
        const { params, pagination } = this;
        if (!params.autoplay?.enabled)
            return;
        let interval = params.autoplay.interval;
        if (pagination.el && pagination.bulletEls.length > 0) {
            pagination.el.classList.add('paneflow-pagination-autoplay');
            pagination.el.style.setProperty('--pf-autoplay-interval', `${interval}ms`);
            pagination.bulletEls.forEach((bulletEl) => {
                bulletEl.classList.remove('paneflow-pagination-item-autoplay');
                if (bulletEl.classList.contains('paneflow-pagination-item-active')) {
                    bulletEl.classList.add('paneflow-pagination-item-autoplay');
                }
            });
        }
        const currentPaneParams = this.params.panes[this.currentPaneIndex];
        if (typeof currentPaneParams.autoplayInternal === 'number') {
            interval = currentPaneParams.autoplayInternal;
        }
        // @ts-ignore
        this._autoplayInterval = setTimeout(() => {
            this.nextPane();
        }, typeof interval === 'undefined' ? 3000 : interval);
    }
    stopAutoplay() {
        if (!this.params.autoplay?.enabled)
            return;
        clearTimeout(this._autoplayInterval);
    }
    playVideo(blockEl) {
        const videoEls = blockEl.querySelectorAll('video');
        if (videoEls.length === 0)
            return;
        videoEls.forEach((videoEl) => {
            if (videoEl.autoplay)
                return;
            videoEl.currentTime = 0;
            videoEl.play();
        });
    }
    destroy() {
        this.stopAutoplay();
        document.removeEventListener('keydown', this.keyboardControl.onKeyDown);
        this.pagination.el?.removeEventListener('click', this.pagination.onClick);
        this.navigation.prevEl?.removeEventListener('click', this.navigation.onClick);
        this.navigation.nextEl?.removeEventListener('click', this.navigation.onClick);
    }
    init() {
        const { el } = this;
        const { panes } = this.params;
        if (!el)
            return;
        // @ts-ignore
        el.paneFlow = this;
        const containerCSSVars = getContainerCSSVars(this.params);
        Object.entries(containerCSSVars).forEach(([key, value]) => {
            el.style.setProperty(key, value);
        });
        if (this.params.pagination?.enabled) {
            this.initPagination();
        }
        if (this.params.keyboardControl?.enabled) {
            this.initKeyboardControl();
        }
        if (this.params.navigation?.enabled) {
            this.initNavigation();
        }
        if (this.params.intro) {
            this.currentPaneIndex = -1;
            this.setPane(0);
            if (this.pagination &&
                this.pagination.el &&
                this.pagination.bulletEls &&
                this.pagination.bulletEls.length > 0) {
                this.pagination.el.classList.add('paneflow-pagination-autoplay');
            }
            return;
        }
        else {
            if (this.params.autoplay?.enabled) {
                this.startAutoplay();
            }
        }
        const paneParams = panes[this.currentPaneIndex];
        if (!paneParams)
            return;
        const { blocks } = paneParams;
        blocks.forEach((blockParams) => {
            this.setBlockCSSVars(paneParams, blockParams);
            this.setBlockChildren(paneParams, blockParams);
            const blockEl = this.getBlockEl(blockParams.el);
            if (!blockEl)
                return;
            blockEl.style.transform = `translate3d(0,0,0)`;
            blockEl.classList.add(`current-pane-${this.currentPaneIndex}`);
            this.playVideo(blockEl);
        });
    }
}

export { PaneFlow as default, getBlockCSSVars, getContainerCSSVars };
