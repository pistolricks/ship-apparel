import {Component, createMemo, For, Show} from "solid-js";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import * as path from "node:path";



const Breadcrumbs: Component<{
    path?: string;
}> = props => {

    const path = () => props.path ?? "";


    const splitPath = createMemo(() => {
        let s = path()?.replace(import.meta.env.VITE_APP_URL, "")
        let split = (s ?? "").split("/")
        console.log(split)
        return split
    })


    return (
        <Show<boolean> when={splitPath()?.length > 0 && splitPath()?.[1]?.length > 0}>
            <div class={'flex justify-between items-center w-full pt-3 mb-3 px-0.5 text-gray-normal'}>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" as="a">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <For<string[]> each={splitPath()}>
                            {(path, i) => (
                                <Show<boolean> when={i() > 0 && path?.length > 2 }>
                                    <BreadcrumbSeparator>
                                    </BreadcrumbSeparator>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink current={i() + 1 === splitPath()?.length} href={splitPath()?.[1] === 'products' ? `/products/${path}` : `${path}`} class={"capitalize"}>{path}</BreadcrumbLink>
                                    </BreadcrumbItem>

                                </Show>
                            )}
                        </For>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </Show>
    );
};

export  {Breadcrumbs};
