import {type ComponentProps, JSX, splitProps} from "solid-js";
import {cn} from "~/lib/utils";
import ol from "ol/dist/ol";



export type IconProps = ComponentProps<"svg">


export interface IconElementProps {
    xlink: { href?: string }
}

export const IconSvg: (props: any) => Node | JSX.ArrayElement | string | number | boolean | null | undefined = ((props: any) => <svg {...props} />)

const IconElement = (props: IconProps) => {
    const [, rest] = splitProps(props, ["class"])
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={cn("size-4", props.class)}
            {...rest}
        />
    )
}


export function IconCategories(props: IconProps) {
    return (
        <IconElement {...props}>

            <path
                d="M5.127 3.502 5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0 0 12.75 2h-5.5a2.25 2.25 0 0 0-2.123 1.502ZM1 10.25A2.25 2.25 0 0 1 3.25 8h13.5A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5ZM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 0 1 5.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 0 0-.123-.002H3.25Z"/>

        </IconElement>
    )
}

export function IconContents(props: IconProps) {
    return (
        <IconElement {...props}>

            <path fill-rule="evenodd"
                  d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  clip-rule="evenodd"/>

        </IconElement>
    )
}

export function IconPlaces(props: IconProps) {
    return (
        <IconElement {...props}>

            <path fill-rule="evenodd"
                  d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                  clip-rule="evenodd"/>

        </IconElement>
    )
}

export function IconProfile(props: IconProps) {
    return (
        <IconElement {...props}>

            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>

        </IconElement>
    )
}

export function IconVendors(props: IconProps) {
    return (
        <IconElement {...props}>

            <path
                d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z"/>

        </IconElement>
    )
}


export function IconLogo(props: IconProps) {
    return (
        <IconElement viewBox="0 0 24 24" {...props}>
            <path
                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
        </IconElement>
    )
}

// ICONS

export function IconAlertTriangle(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 9v4"/>
            <path
                d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/>
            <path d="M12 16h.01"/>
        </IconElement>
    )
}

export function IconArchive(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/>
            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/>
            <path d="M10 12l4 0"/>
        </IconElement>
    )
}

export function IconArrowDown(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 5l0 14"/>
            <path d="M18 13l-6 6"/>
            <path d="M6 13l6 6"/>
        </IconElement>
    )
}

export function IconArrowRight(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 12l14 0"/>
            <path d="M13 18l6 -6"/>
            <path d="M13 6l6 6"/>
        </IconElement>
    )
}

export function IconArrowUp(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 5l0 14"/>
            <path d="M18 11l-6 -6"/>
            <path d="M6 11l6 -6"/>
        </IconElement>
    )
}

export function IconBell(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
        </IconElement>
    )
}

export function IconBold(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"/>
            <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"/>
        </IconElement>
    )
}

export function IconBrandApple(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"/>
            <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"/>
        </IconElement>
    )
}

export function IconBrandGithub(props: IconProps) {
    return (
        <IconElement stroke="none" fill="currentColor" {...props}>
            <path
                d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"/>
            {/* <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> */}
        </IconElement>
    )
}

export function IconBrandGoogle(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"/>
        </IconElement>
    )
}

export function IconBrandInstagram(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <path d="M16.5 7.5l0 .01"/>
        </IconElement>
    )
}

export function IconLock(props: IconProps) {
    return (
        <IconElement {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
        </IconElement>
    )
}

export function IconBrandPaypal(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4"/>
        </IconElement>
    )
}

export function IconBrandReddit(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"/>
            <path d="M12 8l1 -5l6 1"/>
            <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <circle cx="9" cy="13" r=".5" fill="currentColor"/>
            <circle cx="15" cy="13" r=".5" fill="currentColor"/>
            <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"/>
        </IconElement>
    )
}

export function IconBrandTypescript(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"/>
            <path d="M9 12h4"/>
            <path d="M11 12v6"/>
            <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"/>
        </IconElement>
    )
}

export function IconBrandVercel(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 19h18l-9 -15z" fill="currentColor"/>
        </IconElement>
    )
}

export function IconBrandX(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
        </IconElement>
    )
}

export function IconBrandYoutube(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"/>
            <path d="M10 9l5 3l-5 3z"/>
        </IconElement>
    )
}

export function IconCalendar(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
            <path d="M16 3v4"/>
            <path d="M8 3v4"/>
            <path d="M4 11h16"/>
            <path d="M11 15h1"/>
            <path d="M12 15v3"/>
        </IconElement>
    )
}

export function IconCheck(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 12l5 5l10 -10"/>
        </IconElement>
    )
}

export function IconChevronDown(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M6 9l6 6l6 -6"/>
        </IconElement>
    )
}

export function IconChevronLeft(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M15 6l-6 6l6 6"/>
        </IconElement>
    )
}

export function IconChevronRight(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M9 6l6 6l-6 6"/>
        </IconElement>
    )
}

export function IconChevronUp(props: IconProps) {
    return (
        <IconElement {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15l6 -6l6 6"/>
        </IconElement>
    )
}

export function IconChevronsLeft(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M11 7l-5 5l5 5"/>
            <path d="M17 7l-5 5l5 5"/>
        </IconElement>
    )
}

export function IconChevronsRight(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M7 7l5 5l-5 5"/>
            <path d="M13 7l5 5l-5 5"/>
        </IconElement>
    )
}

export function IconCircle(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
        </IconElement>
    )
}

export function IconCircleCheck(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M9 12l2 2l4 -4"/>
        </IconElement>
    )
}

export function IconCircleHelp(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M12 16v.01"/>
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>
        </IconElement>
    )
}

export function IconCircleOff(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"/>
            <path d="M3 3l18 18"/>
        </IconElement>
    )
}

export function IconCirclePlus(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M9 12h6"/>
            <path d="M12 9v6"/>
        </IconElement>
    )
}

export function IconClock(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M12 7v5l3 3"/>
        </IconElement>
    )
}

export function IconCloud(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"/>
        </IconElement>
    )
}

export function IconCommand(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"/>
        </IconElement>
    )
}

export function IconCopy(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"/>
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>
        </IconElement>
    )
}

export function IconCreditCard(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/>
            <path d="M3 10l18 0"/>
            <path d="M7 15l.01 0"/>
            <path d="M11 15l2 0"/>
        </IconElement>
    )
}

export function IconDesktop(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/>
            <path d="M7 20h10"/>
            <path d="M9 16v4"/>
            <path d="M15 16v4"/>
        </IconElement>
    )
}

export function IconDots(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </IconElement>
    )
}

export function IconDotsVertical(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </IconElement>
    )
}

export function IconDownload(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/>
            <path d="M7 11l5 5l5 -5"/>
            <path d="M12 4l0 12"/>
        </IconElement>
    )
}

export function IconExternalLink(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/>
            <path d="M11 13l9 -9"/>
            <path d="M15 4h5v5"/>
        </IconElement>
    )
}

export function IconEyeOff(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/>
            <path
                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/>
            <path d="M3 3l18 18"/>
        </IconElement>
    )
}

export function IconFile(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
        </IconElement>
    )
}

export function IconForward(props: IconProps) {
    return (
        <IconElement {...props}>
            <polyline points="15 17 20 12 15 7"/>
            <path d="M4 18v-2a4 4 0 0 1 4-4h12"/>
        </IconElement>
    )
}

export function IconFullscreen(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <rect width="10" height="8" x="7" y="8" rx="1"/>
        </IconElement>
    )
}

export function IconHash(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 9l14 0"/>
            <path d="M5 15l14 0"/>
            <path d="M11 4l-4 16"/>
            <path d="M17 4l-4 16"/>
        </IconElement>
    )
}

export function IconHome(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
        </IconElement>
    )
}

export function IconInbox(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
            <path d="M4 13h3l3 3h4l3 -3h3"/>
        </IconElement>
    )
}

export function IconItalic(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M11 5l6 0"/>
            <path d="M7 19l6 0"/>
            <path d="M14 5l-4 14"/>
        </IconElement>
    )
}

export function IconLaptop(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 19l18 0"/>
            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/>
        </IconElement>
    )
}

export function IconLoader(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 6l0 -3"/>
            <path d="M16.25 7.75l2.15 -2.15"/>
            <path d="M18 12l3 0"/>
            <path d="M16.25 16.25l2.15 2.15"/>
            <path d="M12 18l0 3"/>
            <path d="M7.75 16.25l-2.15 2.15"/>
            <path d="M6 12l-3 0"/>
            <path d="M7.75 7.75l-2.15 -2.15"/>
        </IconElement>
    )
}

export function IconMail(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/>
            <path d="M3 7l9 6l9 -6"/>
        </IconElement>
    )
}

export function IconMessages(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
        </IconElement>
    )
}

export function IconMinus(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 12l14 0"/>
        </IconElement>
    )
}

export function IconMobile(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"/>
            <path d="M11 4h2"/>
            <path d="M12 17v.01"/>
        </IconElement>
    )
}

export function IconMoon(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
        </IconElement>
    )
}

export function IconPencil(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"/>
        </IconElement>
    )
}

export function IconPhoto(props: IconProps) {
    return (
        <IconElement {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
        </IconElement>
    )
}


export function IconReply(props: IconProps) {
    return (
        <IconElement {...props}>
            <polyline points="9 17 4 12 9 7"/>
            <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
        </IconElement>
    )
}

export function IconReplyAll(props: IconProps) {
    return (
        <IconElement {...props}>
            <polyline points="7 17 2 12 7 7"/>
            <polyline points="12 17 7 12 12 7"/>
            <path d="M22 18v-2a4 4 0 0 0-4-4H7"/>
        </IconElement>
    )
}

export function IconPlus(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 5l0 14"/>
            <path d="M5 12l14 0"/>
        </IconElement>
    )
}

export function IconRocket(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/>
            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/>
            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </IconElement>
    )
}

export function IconSearch(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
            <path d="M21 21l-6 -6"/>
        </IconElement>
    )
}

export function IconSelector(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M8 9l4 -4l4 4"/>
            <path d="M16 15l-4 4l-4 -4"/>
        </IconElement>
    )
}

export function IconSend(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M10 14l11 -11"/>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>
        </IconElement>
    )
}

export function IconSettings(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
        </IconElement>
    )
}

export function IconShoppingCart(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M17 17h-11v-14h-2"/>
            <path d="M6 5l14 1l-1 7h-13"/>
        </IconElement>
    )
}

export function IconSidebarOpen(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
            <path d="M9 4v16"/>
            <path d="M14 10l2 2l-2 2"/>
        </IconElement>
    )
}

export function IconSmile(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M9 10l.01 0"/>
            <path d="M15 10l.01 0"/>
            <path d="M9.5 15a3.5 3.5 0 0 0 5 0"/>
        </IconElement>
    )
}

export function IconStar(props: IconProps) {
    return (
        <IconElement {...props}>
            <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
        </IconElement>
    )
}

export function IconSun(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
        </IconElement>
    )
}

export function IconTablet(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z"/>
            <path d="M9 18h6"/>
        </IconElement>
    )
}

export function IconTerminal(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M5 7l5 5l-5 5"/>
            <path d="M12 19l7 0"/>
        </IconElement>
    )
}

export function IconTimer(props: IconProps) {
    return (
        <IconElement {...props}>
            <line x1="10" x2="14" y1="2" y2="2"/>
            <line x1="12" x2="15" y1="14" y2="11"/>
            <circle cx="12" cy="14" r="8"/>
        </IconElement>
    )
}

export function IconTrash(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M4 7l16 0"/>
            <path d="M10 11l0 6"/>
            <path d="M14 11l0 6"/>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
        </IconElement>
    )
}

export function IconUnderline(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M7 5v5a5 5 0 0 0 10 0v-5"/>
            <path d="M5 19h14"/>
        </IconElement>
    )
}

export function IconUpdates(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>
            <path d="M12 9l0 3"/>
            <path d="M12 15l.01 0"/>
        </IconElement>
    )
}

export function IconUser(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
        </IconElement>
    )
}

export function IconUsers(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
        </IconElement>
    )
}

export function IconX(props: IconProps) {
    return (
        <IconElement {...props}>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </IconElement>
    )
}

export function IconFunnel(props: IconProps) {
    return (
        <IconElement {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"/>
        </IconElement>
    )
}

export function SearchIcon(props: IconProps) {
    return (
        <IconElement {...props}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>

        </IconElement>
    )
}

export function IconLayout(props: IconProps) {
    return (
        <IconElement {...props}>

            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M9 3v18"/>
        </IconElement>
    )
}

export function IconMapPin(props: IconProps) {
    return (
        <IconElement {...props}>
            <path fill-rule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clip-rule="evenodd"/>
        </IconElement>
    )
}

export function GitHubIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>GitHub</title>
            <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function DiscordIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Discord</title>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function OpenCollectiveIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 32 32" {...props}>
            <title>OpenCollective</title>
            <path
                fill="currentColor"
                d="M29.145 6.896a15.9 15.9 0 0 1 0 18.208l-4.129-4.131a10.269 10.269 0 0 0 0-9.947zm-4.041-4.041l-4.131 4.129a10.28 10.28 0 0 0-15.234 9.01c0 3.636 1.916 7 5.047 8.849s7 1.905 10.187.156l4.131 4.145c-4.891 3.391-11.26 3.781-16.531 1.021S-.006 21.941-.006 15.993A16.015 16.015 0 0 1 8.573 1.816a16.006 16.006 0 0 1 16.531 1.021zm4.041 4.041a15.9 15.9 0 0 1 0 18.208l-4.129-4.131a10.269 10.269 0 0 0 0-9.947z"
            />
        </svg>
    );
}

export function TwitterIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Twitter</title>
            <path
                d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function SunIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Sun</title>
            <path
                d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function MoonIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Moon</title>
            <path
                d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function DesktopIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" fill="none" {...props}>
            <title>Desktop</title>
            <path
                d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function CopyIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Copy</title>
            <path
                d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function CheckIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Check</title>
            <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function CaretSortIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Sort</title>
            <path
                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function CrossIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Cross</title>
            <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function DotFilledIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Dot</title>
            <path
                d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function ChevronRightIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Chevron</title>
            <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function ChevronDownIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Chevron</title>
            <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function HamburgerMenuIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 15 15" {...props}>
            <title>Menu</title>
            <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function VolumeOnIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <title>Volume On</title>
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5L6 15"
            />
        </svg>
    );
}

export function VolumeOffIcon(props: ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <title>Volume Off</title>
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602A5.001 5.001 0 0 1 15 16m2.7-11a9 9 0 0 1 2.362 11.086m-1.676 2.299A9.005 9.005 0 0 1 17.7 19M9.069 5.054L9.5 4.5A.8.8 0 0 1 11 5v2m0 4v8a.8.8 0 0 1-1.5.5L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l1.294-1.664M3 3l18 18"
            />
        </svg>
    );
}

export function LoaderIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            {...props}
        >
            <title>Loader</title>
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
    );
}

export function ArrowIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
        >
            <title>Arrow</title>
            <path d="M12 10L16 14H8L12 10Z"/>
        </svg>
    );
}

export function MagnifyingGlassIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            fill="currentColor"
            {...props}
        >
            <title>Magnifying Glass</title>
            <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function ReloadIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            fill="currentColor"
            {...props}
        >
            <title>Reload</title>
            <path
                d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function QuickViewIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            fill="currentColor"
            {...props}
        >
            <title>Quick View</title>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>
        </svg>
    );
}


export function LogoIcon(props: ComponentProps<"svg">) {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 581 238" enable-background="new 0 0 581 238"
             {...props}
        >
<path fill="#FDFDFD" opacity="1.000000" stroke="none"
      d="
M437.000000,239.000000
	C291.377625,239.000000 146.255264,239.000000 1.066452,239.000000
	C1.066452,159.735229 1.066452,80.470383 1.066452,1.102768
	C194.666641,1.102768 388.333313,1.102768 581.977783,1.102768
	C581.977783,80.411339 581.977783,159.705673 581.977783,239.000000
	C533.803772,239.000000 485.651886,239.000000 437.000000,239.000000
M405.329926,150.505798
	C405.272400,150.320282 405.214905,150.134766 405.410248,149.047684
	C405.318085,140.711395 405.225922,132.375122 405.295868,123.497536
	C405.228088,123.321815 405.160278,123.146088 405.290405,122.193855
	C403.148132,111.877014 398.508728,108.210922 388.436951,109.208527
	C387.955048,109.464905 387.473114,109.721291 386.251099,109.980980
	C384.834686,110.924492 383.418304,111.868004 381.340607,112.460312
	C381.115936,112.351540 380.891266,112.242760 380.915253,111.210342
	C380.939209,108.248123 380.981110,105.285919 380.983826,102.323685
	C380.993408,91.841408 380.988373,91.841400 369.231171,93.409889
	C368.828888,94.281830 368.074677,95.154373 368.076172,96.025612
	C368.107239,114.083702 368.224182,132.141647 368.529510,151.101654
	C370.393372,151.478592 372.251373,152.142776 374.122162,152.181061
	C380.975861,152.321243 380.978668,152.242828 380.984283,145.603729
	C380.989441,139.474319 380.825806,133.338959 381.044800,127.217255
	C381.239380,121.776894 385.592743,118.725739 389.574066,121.435623
	C391.352417,122.646072 392.623505,125.701881 392.771332,128.007004
	C393.267517,135.743515 393.154236,143.519135 393.712555,151.985886
	C397.485840,151.659515 401.259125,151.333130 405.329926,150.505798
M468.732758,24.020546
	C467.573578,34.883583 468.359161,35.782574 478.132812,34.755859
	C478.785217,34.687321 479.752075,34.786762 480.011841,34.415577
	C480.499268,33.719048 480.576141,32.735203 480.979675,31.037500
	C480.929260,29.065170 480.878845,27.092840 481.090027,24.482698
	C477.605133,20.793415 473.633789,22.356979 469.591675,23.587921
	C469.591675,23.587921 469.432556,23.704462 468.732758,24.020546
M480.974030,80.080574
	C480.984253,68.103622 481.058014,56.125927 480.917023,44.150753
	C480.901001,42.790493 479.678101,41.444443 478.114685,39.900364
	C475.046539,39.900364 471.978394,39.900364 468.437347,39.900364
	C468.437347,53.515827 468.405090,66.404724 468.503693,79.292618
	C468.510925,80.237968 469.497284,82.004807 469.971283,81.985512
	C473.533173,81.840569 477.080719,81.343018 480.974030,80.080574
M331.928955,78.936905
	C331.928955,70.042633 331.928955,61.148365 331.928955,52.368164
	C339.581909,51.564030 340.598083,49.264500 338.069305,40.182091
	C336.201935,39.978474 334.283905,39.769329 332.022736,39.522766
	C332.022736,36.107109 331.935181,32.973328 332.049103,29.846897
	C332.149261,27.098301 331.083954,25.820614 328.244476,26.050966
	C326.590881,26.185112 324.904694,26.205011 323.255585,26.045290
	C320.065918,25.736364 319.182617,27.319250 319.312592,30.198910
	C319.452393,33.296463 319.344177,36.405212 319.344177,39.405968
	C312.603149,40.254448 312.668793,40.258389 312.446503,43.959332
	C312.163391,48.673271 311.872192,53.297443 319.341034,52.081787
	C319.341034,61.022503 319.265839,69.474182 319.414093,77.921944
	C319.439178,79.350746 320.417145,81.979507 320.970428,81.983673
	C324.398560,82.009445 327.831085,81.443710 331.752533,80.527977
	C331.709290,80.287102 331.666077,80.046227 331.928955,78.936905
M497.939301,39.971039
	C494.717590,39.971039 491.495850,39.971039 487.844696,39.971039
	C487.844696,53.675617 487.803589,66.557343 487.937378,79.437263
	C487.946320,80.294037 489.283936,81.137016 490.661743,82.320259
	C493.107361,82.211693 495.553009,82.103119 498.702637,82.087479
	C499.191467,80.981071 500.092255,79.878532 500.102692,78.767624
	C500.173920,71.179779 500.058136,63.590179 500.512177,55.522446
	C502.979980,49.007233 507.266388,48.434055 512.153748,54.902176
	C512.397949,63.618515 512.642212,72.334854 513.190491,81.746605
	C516.454773,81.807495 519.719055,81.868385 523.792236,81.848488
	C524.121277,80.979294 524.735352,80.110184 524.735657,79.240891
	C524.738586,70.177109 524.642822,61.113293 524.736084,51.330177
	C521.044556,38.897003 513.948181,35.765778 502.467407,41.295464
	C501.631744,41.697952 500.069305,40.591431 497.939301,39.971039
M288.515198,82.699265
	C292.720612,82.587036 296.925995,82.474808 301.868561,82.363289
	C302.789124,81.982269 303.727234,81.638451 304.627350,81.214081
	C309.904053,78.726372 312.119019,74.398643 311.957428,68.738083
	C311.804810,63.391483 309.030579,59.752117 303.341339,57.853668
	C300.364044,56.860168 297.081116,56.714428 294.192627,55.549812
	C292.605255,54.909798 291.550018,52.950039 290.254852,51.585320
	C292.363098,51.116005 295.627960,49.553112 296.388733,50.357780
	C300.782013,55.004436 305.946899,52.124737 310.866058,53.158409
	C310.866058,51.906536 310.977173,51.232296 310.849457,50.606831
	C308.913269,41.125671 298.961029,36.325058 287.827698,39.478844
	C281.007629,41.410793 277.156128,46.233177 277.239380,52.736252
	C277.322083,59.199459 280.809937,63.079689 288.217621,64.904366
	C291.110107,65.616844 294.062897,66.129379 296.888611,67.041504
	C297.791870,67.333069 299.112335,68.836899 298.944702,69.399864
	C298.632202,70.449608 297.461548,71.816681 296.481110,71.967659
	C294.784973,72.228844 292.172302,72.328972 291.327789,71.328568
	C287.636017,66.955421 282.996796,68.210327 278.523041,68.242142
	C276.207092,74.923355 279.495331,79.767166 288.515198,82.699265
M268.801300,150.406540
	C268.600708,140.580170 268.400116,130.753784 268.235840,120.170403
	C264.636444,108.634369 257.122314,106.052452 244.887268,111.368988
	C241.705368,110.461670 238.477158,110.235550 235.253571,109.955910
	C232.461700,109.713737 231.390732,110.976913 231.407181,113.736916
	C231.476532,125.389824 231.336151,137.045609 231.590546,148.693390
	C231.617172,149.912964 233.551315,151.488754 234.954178,152.160034
	C236.172760,152.743164 237.914978,152.111862 239.386475,152.309647
	C243.412750,152.850830 244.678864,151.062103 244.545700,147.202164
	C244.327713,140.883514 244.503387,134.551895 244.472168,128.225952
	C244.456726,125.099236 244.615280,121.484428 248.317398,121.184715
	C250.780319,120.985336 253.421524,122.987839 255.936295,124.940704
	C256.031830,133.070343 256.127380,141.199997 256.051880,150.161835
	C258.510010,153.366089 264.407532,153.822220 268.801300,150.406540
M200.962540,125.828011
	C200.979996,126.244682 200.997452,126.661354 200.369125,127.419487
	C194.668747,128.335831 190.317200,131.127060 189.501404,137.122238
	C188.849716,141.911499 188.633270,147.101730 193.279480,150.455963
	C199.841217,155.193069 206.569016,154.391113 213.063660,150.345367
	C216.412888,153.284851 221.673630,153.617310 225.993607,150.482254
	C225.865784,140.893631 225.737946,131.305008 225.652847,120.948952
	C223.430267,113.290352 218.010788,109.518097 210.362183,109.064110
	C203.042145,108.629623 196.505127,110.477501 192.682526,117.538719
	C189.425598,123.554985 190.317947,125.030457 197.012482,125.061363
	C198.333389,125.067467 199.653915,125.153381 200.962540,125.828011
M234.825775,67.831642
	C235.795074,82.226936 245.032684,86.831779 258.853516,80.660728
	C261.608917,81.675438 264.436707,82.000168 267.262238,82.343773
	C270.923615,82.789032 272.231995,81.294518 272.148346,77.530113
	C271.926605,67.549835 272.072784,57.561382 272.072601,47.576183
	C272.072571,45.155148 272.072601,42.734108 272.072601,40.158020
	C267.496277,40.158020 263.751129,40.158020 259.507446,40.158020
	C259.507446,43.547802 259.566528,46.683132 259.494476,49.815449
	C259.364685,55.458549 259.318634,61.111351 258.919739,66.737564
	C258.681274,70.100838 256.371033,71.572327 253.048065,71.504425
	C249.583099,71.433617 247.925766,69.445160 247.558289,66.235252
	C247.370026,64.590919 247.440628,62.914074 247.438110,61.251858
	C247.427597,54.292637 247.433670,47.333393 247.433670,39.917557
	C244.046127,39.917557 241.238159,40.073975 238.455826,39.873875
	C235.633408,39.670895 234.564941,40.739731 234.634552,43.550617
	C234.819748,51.026691 234.847382,58.506668 234.784576,66.502708
	C234.852051,66.669510 234.919525,66.836304 234.825775,67.831642
M517.289673,123.154884
	C516.029663,115.009315 511.378052,110.324989 503.392334,109.159828
	C494.843536,107.912514 486.976562,111.448105 483.827911,117.952507
	C481.058868,123.672745 481.853851,125.019226 487.991211,125.059372
	C489.317444,125.068039 490.643066,125.168327 491.973053,125.871948
	C492.005737,126.301010 492.038422,126.730072 491.454834,127.522537
	C485.850342,128.434784 481.944031,131.371338 480.755310,137.091080
	C479.639618,142.459717 480.468903,147.542435 485.283173,150.829269
	C491.608551,155.147781 498.109924,154.345230 504.348572,150.379517
	C507.959595,153.385406 513.648193,153.656830 517.442139,150.300537
	C517.333435,141.514923 517.224792,132.729324 517.289673,123.154884
M435.448975,123.464050
	C431.642700,137.912674 438.273376,150.263794 451.278625,152.950348
	C463.634033,155.502640 474.679993,150.086258 476.033905,139.448364
	C471.280060,140.304520 466.664734,140.445450 462.610168,142.025406
	C456.299438,144.484528 450.953400,143.058975 448.083649,136.602158
	C449.851105,136.511032 451.423645,136.365540 452.996674,136.359970
	C459.988007,136.335251 466.980988,136.267883 473.970245,136.391449
	C476.842468,136.442215 478.157501,135.552933 478.343079,132.468719
	C479.286346,116.793701 465.524231,105.676231 450.388458,109.703316
	C442.996948,111.669922 438.926880,117.054184 434.468353,122.020149
	C434.329010,119.711060 434.220215,117.399582 434.040680,115.093620
	C433.896484,113.241501 433.666626,111.396049 433.474762,109.547638
	C431.341034,110.188141 429.147858,110.684868 427.099487,111.531776
	C426.123138,111.935440 425.422089,113.005005 424.659576,113.714157
	C420.837189,108.327919 415.685791,111.952606 410.758606,110.737816
	C410.758606,124.065987 410.456451,136.825134 410.903076,149.557999
	C411.089111,154.861450 416.014801,152.112320 418.859772,152.650543
	C421.722961,153.192200 423.768982,152.209808 423.750793,148.789642
	C423.721619,143.308380 423.725922,137.826767 423.750763,132.345444
	C423.767853,128.568863 424.968414,125.423729 428.865295,124.118370
	C430.861511,123.449684 432.975647,123.132935 435.448975,123.464050
M316.573242,93.256050
	C314.430603,93.131836 312.271362,93.134521 310.148834,92.856697
	C305.876343,92.297478 304.642059,94.200432 304.900482,98.263412
	C305.209167,103.116768 304.973236,108.004776 304.973236,113.262955
	C294.090698,106.743324 284.231201,107.873451 277.524841,115.913971
	C269.943359,125.003708 270.274994,138.745468 278.283997,147.371368
	C285.233948,154.856628 295.286194,155.659378 304.395935,149.456619
	C306.524048,153.330963 312.987885,154.141449 317.465729,150.312119
	C317.465302,136.662979 317.510773,123.013596 317.440796,109.364807
	C317.414581,104.251343 317.119781,99.139244 316.573242,93.256050
M565.405273,93.305061
	C563.599548,93.164467 561.775208,93.141777 559.991577,92.860954
	C554.830811,92.048454 553.207825,94.276703 553.653320,99.274284
	C554.053772,103.766411 553.737793,108.322403 553.737793,113.337982
	C543.491455,106.895874 533.616272,107.839516 526.738770,115.315613
	C519.371460,123.324120 518.494629,137.432739 525.648315,145.539032
	C528.546631,148.823273 532.855286,151.352936 537.014587,152.915207
	C542.733948,155.063446 548.318054,153.030655 552.998169,149.561050
	C555.826965,154.834259 560.456116,152.273575 564.144348,152.341461
	C564.887939,152.355179 566.160828,148.807281 566.374756,146.814026
	C566.745178,143.362167 566.505615,139.841675 566.474426,136.350403
	C566.351379,122.571495 566.209839,108.792747 566.148682,94.468346
	C566.031738,94.326920 565.914795,94.185501 565.405273,93.305061
M433.162628,81.772408
	C435.899597,81.990639 438.653198,82.473557 441.365723,82.303017
	C442.528473,82.229912 443.605804,80.797745 444.999756,79.085030
	C444.873932,70.063721 444.748077,61.042412 444.779388,51.261089
	C444.306122,49.584866 443.832855,47.908642 443.338776,45.563972
	C440.110718,37.822338 430.316772,36.046406 420.329865,42.829121
	C413.291687,37.311043 409.100098,37.154575 403.512970,40.815258
	C397.262756,40.361343 392.900818,40.044563 388.077972,39.694309
	C388.077972,53.483932 388.049591,66.263054 388.132996,79.041443
	C388.139496,80.040932 388.951294,81.907158 389.347198,81.895981
	C392.939117,81.794495 396.521729,81.364716 400.547668,80.513847
	C400.485535,80.296074 400.423401,80.078300 400.661591,78.982048
	C400.679443,71.659706 400.473633,64.325691 400.854645,57.022285
	C400.965424,54.898781 402.278046,51.868572 403.916046,51.084400
	C405.366699,50.389908 408.034790,52.238373 410.188324,53.906109
	C410.416473,62.955177 410.644623,72.004242 411.109253,81.796272
	C413.058319,81.989647 415.014679,82.128128 416.954926,82.387527
	C421.341278,82.973953 423.307587,81.573128 422.958710,76.697754
	C422.521667,70.590363 422.845367,64.428024 422.854156,58.289421
	C422.859558,54.523697 422.851593,50.255344 427.992065,50.380817
	C432.810944,50.498447 432.008270,54.695576 432.042999,57.954483
	C432.051849,58.783928 432.016510,59.614548 432.047180,60.442940
	C432.301697,67.319031 432.566986,74.194725 433.162628,81.772408
M530.023132,30.677761
	C530.023010,46.173882 530.110840,61.670853 529.960754,77.165520
	C529.923462,81.013954 531.137634,82.841141 535.125000,82.394814
	C536.276978,82.265862 537.464294,82.282486 538.620300,82.392014
	C541.848145,82.697800 543.179504,81.302895 543.062622,78.062561
	C542.916931,74.022346 543.027588,69.972878 543.027588,65.927406
	C547.043640,69.673012 549.857056,73.700150 552.635742,77.751060
	C556.102539,82.805023 562.819702,84.175079 568.912292,80.751381
	C567.241272,78.300072 565.573059,75.874588 563.927429,73.433868
	C561.145386,69.307739 556.162964,65.147644 556.207947,61.046883
	C556.255920,56.682049 561.078186,52.375069 563.798645,48.032005
	C565.297363,45.639366 566.760498,43.224464 568.798218,39.911472
	C565.541809,39.911472 563.698425,40.147118 561.936890,39.867302
	C556.644592,39.026627 553.181030,40.906708 550.786072,45.821960
	C548.959595,49.570637 546.249939,52.889004 543.933228,56.398815
	C542.992981,46.532921 543.077148,37.056484 542.910950,27.584442
	C542.882935,25.988384 542.224121,23.578445 541.089355,22.965599
	C535.333130,19.857029 530.045715,23.244898 530.023132,30.677761
M359.791992,83.279015
	C360.949951,83.243774 362.115387,83.280739 363.264679,83.161896
	C372.584534,82.198181 379.040436,77.261024 382.321625,68.593407
	C385.638824,59.830662 383.699982,51.800213 377.236847,45.179562
	C370.737122,38.521435 362.724365,36.882973 353.915344,39.799377
	C344.156830,43.030109 338.171173,52.465385 338.950836,63.061420
	C339.724854,73.580818 347.290497,81.187767 359.791992,83.279015
M221.229141,55.970936
	C223.727310,55.986660 226.226120,55.972389 228.723495,56.025497
	C232.048126,56.096191 232.754211,54.781239 231.536255,51.683300
	C227.731094,42.004494 215.694534,36.400841 204.959793,39.487736
	C196.200729,42.006500 190.004837,49.278606 189.142975,58.051880
	C188.146744,68.192963 192.389633,76.649025 200.819870,80.953957
	C213.988785,87.678726 230.850861,79.437744 231.968277,66.917503
	C226.373505,67.662018 220.757843,65.482964 215.425446,69.738434
	C211.894318,72.556427 206.269165,70.611015 203.512512,66.877144
	C200.825455,63.237545 201.298584,57.183163 204.514496,54.055027
	C207.938004,50.725002 212.964890,50.291653 216.868561,53.037895
	C218.090515,53.897552 219.230606,54.873589 221.229141,55.970936
M141.828415,86.731789
	C143.312744,86.627029 144.822433,86.660698 146.277176,86.394371
	C153.960403,84.987755 158.755722,80.353127 160.441162,72.820732
	C162.101379,65.401184 159.453796,59.300358 153.364059,54.975357
	C147.205322,50.601345 140.604095,50.722614 134.129074,54.442024
	C128.165848,57.867439 124.922005,64.775986 126.129868,71.921371
	C127.544334,80.288925 132.935532,84.894432 141.828415,86.731789
M54.954395,164.946762
	C65.689194,168.378571 75.125443,164.089798 78.362946,154.307587
	C81.393883,145.149521 76.534546,135.468307 67.285393,132.237885
	C59.055191,129.363358 49.786400,133.324371 45.942837,141.358643
	C41.826317,149.963486 45.047688,159.010376 54.954395,164.946762
M88.381996,14.898640
	C82.683929,21.835508 81.806160,28.567873 85.689148,35.552357
	C89.051544,41.600430 96.375877,45.418526 102.765450,44.454060
	C110.361862,43.307426 116.483582,37.917740 117.853462,31.170269
	C119.443344,23.339108 116.504417,16.122705 110.106842,12.148847
	C103.635231,8.129000 95.585640,8.976094 88.381996,14.898640
M22.967829,124.514107
	C30.867353,123.300606 35.907948,118.786972 37.959942,111.125031
	C39.780582,104.326958 37.481373,98.596199 32.419666,94.072784
	C26.907225,89.146591 20.427265,88.609505 13.771756,91.335464
	C6.259014,94.412552 2.589984,102.407066 4.289903,111.243599
	C5.857969,119.394745 12.240614,124.190781 22.967829,124.514107
M345.749786,124.470772
	C345.753937,132.469193 345.641785,140.470932 345.870483,148.462936
	C345.911163,149.885284 347.091736,152.181641 348.214203,152.519745
	C355.675629,154.767212 358.392792,152.576660 358.392273,144.825424
	C358.391754,137.413406 358.392151,130.001373 358.392151,122.738708
	C365.887817,121.661926 366.656036,119.935181 364.571869,110.336037
	C362.707916,110.088272 360.784912,109.832664 358.392334,109.514641
	C358.392334,106.369713 358.263977,103.399727 358.428558,100.446053
	C358.591919,97.514259 357.636749,96.007988 354.479309,96.291084
	C352.826294,96.439301 351.138855,96.432732 349.484894,96.289139
	C346.657196,96.043617 345.568481,97.212814 345.719452,100.037323
	C345.886108,103.155113 345.757477,106.288696 345.757477,109.866829
	C339.428833,108.834679 338.458038,111.917137 338.738922,116.976830
	C338.941895,120.632370 339.461670,122.764877 343.658112,122.299911
	C344.270599,122.232056 344.982788,123.063705 345.749786,124.470772
M113.013519,74.080971
	C115.476845,66.846695 114.088554,61.321095 108.761971,57.159096
	C104.167587,53.569225 97.946480,53.264454 92.951988,56.384544
	C88.329529,59.272224 85.485573,65.442131 86.459724,70.469383
	C87.562370,76.159737 92.035576,80.926353 97.586555,81.878654
	C104.173164,83.008629 109.271935,80.604561 113.013519,74.080971
M63.218346,93.775856
	C56.661385,93.145882 51.679489,95.771255 48.955311,101.660248
	C46.738171,106.453140 47.042236,111.457115 50.390770,115.844482
	C54.334579,121.011780 60.552048,122.812958 66.442253,120.676788
	C71.958267,118.676338 75.875740,112.870346 75.623512,107.069458
	C75.339394,100.535370 71.173035,95.766258 63.218346,93.775856
M80.984413,198.330231
	C80.363396,200.216888 79.742386,202.103546 78.754623,205.104385
	C76.427513,197.564590 74.526222,191.404434 72.627502,185.252625
	C70.140808,185.252625 67.895287,185.252625 65.603729,185.252625
	C65.603729,193.954636 65.603729,202.371567 65.603729,210.843185
	C67.172104,210.843185 68.441803,210.843185 69.938705,210.843185
	C69.938705,204.860428 69.938705,199.051941 69.938705,193.243454
	C70.176727,193.192459 70.414742,193.141449 70.652763,193.090454
	C72.501358,199.002686 74.349953,204.914932 76.221268,210.899841
	C77.834419,210.899841 79.302139,210.899841 80.887321,210.899841
	C82.718132,205.696152 84.523643,200.564392 86.329155,195.432617
	C86.744392,195.540665 87.159622,195.648712 87.574860,195.756760
	C87.574860,200.702438 87.574860,205.648117 87.574860,210.809052
	C89.408867,210.809052 90.844025,210.809052 92.463158,210.809052
	C92.463158,202.226318 92.463158,193.791641 92.463158,185.164124
	C89.958984,185.164124 87.679802,185.164124 85.390091,185.164124
	C83.959183,189.404266 82.581245,193.487442 80.984413,198.330231
M350.406647,186.831299
	C345.192474,186.000931 339.978302,185.170563 334.543640,184.305084
	C334.543640,193.987762 334.543640,202.261032 334.543640,211.017609
	C337.690369,211.017609 340.645233,211.101761 343.593353,210.996567
	C347.378937,210.861465 351.555664,210.216522 352.426636,206.069901
	C353.061951,203.045029 351.649567,199.590042 350.977997,195.203094
	C352.988464,193.050308 353.155334,191.808289 350.406647,186.831299
M59.214600,57.535183
	C53.251862,59.857010 50.494343,63.799915 51.140518,69.080109
	C51.711117,73.742790 55.240543,77.372169 59.864479,78.051163
	C66.160309,78.975662 71.642471,74.704544 72.060867,68.549034
	C72.516251,61.849384 67.748367,57.439049 59.214600,57.535183
M94.119690,99.633850
	C90.734711,103.680061 90.250160,107.998283 93.159920,112.459587
	C95.701431,116.356270 99.484840,117.755165 103.956795,116.902756
	C108.503456,116.036118 111.250046,113.065536 112.130669,108.582832
	C113.023033,104.040367 111.289688,100.399826 107.461685,97.927338
	C102.964005,95.022316 98.648766,95.745392 94.119690,99.633850
M284.333801,184.967621
	C282.080994,184.967621 279.828186,184.967621 277.611267,184.967621
	C277.611267,194.020096 277.611267,202.400970 277.611267,210.831253
	C279.366791,210.831253 280.812897,210.831253 282.685364,210.831253
	C282.685364,207.546173 282.685364,204.452835 282.685364,201.175186
	C287.627502,200.846512 287.997101,205.016159 289.452240,207.471756
	C291.356384,210.685028 293.460602,211.801407 297.295929,210.536041
	C294.903381,206.878662 292.659149,203.448044 290.414948,200.017441
	C290.941956,200.072647 291.468964,200.127838 291.995972,200.183044
	C292.875397,196.990402 294.733185,193.695099 294.411377,190.628525
	C293.892212,185.681305 289.248749,185.370224 284.333801,184.967621
M519.633423,199.530121
	C522.820007,197.450043 524.658386,194.763214 523.699158,190.746033
	C522.640625,186.312851 519.025208,185.451508 515.359253,185.036652
	C512.471863,184.709869 509.517914,184.970993 506.610168,184.970993
	C506.610168,194.004608 506.610168,202.393112 506.610168,210.829224
	C508.365662,210.829224 509.814148,210.829224 511.690979,210.829224
	C511.690979,207.544418 511.690979,204.444672 511.690979,201.142593
	C516.608643,200.888977 517.013977,205.021820 518.468445,207.493286
	C520.368896,210.722809 522.484985,211.785431 526.222778,210.546509
	C523.952209,206.979309 521.829102,203.643723 519.633423,199.530121
M188.307663,187.829788
	C188.307663,195.438721 188.307663,203.047668 188.307663,211.036148
	C190.306549,210.947571 191.857880,210.878830 193.840576,210.790970
	C193.840576,207.341476 193.840576,204.266907 193.840576,200.776962
	C200.875870,201.434891 199.086945,213.619827 208.255341,210.586136
	C205.921295,206.940125 203.635040,203.368729 201.352707,199.803497
	C204.824844,197.334641 206.817749,194.619980 205.568924,190.372467
	C204.269836,185.954041 200.544052,184.989151 196.997345,185.164536
	C194.162903,185.304718 190.407196,182.656662 188.307663,187.829788
M151.967712,202.760452
	C152.040833,200.111191 152.890045,197.157608 151.999359,194.886292
	C150.762375,191.731888 148.834457,188.054581 146.111694,186.437988
	C139.991028,182.803909 132.169540,185.525696 129.493759,191.243881
	C126.384048,197.889389 128.681931,207.231384 134.242645,209.717575
	C141.723007,213.062042 149.952515,209.867294 151.967712,202.760452
M45.023224,185.102524
	C36.651249,187.716812 33.536041,193.513550 35.723846,202.406662
	C37.019730,207.674240 40.742622,210.657791 46.459190,211.009995
	C52.121574,211.358887 56.912281,208.910751 58.372879,204.002747
	C60.988667,195.212982 59.403324,184.603348 45.023224,185.102524
M13.696131,193.458176
	C13.696131,190.704620 13.696131,187.951080 13.696131,185.196823
	C11.594306,185.196823 10.153491,185.196823 8.534445,185.196823
	C8.534445,193.827118 8.534445,202.237579 8.534445,211.026001
	C10.315080,210.941376 11.863383,210.867798 13.856615,210.773071
	C13.856615,207.006577 13.856615,203.616898 13.856615,200.260681
	C17.411457,200.260681 20.495981,200.260681 23.974567,200.260681
	C23.974567,203.886703 23.974567,207.299026 23.974567,210.692963
	C25.917154,210.692963 27.448523,210.692963 28.854294,210.692963
	C28.854294,201.967148 28.854294,193.574509 28.854294,184.914688
	C27.013517,185.030060 25.481098,185.126099 23.743200,185.235016
	C23.743200,188.707199 23.743200,191.651184 23.743200,195.175064
	C20.255436,194.907059 17.034100,194.659531 13.696131,193.458176
M411.398712,195.840164
	C409.711853,200.758240 408.024963,205.676315 406.270203,210.792267
	C408.559784,210.792267 410.180695,210.792267 411.677185,210.792267
	C412.434082,208.732498 413.105438,206.905502 413.745758,205.163040
	C417.014069,205.163040 419.982452,205.163040 423.029663,205.163040
	C423.835510,207.197388 424.600800,209.129318 425.276367,210.834869
	C427.199890,210.834869 428.671631,210.834869 430.643402,210.834869
	C427.555908,202.003387 424.577942,193.485275 421.658905,185.135651
	C419.178711,185.135651 417.201843,185.135651 415.137970,185.135651
	C413.980774,188.534897 412.858673,191.831177 411.398712,195.840164
M478.712708,206.490799
	C478.289490,207.869522 477.866272,209.248230 477.378326,210.837799
	C479.390625,210.837799 481.020447,210.837799 482.668945,210.837799
	C483.373962,208.863968 484.026550,207.036880 484.655579,205.275726
	C487.986847,205.275726 491.077454,205.275726 494.288696,205.275726
	C495.305817,208.903961 496.017822,212.900253 501.494415,210.376984
	C498.532318,201.907806 495.593689,193.505737 492.653198,185.098328
	C490.384827,185.098328 488.409271,185.098328 486.200073,185.098328
	C483.774170,191.970886 481.354706,198.825241 478.712708,206.490799
M266.491577,190.022522
	C268.266846,190.022522 270.042114,190.022522 271.774384,190.022522
	C271.774384,188.080765 271.774384,186.675064 271.774384,185.207184
	C266.939606,185.207184 262.355438,185.207184 257.575256,185.207184
	C257.575256,193.838272 257.575256,202.238968 257.575256,210.830856
	C262.417511,210.830856 267.008057,210.830856 271.688293,210.830856
	C271.688293,209.150269 271.688293,207.639359 271.688293,205.842300
	C268.574036,205.842300 265.791901,205.842300 262.914429,205.842300
	C262.914429,203.819290 262.914429,202.090576 262.914429,199.963959
	C265.738281,199.963959 268.333832,199.963959 271.008850,199.963959
	C271.008850,198.151703 271.008850,196.747345 271.008850,194.952362
	C268.207245,194.952362 265.610016,194.952362 262.759766,194.952362
	C262.982574,192.558472 261.276337,189.633514 266.491577,190.022522
M212.324158,205.324142
	C212.324158,207.107605 212.324158,208.891068 212.324158,210.833649
	C217.443573,210.833649 222.036789,210.833649 226.672928,210.833649
	C226.672928,209.124588 226.672928,207.613556 226.672928,205.820618
	C223.541824,205.820618 220.758575,205.820618 217.927292,205.820618
	C217.927292,203.799545 217.927292,202.070389 217.927292,199.944382
	C220.766937,199.944382 223.362122,199.944382 225.994995,199.944382
	C225.994995,198.134583 225.994995,196.729019 225.994995,194.933640
	C223.178619,194.933640 220.580719,194.933640 217.918030,194.933640
	C217.918030,193.136826 217.918030,191.745300 217.918030,189.899414
	C221.055359,189.899414 223.969406,189.899414 227.077225,189.899414
	C226.993103,188.023209 226.929977,186.615295 226.868195,185.237244
	C221.882248,185.237244 217.301697,185.237244 212.324158,185.237244
	C212.324158,191.780716 212.324158,198.072311 212.324158,205.324142
M384.689331,204.439194
	C384.770782,203.029678 384.852264,201.620178 384.955322,199.837097
	C387.929138,199.837097 390.521027,199.837097 393.297333,199.837097
	C393.184875,198.008713 393.098114,196.598267 392.989258,194.828644
	C390.020203,194.828644 387.418091,194.828644 384.609070,194.828644
	C384.723938,193.025711 384.813171,191.625427 384.920013,189.948181
	C388.088562,189.948181 390.863495,189.948181 393.668945,189.948181
	C393.668945,188.122513 393.668945,186.614517 393.668945,185.313934
	C388.740967,185.313934 384.168976,185.313934 379.665771,185.313934
	C379.665771,194.044388 379.665771,202.434372 379.665771,210.763977
	C384.612610,210.763977 389.213257,210.763977 393.779114,210.763977
	C393.779114,209.093460 393.779114,207.685181 393.779114,206.306641
	C390.624603,205.988525 387.712311,205.694824 384.689331,204.439194
M541.391357,205.977539
	C539.596130,205.977539 537.800964,205.977539 535.916138,205.977539
	C535.916138,203.811737 535.916138,202.084061 535.916138,199.960358
	C538.743469,199.960358 541.339417,199.960358 544.007935,199.960358
	C544.007935,198.152435 544.007935,196.747086 544.007935,194.949158
	C541.203308,194.949158 538.605530,194.949158 535.909058,194.949158
	C535.909058,193.157150 535.909058,191.762543 535.909058,189.913544
	C539.040588,189.913544 541.952148,189.913544 544.753174,189.913544
	C544.753174,188.046463 544.753174,186.640991 544.753174,185.229218
	C539.898132,185.229218 535.316528,185.229218 530.593140,185.229218
	C530.593140,193.884933 530.593140,202.286728 530.593140,210.826111
	C535.459534,210.826111 540.054382,210.826111 544.994507,210.826111
	C544.561279,208.737915 546.723877,205.727310 541.391357,205.977539
M104.690102,201.556808
	C107.440460,200.786713 110.190819,200.016617 112.963745,199.240204
	C112.963745,198.087204 112.963745,196.680939 112.963745,194.890808
	C110.112587,194.890808 107.513931,194.890808 104.951225,194.890808
	C104.951225,193.097931 104.951225,191.699677 104.951225,189.853546
	C108.128487,189.853546 111.038940,189.853546 114.124016,189.853546
	C113.984962,187.968414 113.881012,186.559174 113.785934,185.270142
	C108.822403,185.270142 104.245964,185.270142 99.622009,185.270142
	C99.622009,193.967407 99.622009,202.369370 99.622009,210.796417
	C104.526077,210.796417 109.128593,210.796417 114.054512,210.796417
	C113.957008,209.028931 113.873329,207.511993 113.788666,205.977264
	C111.401527,205.977264 109.541809,205.769806 107.747383,206.023758
	C104.726067,206.451340 104.445213,204.781052 104.690102,201.556808
M434.328979,208.999512
	C435.777679,209.831284 437.226379,210.663055 439.639648,212.048615
	C439.639648,207.714050 439.639648,204.980408 439.639648,202.266998
	C441.718079,202.057800 443.394379,202.079269 444.971710,201.694733
	C449.747314,200.530533 452.190979,197.327011 451.961456,192.807068
	C451.732025,188.288315 448.926971,185.455688 443.822937,185.031006
	C440.757111,184.775909 437.652740,184.984131 434.324188,184.984131
	C434.324188,193.142746 434.324188,200.615692 434.328979,208.999512
M474.278656,196.559402
	C477.113220,187.988419 471.003448,182.830353 457.630310,185.680725
	C457.630310,194.054520 457.630310,202.415466 457.630310,211.037460
	C459.367065,210.944397 460.780121,210.868698 462.598999,210.771240
	C462.598999,207.755814 462.598999,205.025879 462.598999,202.295929
	C462.994324,202.708389 463.389648,203.120865 463.784973,203.533325
	C467.218597,201.463638 470.652222,199.393967 474.278656,196.559402
M238.222946,194.169724
	C237.294342,191.184525 236.365738,188.199326 235.449997,185.255478
	C233.577087,185.255478 232.004105,185.255478 230.247162,185.255478
	C232.630173,192.493744 235.128342,199.370621 237.118546,206.391510
	C238.328125,210.658508 240.419418,212.194031 244.725021,210.497330
	C247.504074,202.183136 250.309418,193.790283 253.209900,185.112793
	C251.168304,185.112793 249.701248,185.112793 248.008698,185.112793
	C245.925674,191.627487 243.850922,198.116333 241.569214,205.252426
	C240.387375,201.286362 239.439972,198.106979 238.222946,194.169724
M308.104034,200.400177
	C309.026337,201.767654 309.948669,203.135132 310.871002,204.502594
	C309.384003,204.997070 307.888306,205.914154 306.412079,205.883820
	C304.361664,205.841721 302.325867,205.088882 300.168701,204.615021
	C299.585541,207.339478 299.132538,209.433060 302.794312,210.382874
	C308.431763,211.845123 314.167603,210.261963 315.768799,206.181747
	C317.502563,201.763702 315.754822,199.018005 309.194763,195.860870
	C309.046204,195.789368 308.820038,195.804626 308.730408,195.696365
	C307.592926,194.322495 306.473816,192.933380 305.350037,191.548126
	C307.155243,191.074997 308.939789,190.376968 310.772980,190.208923
	C311.968231,190.099350 313.234100,190.759811 314.674042,191.127930
	C315.139984,189.519547 315.514954,188.225143 316.031921,186.440628
	C312.938660,185.896408 310.342957,184.996231 307.786102,185.095718
	C304.119354,185.238373 301.021240,186.883179 300.145477,190.927002
	C299.293304,194.861938 301.482117,197.202484 304.676819,198.885818
	C305.556702,199.349426 306.496338,199.699646 308.104034,200.400177
M161.387299,211.015930
	C162.071198,210.178131 163.239716,209.396698 163.344986,208.491592
	C163.622681,206.103867 163.438965,203.662476 163.438965,200.909973
	C166.649796,200.909973 169.256424,200.909973 171.907959,200.909973
	C171.907959,199.137283 171.907959,197.731323 171.907959,195.799423
	C168.990738,195.799423 166.269058,195.799423 163.626465,195.799423
	C163.626465,193.647507 163.626465,192.026657 163.626465,190.029419
	C166.739777,190.029419 169.677765,190.029419 172.670013,190.029419
	C172.670013,188.134766 172.670013,186.627411 172.670013,185.321442
	C167.745605,185.321442 163.171753,185.321442 158.334991,185.321442
	C158.334991,193.298523 158.268951,200.940887 158.430038,208.578461
	C158.447479,209.405182 159.779861,210.204178 161.387299,211.015930
M58.489349,20.908220
	C52.304482,21.947075 48.980228,26.104256 50.551750,31.057482
	C51.868217,35.206818 54.851646,37.328480 59.224129,37.073513
	C63.123722,36.846123 66.481819,33.408001 66.523727,29.509897
	C66.575470,24.696798 64.220779,21.677174 58.489349,20.908220
M15.343678,60.092220
	C13.118114,63.898613 13.144162,67.985237 16.734024,70.352867
	C19.084484,71.903069 23.031136,72.366608 25.803551,71.617325
	C29.552984,70.603989 30.662960,66.861061 30.033922,63.027161
	C28.941034,56.366142 21.801752,54.608200 15.343678,60.092220
M144.258545,118.058235
	C147.755478,115.913094 149.682220,112.627449 148.122177,108.882805
	C147.129761,106.500725 144.599533,104.114929 142.187134,103.127083
	C138.955002,101.803566 135.097000,102.933319 133.778519,106.390930
	C132.791336,108.979721 132.667023,112.651970 133.776138,115.112701
	C135.534119,119.013008 139.448730,119.801231 144.258545,118.058235
M97.393158,150.002502
	C100.896187,154.411041 104.948586,155.472015 108.933075,153.023804
	C112.551788,150.800339 113.782036,146.509476 111.914604,142.624847
	C110.099586,138.849258 105.770149,137.020676 101.889824,138.390762
	C97.579292,139.912750 95.733955,144.070251 97.393158,150.002502
M362.698761,211.024887
	C366.462311,211.024887 370.225830,211.024887 374.171509,211.024887
	C374.038818,208.994705 373.946564,207.583206 373.833221,205.849274
	C370.205780,205.849274 366.934601,205.849274 363.309326,205.849274
	C363.309326,198.750916 363.309326,191.998322 363.309326,185.226273
	C361.520355,185.226273 360.095032,185.226273 358.322510,185.226273
	C358.322510,193.092346 358.424774,200.715652 358.269745,208.333740
	C358.211639,211.188675 359.827789,211.129608 362.698761,211.024887
M555.455566,197.511261
	C555.455566,193.419128 555.455566,189.326981 555.455566,184.964447
	C553.479187,185.060394 552.060303,185.129272 550.591919,185.200562
	C550.591919,193.903870 550.591919,202.299698 550.591919,210.851685
	C555.786316,210.851685 560.708740,210.851685 565.748901,210.851685
	C565.748901,209.167206 565.748901,207.662399 565.748901,205.813995
	C562.158875,205.813995 558.891052,205.813995 555.455444,205.813995
	C555.455444,203.144363 555.455444,200.823303 555.455566,197.511261
M327.685028,186.019745
	C326.014282,185.591949 324.343567,185.164154 322.566193,184.709061
	C322.566193,194.056870 322.566193,202.435150 322.566193,211.146988
	C324.460449,210.995148 326.005219,210.871323 327.742645,210.732056
	C327.742645,202.510757 327.742645,194.726120 327.685028,186.019745
z"/>
            <path fill="#2B2728" opacity="1.000000" stroke="none"
                  d="
M410.165405,52.964195
	C408.034790,52.238373 405.366699,50.389908 403.916046,51.084400
	C402.278046,51.868572 400.965424,54.898781 400.854645,57.022285
	C400.473633,64.325691 400.679443,71.659706 400.301208,79.519592
	C399.820862,80.149727 399.589417,80.311668 399.597473,80.324646
	C399.750427,80.570618 399.931702,80.798996 400.107086,81.031036
	C396.521729,81.364716 392.939117,81.794495 389.347198,81.895981
	C388.951294,81.907158 388.139496,80.040932 388.132996,79.041443
	C388.049591,66.263054 388.077972,53.483932 388.077972,39.694309
	C392.900818,40.044563 397.262756,40.361343 403.512970,40.815258
	C409.100098,37.154575 413.291687,37.311043 420.329865,42.829121
	C430.316772,36.046406 440.110718,37.822338 443.255402,46.325699
	C443.655426,48.731987 444.138855,50.376545 444.622253,52.021103
	C444.748077,61.042412 444.873932,70.063721 444.470917,79.610962
	C440.237732,80.448112 436.533356,80.759323 432.829041,81.070541
	C432.566986,74.194725 432.301697,67.319031 432.047180,60.442940
	C432.016510,59.614548 432.051849,58.783928 432.042999,57.954483
	C432.008270,54.695576 432.810944,50.498447 427.992065,50.380817
	C422.851593,50.255344 422.859558,54.523697 422.854156,58.289421
	C422.845367,64.428024 422.521667,70.590363 422.958710,76.697754
	C423.307587,81.573128 421.341278,82.973953 416.954926,82.387527
	C415.014679,82.128128 413.058319,81.989647 411.321320,81.153275
	C411.679657,71.993622 411.866791,63.477089 411.892639,54.960056
	C411.894653,54.296524 410.767670,53.629559 410.165405,52.964195
z"/>
            <path fill="#282425" opacity="1.000000" stroke="none"
                  d="
M566.075195,95.013947
	C566.209839,108.792747 566.351379,122.571495 566.474426,136.350403
	C566.505615,139.841675 566.745178,143.362167 566.374756,146.814026
	C566.160828,148.807281 564.887939,152.355179 564.144348,152.341461
	C560.456116,152.273575 555.826965,154.834259 552.998169,149.561050
	C548.318054,153.030655 542.733948,155.063446 537.014587,152.915207
	C532.855286,151.352936 528.546631,148.823273 525.648315,145.539032
	C518.494629,137.432739 519.371460,123.324120 526.738770,115.315613
	C533.616272,107.839516 543.491455,106.895874 553.737793,113.337982
	C553.737793,108.322403 554.053772,103.766411 553.653320,99.274284
	C553.207825,94.276703 554.830811,92.048454 559.991577,92.860954
	C561.775208,93.141777 563.599548,93.164467 565.473206,93.800041
	C565.719177,94.534660 565.897156,94.774300 566.075195,95.013947
M552.009888,137.331070
	C555.100952,129.804138 553.174500,123.569580 547.114502,121.488457
	C542.385071,119.864296 537.202942,121.672447 534.963623,125.728180
	C532.428284,130.320023 533.403564,136.366409 537.164978,139.376266
	C541.479370,142.828583 546.645508,142.305130 552.009888,137.331070
M560.411499,150.480728
	C560.411499,150.480728 560.522522,150.415482 560.411499,150.480728
z"/>
            <path fill="#282425" opacity="1.000000" stroke="none"
                  d="
M317.102234,151.049805
	C312.987885,154.141449 306.524048,153.330963 304.395935,149.456619
	C295.286194,155.659378 285.233948,154.856628 278.283997,147.371368
	C270.274994,138.745468 269.943359,125.003708 277.524841,115.913971
	C284.231201,107.873451 294.090698,106.743324 304.973236,113.262955
	C304.973236,108.004776 305.209167,103.116768 304.900482,98.263412
	C304.642059,94.200432 305.876343,92.297478 310.148834,92.856697
	C312.271362,93.134521 314.430603,93.131836 316.466980,93.936356
	C316.244904,112.724663 316.116699,130.832611 316.059784,148.940781
	C316.057587,149.642685 316.739258,150.346756 317.102234,151.049805
M288.622772,122.962074
	C284.637665,127.450958 283.709808,132.230118 286.168427,136.580612
	C288.373749,140.482849 291.934021,142.031403 296.268311,141.499924
	C300.430328,140.989563 303.331177,138.666183 304.497101,134.541061
	C305.670685,130.388702 305.052612,126.510178 301.753021,123.547783
	C297.945007,120.128860 293.662292,120.114021 288.622772,122.962074
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M530.023132,30.206066
	C530.045715,23.244898 535.333130,19.857029 541.089355,22.965599
	C542.224121,23.578445 542.882935,25.988384 542.910950,27.584442
	C543.077148,37.056484 542.992981,46.532921 543.933228,56.398815
	C546.249939,52.889004 548.959595,49.570637 550.786072,45.821960
	C553.181030,40.906708 556.644592,39.026627 561.936890,39.867302
	C563.698425,40.147118 565.541809,39.911472 568.798218,39.911472
	C566.760498,43.224464 565.297363,45.639366 563.798645,48.032005
	C561.078186,52.375069 556.255920,56.682049 556.207947,61.046883
	C556.162964,65.147644 561.145386,69.307739 563.927429,73.433868
	C565.573059,75.874588 567.241272,78.300072 568.912292,80.751381
	C562.819702,84.175079 556.102539,82.805023 552.635742,77.751060
	C549.857056,73.700150 547.043640,69.673012 543.027588,65.927406
	C543.027588,69.972878 542.916931,74.022346 543.062622,78.062561
	C543.179504,81.302895 541.848145,82.697800 538.620300,82.392014
	C537.464294,82.282486 536.276978,82.265862 535.125000,82.394814
	C531.137634,82.841141 529.923462,81.013954 529.960754,77.165520
	C530.110840,61.670853 530.023010,46.173882 530.023132,30.206066
z"/>
            <path fill="#292627" opacity="1.000000" stroke="none"
                  d="
M434.972198,122.808525
	C438.926880,117.054184 442.996948,111.669922 450.388458,109.703316
	C465.524231,105.676231 479.286346,116.793701 478.343079,132.468719
	C478.157501,135.552933 476.842468,136.442215 473.970245,136.391449
	C466.980988,136.267883 459.988007,136.335251 452.996674,136.359970
	C451.423645,136.365540 449.851105,136.511032 448.083649,136.602158
	C450.953400,143.058975 456.299438,144.484528 462.610168,142.025406
	C466.664734,140.445450 471.280060,140.304520 476.033905,139.448364
	C474.679993,150.086258 463.634033,155.502640 451.278625,152.950348
	C438.273376,150.263794 431.642700,137.912674 435.209259,123.089844
	C434.969543,122.715645 434.972198,122.808525 434.972198,122.808525
M453.419769,120.551346
	C452.661163,120.888702 451.645325,121.025291 451.194489,121.602875
	C450.062805,123.052605 449.186646,124.701790 448.208008,126.270966
	C449.791534,126.749969 451.347717,127.452438 452.965637,127.650703
	C454.932037,127.891685 456.967804,127.871742 458.941833,127.663651
	C461.134979,127.432457 463.292419,126.862076 465.639160,126.405571
	C463.294006,119.852409 458.899017,119.720894 453.419769,120.551346
z"/>
            <path fill="#292526" opacity="1.000000" stroke="none"
                  d="
M359.392517,83.246017
	C347.290497,81.187767 339.724854,73.580818 338.950836,63.061420
	C338.171173,52.465385 344.156830,43.030109 353.915344,39.799377
	C362.724365,36.882973 370.737122,38.521435 377.236847,45.179562
	C383.699982,51.800213 385.638824,59.830662 382.321625,68.593407
	C379.040436,77.261024 372.584534,82.198181 363.264679,83.161896
	C362.115387,83.280739 360.949951,83.243774 359.392517,83.246017
M352.546631,56.584389
	C348.759918,65.792671 357.113037,72.380592 363.155518,70.784637
	C367.595245,69.612000 370.408600,66.904472 370.850555,62.163868
	C371.300232,57.341019 369.375427,53.741047 364.961975,51.703129
	C360.811462,49.786636 356.691925,51.294754 352.546631,56.584389
z"/>
            <path fill="#272324" opacity="1.000000" stroke="none"
                  d="
M389.006134,109.325859
	C398.508728,108.210922 403.148132,111.877014 405.015686,122.690247
	C404.871887,123.470711 405.002808,123.754776 405.133759,124.038841
	C405.225922,132.375122 405.318085,140.711395 405.038086,149.602173
	C404.457611,150.432312 404.249359,150.707947 403.566101,150.989273
	C399.818817,151.089905 396.546509,151.184845 393.274231,151.279785
	C393.154236,143.519135 393.267517,135.743515 392.771332,128.007004
	C392.623505,125.701881 391.352417,122.646072 389.574066,121.435623
	C385.592743,118.725739 381.239380,121.776894 381.044800,127.217255
	C380.825806,133.338959 380.989441,139.474319 380.984283,145.603729
	C380.978668,152.242828 380.975861,152.321243 374.122162,152.181061
	C372.251373,152.142776 370.393372,151.478592 368.827087,150.430176
	C369.415985,147.847015 369.952454,145.936371 369.960327,144.023544
	C370.029724,127.113060 370.005249,110.202194 370.008545,93.291443
	C380.988373,91.841400 380.993408,91.841408 380.983826,102.323685
	C380.981110,105.285919 380.939209,108.248123 380.627441,111.836861
	C380.440735,112.863075 380.541809,113.262772 380.642883,113.662468
	C381.095917,113.378807 381.548920,113.095161 382.001923,112.811516
	C383.418304,111.868004 384.834686,110.924492 386.768066,110.204285
	C387.858765,110.060341 388.432434,109.693100 389.006134,109.325859
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M491.968964,125.226410
	C490.643066,125.168327 489.317444,125.068039 487.991211,125.059372
	C481.853851,125.019226 481.058868,123.672745 483.827911,117.952507
	C486.976562,111.448105 494.843536,107.912514 503.392334,109.159828
	C511.378052,110.324989 516.029663,115.009315 516.883057,123.830246
	C516.314453,130.971848 516.041443,137.438187 516.048279,143.904236
	C516.050781,146.281067 516.714844,148.657196 517.077087,151.033646
	C513.648193,153.656830 507.959595,153.385406 504.348572,150.379517
	C498.109924,154.345230 491.608551,155.147781 485.283173,150.829269
	C480.468903,147.542435 479.639618,142.459717 480.755310,137.091080
	C481.944031,131.371338 485.850342,128.434784 492.163147,127.410843
	C496.960602,127.993538 501.049683,128.687912 506.739777,129.654160
	C504.932343,126.287239 504.135101,122.793243 501.953949,121.229118
	C498.984680,119.099854 496.124908,121.277931 494.122772,124.135971
	C493.715607,124.717178 492.702667,124.873978 491.968964,125.226410
M504.308228,142.652817
	C503.949127,140.795212 503.910583,137.501526 503.173523,137.336975
	C500.469055,136.733185 497.477112,136.882156 494.721832,137.413589
	C494.024109,137.548157 493.120087,141.214172 493.474518,141.441269
	C495.480377,142.726486 497.780243,143.707794 500.106323,144.268906
	C501.170441,144.525604 502.523499,143.584610 504.308228,142.652817
M511.948975,150.831284
	C511.798889,150.580536 511.696899,150.198105 511.483612,150.120193
	C511.309204,150.056442 511.002075,150.355835 510.753784,150.494217
	C511.002350,150.632965 511.250916,150.771713 511.948975,150.831284
M507.518463,150.404953
	C507.518463,150.404953 507.590271,150.520844 507.518463,150.404953
z"/>
            <path fill="#272324" opacity="1.000000" stroke="none"
                  d="
M234.937668,65.985092
	C234.847382,58.506668 234.819748,51.026691 234.634552,43.550617
	C234.564941,40.739731 235.633408,39.670895 238.455826,39.873875
	C241.238159,40.073975 244.046127,39.917557 247.433670,39.917557
	C247.433670,47.333393 247.427597,54.292637 247.438110,61.251858
	C247.440628,62.914074 247.370026,64.590919 247.558289,66.235252
	C247.925766,69.445160 249.583099,71.433617 253.048065,71.504425
	C256.371033,71.572327 258.681274,70.100838 258.919739,66.737564
	C259.318634,61.111351 259.364685,55.458549 259.494476,49.815449
	C259.566528,46.683132 259.507446,43.547802 259.507446,40.158020
	C263.751129,40.158020 267.496277,40.158020 272.072601,40.158020
	C272.072601,42.734108 272.072571,45.155148 272.072601,47.576183
	C272.072784,57.561382 271.926605,67.549835 272.148346,77.530113
	C272.231995,81.294518 270.923615,82.789032 267.262238,82.343773
	C264.436707,82.000168 261.608917,81.675438 258.853516,80.660728
	C245.032684,86.831779 235.795074,82.226936 235.074005,67.316200
	C235.194031,66.528870 235.065842,66.256981 234.937668,65.985092
z"/>
            <path fill="#2B2728" opacity="1.000000" stroke="none"
                  d="
M225.612228,151.269974
	C221.673630,153.617310 216.412888,153.284851 213.063660,150.345367
	C206.569016,154.391113 199.841217,155.193069 193.279480,150.455963
	C188.633270,147.101730 188.849716,141.911499 189.501404,137.122238
	C190.317200,131.127060 194.668747,128.335831 201.087769,127.331825
	C205.757675,127.979370 209.708923,128.714584 215.389313,129.771545
	C213.496124,126.278778 212.684296,122.788681 210.496017,121.225418
	C207.451126,119.050247 204.645828,121.375015 202.672974,124.227287
	C202.337692,124.712021 201.552139,124.885315 200.974625,125.202484
	C199.653915,125.153381 198.333389,125.067467 197.012482,125.061363
	C190.317947,125.030457 189.425598,123.554985 192.682526,117.538719
	C196.505127,110.477501 203.042145,108.629623 210.362183,109.064110
	C218.010788,109.518097 223.430267,113.290352 225.245850,121.582451
	C224.635132,131.445084 224.411591,140.673950 224.287811,149.904160
	C224.281769,150.353424 225.150726,150.814438 225.612228,151.269974
M202.345718,138.142609
	C200.844543,142.262878 202.623245,144.194687 206.672592,144.363739
	C209.707336,144.490433 213.411270,144.605713 213.547928,140.524292
	C213.700882,135.955948 209.740067,136.240417 206.586548,136.331085
	C205.352127,136.366577 204.138565,137.126785 202.345718,138.142609
z"/>
            <path fill="#292627" opacity="1.000000" stroke="none"
                  d="
M220.818665,55.883644
	C219.230606,54.873589 218.090515,53.897552 216.868561,53.037895
	C212.964890,50.291653 207.938004,50.725002 204.514496,54.055027
	C201.298584,57.183163 200.825455,63.237545 203.512512,66.877144
	C206.269165,70.611015 211.894318,72.556427 215.425446,69.738434
	C220.757843,65.482964 226.373505,67.662018 231.968277,66.917503
	C230.850861,79.437744 213.988785,87.678726 200.819870,80.953957
	C192.389633,76.649025 188.146744,68.192963 189.142975,58.051880
	C190.004837,49.278606 196.200729,42.006500 204.959793,39.487736
	C215.694534,36.400841 227.731094,42.004494 231.536255,51.683300
	C232.754211,54.781239 232.048126,56.096191 228.723495,56.025497
	C226.226120,55.972389 223.727310,55.986660 220.818665,55.883644
z"/>
            <path fill="#2B2728" opacity="1.000000" stroke="none"
                  d="
M255.982925,124.004799
	C253.421524,122.987839 250.780319,120.985336 248.317398,121.184715
	C244.615280,121.484428 244.456726,125.099236 244.472168,128.225952
	C244.503387,134.551895 244.327713,140.883514 244.545700,147.202164
	C244.678864,151.062103 243.412750,152.850830 239.386475,152.309647
	C237.914978,152.111862 236.172760,152.743164 234.954178,152.160034
	C233.551315,151.488754 231.617172,149.912964 231.590546,148.693390
	C231.336151,137.045609 231.476532,125.389824 231.407181,113.736916
	C231.390732,110.976913 232.461700,109.713737 235.253571,109.955910
	C238.477158,110.235550 241.705368,110.461670 244.887268,111.368988
	C257.122314,106.052452 264.636444,108.634369 267.906036,120.837814
	C267.423309,130.698227 267.244049,139.891022 267.171875,149.084656
	C267.166565,149.757553 267.936188,150.436508 268.345551,151.112656
	C264.407532,153.822220 258.510010,153.366089 256.562714,149.510468
	C257.343048,141.019821 257.643402,133.181183 257.799194,125.339661
	C257.807800,124.906906 256.615967,124.450302 255.982925,124.004799
M261.183563,150.258881
	C261.026001,150.372467 260.868469,150.486053 260.710907,150.599640
	C260.930420,150.576859 261.149902,150.554077 261.183563,150.258881
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M287.899414,82.298302
	C279.495331,79.767166 276.207092,74.923355 278.523041,68.242142
	C282.996796,68.210327 287.636017,66.955421 291.327789,71.328568
	C292.172302,72.328972 294.784973,72.228844 296.481110,71.967659
	C297.461548,71.816681 298.632202,70.449608 298.944702,69.399864
	C299.112335,68.836899 297.791870,67.333069 296.888611,67.041504
	C294.062897,66.129379 291.110107,65.616844 288.217621,64.904366
	C280.809937,63.079689 277.322083,59.199459 277.239380,52.736252
	C277.156128,46.233177 281.007629,41.410793 287.827698,39.478844
	C298.961029,36.325058 308.913269,41.125671 310.849457,50.606831
	C310.977173,51.232296 310.866058,51.906536 310.866058,53.158409
	C305.946899,52.124737 300.782013,55.004436 296.388733,50.357780
	C295.627960,49.553112 292.363098,51.116005 290.254852,51.585320
	C291.550018,52.950039 292.605255,54.909798 294.192627,55.549812
	C297.081116,56.714428 300.364044,56.860168 303.341339,57.853668
	C309.030579,59.752117 311.804810,63.391483 311.957428,68.738083
	C312.119019,74.398643 309.904053,78.726372 304.627350,81.214081
	C303.727234,81.638451 302.789124,81.982269 301.274109,82.040756
	C296.419556,81.911575 292.159485,82.104942 287.899414,82.298302
z"/>
            <path fill="#FEBF44" opacity="1.000000" stroke="none"
                  d="
M141.426697,86.686119
	C132.935532,84.894432 127.544334,80.288925 126.129868,71.921371
	C124.922005,64.775986 128.165848,57.867439 134.129074,54.442024
	C140.604095,50.722614 147.205322,50.601345 153.364059,54.975357
	C159.453796,59.300358 162.101379,65.401184 160.441162,72.820732
	C158.755722,80.353127 153.960403,84.987755 146.277176,86.394371
	C144.822433,86.660698 143.312744,86.627029 141.426697,86.686119
z"/>
            <path fill="#3BC5EA" opacity="1.000000" stroke="none"
                  d="
M54.592583,164.790588
	C45.047688,159.010376 41.826317,149.963486 45.942837,141.358643
	C49.786400,133.324371 59.055191,129.363358 67.285393,132.237885
	C76.534546,135.468307 81.393883,145.149521 78.362946,154.307587
	C75.125443,164.089798 65.689194,168.378571 54.592583,164.790588
z"/>
            <path fill="#FEBF44" opacity="1.000000" stroke="none"
                  d="
M88.645836,14.639076
	C95.585640,8.976094 103.635231,8.129000 110.106842,12.148847
	C116.504417,16.122705 119.443344,23.339108 117.853462,31.170269
	C116.483582,37.917740 110.361862,43.307426 102.765450,44.454060
	C96.375877,45.418526 89.051544,41.600430 85.689148,35.552357
	C81.806160,28.567873 82.683929,21.835508 88.645836,14.639076
z"/>
            <path fill="#3AC5EA" opacity="1.000000" stroke="none"
                  d="
M22.572416,124.599197
	C12.240614,124.190781 5.857969,119.394745 4.289903,111.243599
	C2.589984,102.407066 6.259014,94.412552 13.771756,91.335464
	C20.427265,88.609505 26.907225,89.146591 32.419666,94.072784
	C37.481373,98.596199 39.780582,104.326958 37.959942,111.125031
	C35.907948,118.786972 30.867353,123.300606 22.572416,124.599197
z"/>
            <path fill="#2B2728" opacity="1.000000" stroke="none"
                  d="
M512.192749,53.960518
	C507.266388,48.434055 502.979980,49.007233 499.864380,55.867180
	C498.807861,57.691761 498.071442,59.166012 498.046051,60.652393
	C497.924652,67.764648 497.995850,74.880180 497.998627,81.994553
	C495.553009,82.103119 493.107361,82.211693 490.327484,81.685577
	C489.999176,69.744110 490.124603,58.435417 489.942719,47.131664
	C489.883423,43.447170 490.590424,41.449692 494.833832,41.888309
	C496.098633,42.019047 497.503876,40.791630 498.844757,40.186493
	C500.069305,40.591431 501.631744,41.697952 502.467407,41.295464
	C513.948181,35.765778 521.044556,38.897003 524.299194,51.828865
	C523.570007,53.883293 523.040894,55.436623 523.024963,56.995178
	C522.940308,65.305824 522.984009,73.617783 522.983337,81.929283
	C519.719055,81.868385 516.454773,81.807495 513.362061,81.120728
	C513.680115,72.321884 513.868958,64.149055 513.894409,55.975712
	C513.896484,55.305748 512.786194,54.632324 512.192749,53.960518
z"/>
            <path fill="#2D292A" opacity="1.000000" stroke="none"
                  d="
M345.699310,123.974960
	C344.982788,123.063705 344.270599,122.232056 343.658112,122.299911
	C339.461670,122.764877 338.941895,120.632370 338.738922,116.976830
	C338.458038,111.917137 339.428833,108.834679 345.757477,109.866829
	C345.757477,106.288696 345.886108,103.155113 345.719452,100.037323
	C345.568481,97.212814 346.657196,96.043617 349.484894,96.289139
	C351.138855,96.432732 352.826294,96.439301 354.479309,96.291084
	C357.636749,96.007988 358.591919,97.514259 358.428558,100.446053
	C358.263977,103.399727 358.392334,106.369713 358.392334,109.514641
	C360.784912,109.832664 362.707916,110.088272 364.571869,110.336037
	C366.656036,119.935181 365.887817,121.661926 358.392151,122.738708
	C358.392151,130.001373 358.391754,137.413406 358.392273,144.825424
	C358.392792,152.576660 355.675629,154.767212 348.214203,152.519745
	C347.091736,152.181641 345.911163,149.885284 345.870483,148.462936
	C345.641785,140.470932 345.753937,132.469193 345.699310,123.974960
M347.049316,127.813774
	C347.049316,134.534729 347.049316,141.255676 347.049316,147.976624
	C347.282440,147.972504 347.515594,147.968384 347.748718,147.964264
	C347.748718,139.666824 347.748718,131.369400 347.748718,123.071960
	C347.572998,123.067894 347.397247,123.063820 347.221527,123.059753
	C347.164154,124.346863 347.106781,125.633972 347.049316,127.813774
M356.978790,144.083618
	C356.978790,137.425995 356.978790,130.768356 356.978790,124.110733
	C356.750916,124.116928 356.523041,124.123116 356.295166,124.129311
	C356.295166,132.031128 356.295166,139.932953 356.295166,147.834778
	C356.522980,147.833725 356.750793,147.832657 356.978607,147.831604
	C356.978607,146.871140 356.978607,145.910690 356.978790,144.083618
z"/>
            <path fill="#2D292A" opacity="1.000000" stroke="none"
                  d="
M331.262177,81.074364
	C327.831085,81.443710 324.398560,82.009445 320.970428,81.983673
	C320.417145,81.979507 319.439178,79.350746 319.414093,77.921944
	C319.265839,69.474182 319.341034,61.022503 319.341034,52.081787
	C311.872192,53.297443 312.163391,48.673271 312.446503,43.959332
	C312.668793,40.258389 312.603149,40.254448 319.344177,39.405968
	C319.344177,36.405212 319.452393,33.296463 319.312592,30.198910
	C319.182617,27.319250 320.065918,25.736364 323.255585,26.045290
	C324.904694,26.205011 326.590881,26.185112 328.244476,26.050966
	C331.083954,25.820614 332.149261,27.098301 332.049103,29.846897
	C331.935181,32.973328 332.022736,36.107109 332.022736,39.522766
	C334.283905,39.769329 336.201935,39.978474 338.069305,40.182091
	C340.598083,49.264500 339.581909,51.564030 331.928955,52.368164
	C331.928955,61.148365 331.928955,70.042633 331.524658,79.464508
	C331.167633,80.352859 331.214905,80.713608 331.262177,81.074364
z"/>
            <path fill="#2B2728" opacity="1.000000" stroke="none"
                  d="
M434.720276,122.414337
	C434.972198,122.808525 434.969543,122.715645 435.002991,122.686386
	C432.975647,123.132935 430.861511,123.449684 428.865295,124.118370
	C424.968414,125.423729 423.767853,128.568863 423.750763,132.345444
	C423.725922,137.826767 423.721619,143.308380 423.750793,148.789642
	C423.768982,152.209808 421.722961,153.192200 418.859772,152.650543
	C416.014801,152.112320 411.089111,154.861450 410.903076,149.557999
	C410.456451,136.825134 410.758606,124.065987 410.758606,110.737816
	C415.685791,111.952606 420.837189,108.327919 424.659576,113.714157
	C425.422089,113.005005 426.123138,111.935440 427.099487,111.531776
	C429.147858,110.684868 431.341034,110.188141 433.474762,109.547638
	C433.666626,111.396049 433.896484,113.241501 434.040680,115.093620
	C434.220215,117.399582 434.329010,119.711060 434.720276,122.414337
z"/>
            <path fill="#FEBF44" opacity="1.000000" stroke="none"
                  d="
M112.857948,74.445068
	C109.271935,80.604561 104.173164,83.008629 97.586555,81.878654
	C92.035576,80.926353 87.562370,76.159737 86.459724,70.469383
	C85.485573,65.442131 88.329529,59.272224 92.951988,56.384544
	C97.946480,53.264454 104.167587,53.569225 108.761971,57.159096
	C114.088554,61.321095 115.476845,66.846695 112.857948,74.445068
z"/>
            <path fill="#3BC5EA" opacity="1.000000" stroke="none"
                  d="
M63.644394,93.810432
	C71.173035,95.766258 75.339394,100.535370 75.623512,107.069458
	C75.875740,112.870346 71.958267,118.676338 66.442253,120.676788
	C60.552048,122.812958 54.334579,121.011780 50.390770,115.844482
	C47.042236,111.457115 46.738171,106.453140 48.955311,101.660248
	C51.679489,95.771255 56.661385,93.145882 63.644394,93.810432
z"/>
            <path fill="#131313" opacity="1.000000" stroke="none"
                  d="
M81.093857,197.950424
	C82.581245,193.487442 83.959183,189.404266 85.390091,185.164124
	C87.679802,185.164124 89.958984,185.164124 92.463158,185.164124
	C92.463158,193.791641 92.463158,202.226318 92.463158,210.809052
	C90.844025,210.809052 89.408867,210.809052 87.574860,210.809052
	C87.574860,205.648117 87.574860,200.702438 87.574860,195.756760
	C87.159622,195.648712 86.744392,195.540665 86.329155,195.432617
	C84.523643,200.564392 82.718132,205.696152 80.887321,210.899841
	C79.302139,210.899841 77.834419,210.899841 76.221268,210.899841
	C74.349953,204.914932 72.501358,199.002686 70.652763,193.090454
	C70.414742,193.141449 70.176727,193.192459 69.938705,193.243454
	C69.938705,199.051941 69.938705,204.860428 69.938705,210.843185
	C68.441803,210.843185 67.172104,210.843185 65.603729,210.843185
	C65.603729,202.371567 65.603729,193.954636 65.603729,185.252625
	C67.895287,185.252625 70.140808,185.252625 72.627502,185.252625
	C74.526222,191.404434 76.427513,197.564590 78.754623,205.104385
	C79.742386,202.103546 80.363396,200.216888 81.093857,197.950424
M87.183998,195.033844
	C87.388420,194.249252 87.592834,193.464676 87.797249,192.680099
	C87.620247,192.631531 87.443237,192.582962 87.266235,192.534393
	C87.021423,193.224274 86.776611,193.914139 87.183998,195.033844
z"/>
            <path fill="#2F2C2D" opacity="1.000000" stroke="none"
                  d="
M480.632751,80.955742
	C477.080719,81.343018 473.533173,81.840569 469.971283,81.985512
	C469.497284,82.004807 468.510925,80.237968 468.503693,79.292618
	C468.405090,66.404724 468.437347,53.515827 468.437347,39.900364
	C471.978394,39.900364 475.046539,39.900364 478.551422,40.458656
	C478.983917,52.792381 478.919098,64.568481 479.048889,76.342430
	C479.065887,77.885834 480.080292,79.418236 480.632751,80.955742
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M350.710663,187.065796
	C353.155334,191.808289 352.988464,193.050308 350.977997,195.203094
	C351.649567,199.590042 353.061951,203.045029 352.426636,206.069901
	C351.555664,210.216522 347.378937,210.861465 343.593353,210.996567
	C340.645233,211.101761 337.690369,211.017609 334.543640,211.017609
	C334.543640,202.261032 334.543640,193.987762 334.543640,184.305084
	C339.978302,185.170563 345.192474,186.000931 350.710663,187.065796
M339.379822,203.353745
	C339.362244,207.972443 342.907837,205.924530 344.735596,205.730347
	C345.864594,205.610413 346.767151,203.359238 347.771362,202.064865
	C346.153351,201.038544 344.655975,199.613785 342.889191,199.078674
	C340.195190,198.262741 338.921875,199.680435 339.379822,203.353745
M344.191956,189.995697
	C342.637726,190.066132 341.083496,190.136581 339.263794,190.219055
	C339.440216,192.118683 339.567932,193.493668 339.775665,195.730377
	C342.479187,194.870041 344.654480,194.177811 346.829803,193.485535
	C346.229004,192.361053 345.628204,191.236572 344.191956,189.995697
z"/>
            <path fill="#E22164" opacity="1.000000" stroke="none"
                  d="
M59.592930,57.450615
	C67.748367,57.439049 72.516251,61.849384 72.060867,68.549034
	C71.642471,74.704544 66.160309,78.975662 59.864479,78.051163
	C55.240543,77.372169 51.711117,73.742790 51.140518,69.080109
	C50.494343,63.799915 53.251862,59.857010 59.592930,57.450615
z"/>
            <path fill="#55BE86" opacity="1.000000" stroke="none"
                  d="
M94.383713,99.366730
	C98.648766,95.745392 102.964005,95.022316 107.461685,97.927338
	C111.289688,100.399826 113.023033,104.040367 112.130669,108.582832
	C111.250046,113.065536 108.503456,116.036118 103.956795,116.902756
	C99.484840,117.755165 95.701431,116.356270 93.159920,112.459587
	C90.250160,107.998283 90.734711,103.680061 94.383713,99.366730
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M284.781158,184.967621
	C289.248749,185.370224 293.892212,185.681305 294.411377,190.628525
	C294.733185,193.695099 292.875397,196.990402 291.995972,200.183044
	C291.468964,200.127838 290.941956,200.072647 290.414948,200.017441
	C292.659149,203.448044 294.903381,206.878662 297.295929,210.536041
	C293.460602,211.801407 291.356384,210.685028 289.452240,207.471756
	C287.997101,205.016159 287.627502,200.846512 282.685364,201.175186
	C282.685364,204.452835 282.685364,207.546173 282.685364,210.831253
	C280.812897,210.831253 279.366791,210.831253 277.611267,210.831253
	C277.611267,202.400970 277.611267,194.020096 277.611267,184.967621
	C279.828186,184.967621 282.080994,184.967621 284.781158,184.967621
M282.682068,191.660324
	C282.682068,193.382431 282.682068,195.104538 282.682068,198.310989
	C285.627472,196.692657 287.575134,195.862900 289.170410,194.591080
	C289.615509,194.236221 289.249725,191.760437 288.862457,191.651093
	C286.902008,191.097595 284.811890,191.003342 282.682068,191.660324
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M519.669678,199.919128
	C521.829102,203.643723 523.952209,206.979309 526.222778,210.546509
	C522.484985,211.785431 520.368896,210.722809 518.468445,207.493286
	C517.013977,205.021820 516.608643,200.888977 511.690979,201.142593
	C511.690979,204.444672 511.690979,207.544418 511.690979,210.829224
	C509.814148,210.829224 508.365662,210.829224 506.610168,210.829224
	C506.610168,202.393112 506.610168,194.004608 506.610168,184.970993
	C509.517914,184.970993 512.471863,184.709869 515.359253,185.036652
	C519.025208,185.451508 522.640625,186.312851 523.699158,190.746033
	C524.658386,194.763214 522.820007,197.450043 519.669678,199.919128
M515.122620,196.941467
	C516.234558,195.450485 517.346558,193.959503 518.458496,192.468506
	C516.440674,191.456009 514.422791,190.443512 512.404968,189.431015
	C512.111328,189.879791 511.817627,190.328568 511.523956,190.777359
	C513.043823,192.610718 508.959717,196.549774 515.122620,196.941467
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M188.311401,187.362228
	C190.407196,182.656662 194.162903,185.304718 196.997345,185.164536
	C200.544052,184.989151 204.269836,185.954041 205.568924,190.372467
	C206.817749,194.619980 204.824844,197.334641 201.352707,199.803497
	C203.635040,203.368729 205.921295,206.940125 208.255341,210.586136
	C199.086945,213.619827 200.875870,201.434891 193.840576,200.776962
	C193.840576,204.266907 193.840576,207.341476 193.840576,210.790970
	C191.857880,210.878830 190.306549,210.947571 188.307663,211.036148
	C188.307663,203.047668 188.307663,195.438721 188.311401,187.362228
M197.122498,196.941406
	C198.234360,195.450653 199.346237,193.959900 200.458099,192.469131
	C198.440002,191.456665 196.421906,190.444199 194.403793,189.431747
	C194.110138,189.880447 193.816498,190.329147 193.522842,190.777832
	C195.042404,192.611130 190.960281,196.550461 197.122498,196.941406
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M151.838516,203.158905
	C149.952515,209.867294 141.723007,213.062042 134.242645,209.717575
	C128.681931,207.231384 126.384048,197.889389 129.493759,191.243881
	C132.169540,185.525696 139.991028,182.803909 146.111694,186.437988
	C148.834457,188.054581 150.762375,191.731888 151.999359,194.886292
	C152.890045,197.157608 152.040833,200.111191 151.838516,203.158905
M138.854858,190.035828
	C133.146942,191.646851 133.263870,196.284760 134.194397,200.499390
	C134.651352,202.569031 136.965988,205.105530 138.986404,205.770584
	C143.205734,207.159454 146.250259,204.481354 146.858383,199.867706
	C147.686615,193.584061 145.428925,190.486649 138.854858,190.035828
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M45.431343,185.049713
	C59.403324,184.603348 60.988667,195.212982 58.372879,204.002747
	C56.912281,208.910751 52.121574,211.358887 46.459190,211.009995
	C40.742622,210.657791 37.019730,207.674240 35.723846,202.406662
	C33.536041,193.513550 36.651249,187.716812 45.431343,185.049713
M53.147717,193.626770
	C51.357277,192.418335 49.673985,190.413071 47.755733,190.155151
	C42.589287,189.460449 40.147709,193.373230 40.926075,200.124557
	C41.351040,203.810623 43.180222,205.801743 46.991707,206.025955
	C50.858364,206.253403 53.043819,204.285294 53.676792,200.773956
	C54.049637,198.705627 53.611130,196.491028 53.147717,193.626770
z"/>
            <path fill="#101010" opacity="1.000000" stroke="none"
                  d="
M13.754446,193.935089
	C17.034100,194.659531 20.255436,194.907059 23.743200,195.175064
	C23.743200,191.651184 23.743200,188.707199 23.743200,185.235016
	C25.481098,185.126099 27.013517,185.030060 28.854294,184.914688
	C28.854294,193.574509 28.854294,201.967148 28.854294,210.692963
	C27.448523,210.692963 25.917154,210.692963 23.974567,210.692963
	C23.974567,207.299026 23.974567,203.886703 23.974567,200.260681
	C20.495981,200.260681 17.411457,200.260681 13.856615,200.260681
	C13.856615,203.616898 13.856615,207.006577 13.856615,210.773071
	C11.863383,210.867798 10.315080,210.941376 8.534445,211.026001
	C8.534445,202.237579 8.534445,193.827118 8.534445,185.196823
	C10.153491,185.196823 11.594306,185.196823 13.696131,185.196823
	C13.696131,187.951080 13.696131,190.704620 13.754446,193.935089
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M411.567627,195.483795
	C412.858673,191.831177 413.980774,188.534897 415.137970,185.135651
	C417.201843,185.135651 419.178711,185.135651 421.658905,185.135651
	C424.577942,193.485275 427.555908,202.003387 430.643402,210.834869
	C428.671631,210.834869 427.199890,210.834869 425.276367,210.834869
	C424.600800,209.129318 423.835510,207.197388 423.029663,205.163040
	C419.982452,205.163040 417.014069,205.163040 413.745758,205.163040
	C413.105438,206.905502 412.434082,208.732498 411.677185,210.792267
	C410.180695,210.792267 408.559784,210.792267 406.270203,210.792267
	C408.024963,205.676315 409.711853,200.758240 411.567627,195.483795
M420.136871,194.438736
	C419.658264,192.893829 419.179657,191.348923 418.415710,188.882812
	C417.125305,193.049805 416.106110,196.341125 415.066315,199.698868
	C417.633667,199.698868 419.642456,199.698868 421.838623,199.698868
	C421.286743,197.935593 420.849487,196.538544 420.136871,194.438736
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M478.823975,206.085205
	C481.354706,198.825241 483.774170,191.970886 486.200073,185.098328
	C488.409271,185.098328 490.384827,185.098328 492.653198,185.098328
	C495.593689,193.505737 498.532318,201.907806 501.494415,210.376984
	C496.017822,212.900253 495.305817,208.903961 494.288696,205.275726
	C491.077454,205.275726 487.986847,205.275726 484.655579,205.275726
	C484.026550,207.036880 483.373962,208.863968 482.668945,210.837799
	C481.020447,210.837799 479.390625,210.837799 477.378326,210.837799
	C477.866272,209.248230 478.289490,207.869522 478.823975,206.085205
M490.317413,191.711609
	C490.091888,191.100632 489.866364,190.489670 489.359772,189.117157
	C488.127533,193.062134 487.103729,196.339783 486.047119,199.722488
	C488.592255,199.722488 490.615356,199.722488 492.807434,199.722488
	C492.017395,197.035797 491.326569,194.686600 490.317413,191.711609
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M266.014648,190.022614
	C261.276337,189.633514 262.982574,192.558472 262.759766,194.952362
	C265.610016,194.952362 268.207245,194.952362 271.008850,194.952362
	C271.008850,196.747345 271.008850,198.151703 271.008850,199.963959
	C268.333832,199.963959 265.738281,199.963959 262.914429,199.963959
	C262.914429,202.090576 262.914429,203.819290 262.914429,205.842300
	C265.791901,205.842300 268.574036,205.842300 271.688293,205.842300
	C271.688293,207.639359 271.688293,209.150269 271.688293,210.830856
	C267.008057,210.830856 262.417511,210.830856 257.575256,210.830856
	C257.575256,202.238968 257.575256,193.838272 257.575256,185.207184
	C262.355438,185.207184 266.939606,185.207184 271.774384,185.207184
	C271.774384,186.675064 271.774384,188.080765 271.774384,190.022522
	C270.042114,190.022522 268.266846,190.022522 266.014648,190.022614
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M212.324158,204.844025
	C212.324158,198.072311 212.324158,191.780716 212.324158,185.237244
	C217.301697,185.237244 221.882248,185.237244 226.868195,185.237244
	C226.929977,186.615295 226.993103,188.023209 227.077225,189.899414
	C223.969406,189.899414 221.055359,189.899414 217.918030,189.899414
	C217.918030,191.745300 217.918030,193.136826 217.918030,194.933640
	C220.580719,194.933640 223.178619,194.933640 225.994995,194.933640
	C225.994995,196.729019 225.994995,198.134583 225.994995,199.944382
	C223.362122,199.944382 220.766937,199.944382 217.927292,199.944382
	C217.927292,202.070389 217.927292,203.799545 217.927292,205.820618
	C220.758575,205.820618 223.541824,205.820618 226.672928,205.820618
	C226.672928,207.613556 226.672928,209.124588 226.672928,210.833649
	C222.036789,210.833649 217.443573,210.833649 212.324158,210.833649
	C212.324158,208.891068 212.324158,207.107605 212.324158,204.844025
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M384.744690,204.920166
	C387.712311,205.694824 390.624603,205.988525 393.779114,206.306641
	C393.779114,207.685181 393.779114,209.093460 393.779114,210.763977
	C389.213257,210.763977 384.612610,210.763977 379.665771,210.763977
	C379.665771,202.434372 379.665771,194.044388 379.665771,185.313934
	C384.168976,185.313934 388.740967,185.313934 393.668945,185.313934
	C393.668945,186.614517 393.668945,188.122513 393.668945,189.948181
	C390.863495,189.948181 388.088562,189.948181 384.920013,189.948181
	C384.813171,191.625427 384.723938,193.025711 384.609070,194.828644
	C387.418091,194.828644 390.020203,194.828644 392.989258,194.828644
	C393.098114,196.598267 393.184875,198.008713 393.297333,199.837097
	C390.521027,199.837097 387.929138,199.837097 384.955322,199.837097
	C384.852264,201.620178 384.770782,203.029678 384.744690,204.920166
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M541.862183,205.977661
	C546.723877,205.727310 544.561279,208.737915 544.994507,210.826111
	C540.054382,210.826111 535.459534,210.826111 530.593140,210.826111
	C530.593140,202.286728 530.593140,193.884933 530.593140,185.229218
	C535.316528,185.229218 539.898132,185.229218 544.753174,185.229218
	C544.753174,186.640991 544.753174,188.046463 544.753174,189.913544
	C541.952148,189.913544 539.040588,189.913544 535.909058,189.913544
	C535.909058,191.762543 535.909058,193.157150 535.909058,194.949158
	C538.605530,194.949158 541.203308,194.949158 544.007935,194.949158
	C544.007935,196.747086 544.007935,198.152435 544.007935,199.960358
	C541.339417,199.960358 538.743469,199.960358 535.916138,199.960358
	C535.916138,202.084061 535.916138,203.811737 535.916138,205.977539
	C537.800964,205.977539 539.596130,205.977539 541.862183,205.977661
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M104.683441,202.037506
	C104.445213,204.781052 104.726067,206.451340 107.747383,206.023758
	C109.541809,205.769806 111.401527,205.977264 113.788666,205.977264
	C113.873329,207.511993 113.957008,209.028931 114.054512,210.796417
	C109.128593,210.796417 104.526077,210.796417 99.622009,210.796417
	C99.622009,202.369370 99.622009,193.967407 99.622009,185.270142
	C104.245964,185.270142 108.822403,185.270142 113.785934,185.270142
	C113.881012,186.559174 113.984962,187.968414 114.124016,189.853546
	C111.038940,189.853546 108.128487,189.853546 104.951225,189.853546
	C104.951225,191.699677 104.951225,193.097931 104.951225,194.890808
	C107.513931,194.890808 110.112587,194.890808 112.963745,194.890808
	C112.963745,196.680939 112.963745,198.087204 112.963745,199.240204
	C110.190819,200.016617 107.440460,200.786713 104.683441,202.037506
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M434.326599,208.544067
	C434.324188,200.615692 434.324188,193.142746 434.324188,184.984131
	C437.652740,184.984131 440.757111,184.775909 443.822937,185.031006
	C448.926971,185.455688 451.732025,188.288315 451.961456,192.807068
	C452.190979,197.327011 449.747314,200.530533 444.971710,201.694733
	C443.394379,202.079269 441.718079,202.057800 439.639648,202.266998
	C439.639648,204.980408 439.639648,207.714050 439.639648,212.048615
	C437.226379,210.663055 435.777679,209.831284 434.326599,208.544067
M443.079346,196.992371
	C444.195404,195.384903 445.311462,193.777451 446.427551,192.169998
	C444.326111,191.241486 442.224640,190.312958 440.123199,189.384445
	C439.840851,189.821442 439.558502,190.258423 439.276154,190.695419
	C440.728577,192.623245 436.511108,196.802658 443.079346,196.992371
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M474.182251,196.941833
	C470.652222,199.393967 467.218597,201.463638 463.784973,203.533325
	C463.389648,203.120865 462.994324,202.708389 462.598999,202.295929
	C462.598999,205.025879 462.598999,207.755814 462.598999,210.771240
	C460.780121,210.868698 459.367065,210.944397 457.630310,211.037460
	C457.630310,202.415466 457.630310,194.054520 457.630310,185.680725
	C471.003448,182.830353 477.113220,187.988419 474.182251,196.941833
M466.079132,196.993530
	C467.194580,195.385971 468.310028,193.778412 469.425476,192.170868
	C467.324738,191.242004 465.223999,190.313141 463.123260,189.384277
	C462.840881,189.821396 462.558502,190.258530 462.276123,190.695648
	C463.725372,192.624619 459.511627,196.802780 466.079132,196.993530
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M238.357758,194.548676
	C239.439972,198.106979 240.387375,201.286362 241.569214,205.252426
	C243.850922,198.116333 245.925674,191.627487 248.008698,185.112793
	C249.701248,185.112793 251.168304,185.112793 253.209900,185.112793
	C250.309418,193.790283 247.504074,202.183136 244.725021,210.497330
	C240.419418,212.194031 238.328125,210.658508 237.118546,206.391510
	C235.128342,199.370621 232.630173,192.493744 230.247162,185.255478
	C232.004105,185.255478 233.577087,185.255478 235.449997,185.255478
	C236.365738,188.199326 237.294342,191.184525 238.357758,194.548676
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M307.756287,200.251038
	C306.496338,199.699646 305.556702,199.349426 304.676819,198.885818
	C301.482117,197.202484 299.293304,194.861938 300.145477,190.927002
	C301.021240,186.883179 304.119354,185.238373 307.786102,185.095718
	C310.342957,184.996231 312.938660,185.896408 316.031921,186.440628
	C315.514954,188.225143 315.139984,189.519547 314.674042,191.127930
	C313.234100,190.759811 311.968231,190.099350 310.772980,190.208923
	C308.939789,190.376968 307.155243,191.074997 305.350037,191.548126
	C306.473816,192.933380 307.592926,194.322495 308.730408,195.696365
	C308.820038,195.804626 309.046204,195.789368 309.194763,195.860870
	C315.754822,199.018005 317.502563,201.763702 315.768799,206.181747
	C314.167603,210.261963 308.431763,211.845123 302.794312,210.382874
	C299.132538,209.433060 299.585541,207.339478 300.168701,204.615021
	C302.325867,205.088882 304.361664,205.841721 306.412079,205.883820
	C307.888306,205.914154 309.384003,204.997070 310.871002,204.502594
	C309.948669,203.135132 309.026337,201.767654 307.756287,200.251038
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M160.944794,211.015976
	C159.779861,210.204178 158.447479,209.405182 158.430038,208.578461
	C158.268951,200.940887 158.334991,193.298523 158.334991,185.321442
	C163.171753,185.321442 167.745605,185.321442 172.670013,185.321442
	C172.670013,186.627411 172.670013,188.134766 172.670013,190.029419
	C169.677765,190.029419 166.739777,190.029419 163.626465,190.029419
	C163.626465,192.026657 163.626465,193.647507 163.626465,195.799423
	C166.269058,195.799423 168.990738,195.799423 171.907959,195.799423
	C171.907959,197.731323 171.907959,199.137283 171.907959,200.909973
	C169.256424,200.909973 166.649796,200.909973 163.438965,200.909973
	C163.438965,203.662476 163.622681,206.103867 163.344986,208.491592
	C163.239716,209.396698 162.071198,210.178131 160.944794,211.015976
z"/>
            <path fill="#E22164" opacity="1.000000" stroke="none"
                  d="
M58.892349,20.927513
	C64.220779,21.677174 66.575470,24.696798 66.523727,29.509897
	C66.481819,33.408001 63.123722,36.846123 59.224129,37.073513
	C54.851646,37.328480 51.868217,35.206818 50.551750,31.057482
	C48.980228,26.104256 52.304482,21.947075 58.892349,20.927513
z"/>
            <path fill="#E22164" opacity="1.000000" stroke="none"
                  d="
M15.570803,59.782173
	C21.801752,54.608200 28.941034,56.366142 30.033922,63.027161
	C30.662960,66.861061 29.552984,70.603989 25.803551,71.617325
	C23.031136,72.366608 19.084484,71.903069 16.734024,70.352867
	C13.144162,67.985237 13.118114,63.898613 15.570803,59.782173
z"/>
            <path fill="#57BF88" opacity="1.000000" stroke="none"
                  d="
M143.914734,118.240280
	C139.448730,119.801231 135.534119,119.013008 133.776138,115.112701
	C132.667023,112.651970 132.791336,108.979721 133.778519,106.390930
	C135.097000,102.933319 138.955002,101.803566 142.187134,103.127083
	C144.599533,104.114929 147.129761,106.500725 148.122177,108.882805
	C149.682220,112.627449 147.755478,115.913094 143.914734,118.240280
z"/>
            <path fill="#57BF88" opacity="1.000000" stroke="none"
                  d="
M97.215828,149.661591
	C95.733955,144.070251 97.579292,139.912750 101.889824,138.390762
	C105.770149,137.020676 110.099586,138.849258 111.914604,142.624847
	C113.782036,146.509476 112.551788,150.800339 108.933075,153.023804
	C104.948586,155.472015 100.896187,154.411041 97.215828,149.661591
z"/>
            <path fill="#101010" opacity="1.000000" stroke="none"
                  d="
M362.227875,211.024872
	C359.827789,211.129608 358.211639,211.188675 358.269745,208.333740
	C358.424774,200.715652 358.322510,193.092346 358.322510,185.226273
	C360.095032,185.226273 361.520355,185.226273 363.309326,185.226273
	C363.309326,191.998322 363.309326,198.750916 363.309326,205.849274
	C366.934601,205.849274 370.205780,205.849274 373.833221,205.849274
	C373.946564,207.583206 374.038818,208.994705 374.171509,211.024887
	C370.225830,211.024887 366.462311,211.024887 362.227875,211.024872
z"/>
            <path fill="#101010" opacity="1.000000" stroke="none"
                  d="
M555.455505,198.006760
	C555.455444,200.823303 555.455444,203.144363 555.455444,205.813995
	C558.891052,205.813995 562.158875,205.813995 565.748901,205.813995
	C565.748901,207.662399 565.748901,209.167206 565.748901,210.851685
	C560.708740,210.851685 555.786316,210.851685 550.591919,210.851685
	C550.591919,202.299698 550.591919,193.903870 550.591919,185.200562
	C552.060303,185.129272 553.479187,185.060394 555.455566,184.964447
	C555.455566,189.326981 555.455566,193.419128 555.455505,198.006760
z"/>
            <path fill="#272324" opacity="1.000000" stroke="none"
                  d="
M327.713837,186.480621
	C327.742645,194.726120 327.742645,202.510757 327.742645,210.732056
	C326.005219,210.871323 324.460449,210.995148 322.566193,211.146988
	C322.566193,202.435150 322.566193,194.056870 322.566193,184.709061
	C324.343567,185.164154 326.014282,185.591949 327.713837,186.480621
z"/>
            <path fill="#3A3637" opacity="1.000000" stroke="none"
                  d="
M469.708008,23.428631
	C473.633789,22.356979 477.605133,20.793415 480.528564,24.901525
	C478.678528,27.709715 477.571808,30.075289 480.823761,31.870850
	C480.576141,32.735203 480.499268,33.719048 480.011841,34.415577
	C479.752075,34.786762 478.785217,34.687321 478.132812,34.755859
	C468.359161,35.782574 467.573578,34.883583 469.236572,24.050238
	C469.848175,24.187878 469.955994,24.295826 470.063843,24.403767
	C469.945221,24.078718 469.826599,23.753675 469.708008,23.428631
M470.387512,32.475636
	C470.387512,32.475636 470.552002,32.570999 470.552002,32.570999
	C470.552002,32.570999 470.529633,32.382664 470.387512,32.475636
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M317.283997,150.680969
	C316.739258,150.346756 316.057587,149.642685 316.059784,148.940781
	C316.116699,130.832611 316.244904,112.724663 316.654114,94.321594
	C317.119781,99.139244 317.414581,104.251343 317.440796,109.364807
	C317.510773,123.013596 317.465302,136.662979 317.283997,150.680969
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M369.619873,93.350662
	C370.005249,110.202194 370.029724,127.113060 369.960327,144.023544
	C369.952454,145.936371 369.415985,147.847015 368.724396,149.979156
	C368.224182,132.141647 368.107239,114.083702 368.076172,96.025612
	C368.074677,95.154373 368.828888,94.281830 369.619873,93.350662
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M498.392029,40.078766
	C497.503876,40.791630 496.098633,42.019047 494.833832,41.888309
	C490.590424,41.449692 489.883423,43.447170 489.942719,47.131664
	C490.124603,58.435417 489.999176,69.744110 489.998413,81.518654
	C489.283936,81.137016 487.946320,80.294037 487.937378,79.437263
	C487.803589,66.557343 487.844696,53.675617 487.844696,39.971039
	C491.495850,39.971039 494.717590,39.971039 498.392029,40.078766
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M200.968582,125.515244
	C201.552139,124.885315 202.337692,124.712021 202.672974,124.227287
	C204.645828,121.375015 207.451126,119.050247 210.496017,121.225418
	C212.684296,122.788681 213.496124,126.278778 215.389313,129.771545
	C209.708923,128.714584 205.757675,127.979370 201.410675,127.161095
	C200.997452,126.661354 200.979996,126.244682 200.968582,125.515244
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M491.971008,125.549179
	C492.702667,124.873978 493.715607,124.717178 494.122772,124.135971
	C496.124908,121.277931 498.984680,119.099854 501.953949,121.229118
	C504.135101,122.793243 504.932343,126.287239 506.739777,129.654160
	C501.049683,128.687912 496.960602,127.993538 492.471313,127.229141
	C492.038422,126.730072 492.005737,126.301010 491.971008,125.549179
z"/>
            <path fill="#131313" opacity="1.000000" stroke="none"
                  d="
M480.803406,80.518158
	C480.080292,79.418236 479.065887,77.885834 479.048889,76.342430
	C478.919098,64.568481 478.983917,52.792381 479.001465,40.554375
	C479.678101,41.444443 480.901001,42.790493 480.917023,44.150753
	C481.058014,56.125927 480.984253,68.103622 480.803406,80.518158
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M523.387817,81.888885
	C522.984009,73.617783 522.940308,65.305824 523.024963,56.995178
	C523.040894,55.436623 523.570007,53.883293 524.218445,52.188519
	C524.642822,61.113293 524.738586,70.177109 524.735657,79.240891
	C524.735352,80.110184 524.121277,80.979294 523.387817,81.888885
z"/>
            <path fill="#3A3637" opacity="1.000000" stroke="none"
                  d="
M268.573425,150.759598
	C267.936188,150.436508 267.166565,149.757553 267.171875,149.084656
	C267.244049,139.891022 267.423309,130.698227 267.887878,121.216324
	C268.400116,130.753784 268.600708,140.580170 268.573425,150.759598
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M225.802917,150.876114
	C225.150726,150.814438 224.281769,150.353424 224.287811,149.904160
	C224.411591,140.673950 224.635132,131.445084 225.224472,121.966171
	C225.737946,131.305008 225.865784,140.893631 225.802917,150.876114
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M517.259644,150.667084
	C516.714844,148.657196 516.050781,146.281067 516.048279,143.904236
	C516.041443,137.438187 516.314453,130.971848 516.796265,124.224663
	C517.224792,132.729324 517.333435,141.514923 517.259644,150.667084
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M410.176880,53.435150
	C410.767670,53.629559 411.894653,54.296524 411.892639,54.960056
	C411.866791,63.477089 411.679657,71.993622 411.203064,80.781799
	C410.644623,72.004242 410.416473,62.955177 410.176880,53.435150
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M512.173218,54.431343
	C512.786194,54.632324 513.896484,55.305748 513.894409,55.975712
	C513.868958,64.149055 513.680115,72.321884 513.210022,80.773018
	C512.642212,72.334854 512.397949,63.618515 512.173218,54.431343
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M498.350647,82.041016
	C497.995850,74.880180 497.924652,67.764648 498.046051,60.652393
	C498.071442,59.166012 498.807861,57.691761 499.609619,56.106529
	C500.058136,63.590179 500.173920,71.179779 500.102692,78.767624
	C500.092255,79.878532 499.191467,80.981071 498.350647,82.041016
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M255.959610,124.472748
	C256.615967,124.450302 257.807800,124.906906 257.799194,125.339661
	C257.643402,133.181183 257.343048,141.019821 256.648254,149.094360
	C256.127380,141.199997 256.031830,133.070343 255.959610,124.472748
z"/>
            <path fill="#353233" opacity="1.000000" stroke="none"
                  d="
M288.207306,82.498779
	C292.159485,82.104942 296.419556,81.911575 300.905518,82.040390
	C296.925995,82.474808 292.720612,82.587036 288.207306,82.498779
z"/>
            <path fill="#353233" opacity="1.000000" stroke="none"
                  d="
M432.995819,81.421478
	C436.533356,80.759323 440.237732,80.448112 444.332031,80.059990
	C443.605804,80.797745 442.528473,82.229912 441.365723,82.303017
	C438.653198,82.473557 435.899597,81.990639 432.995819,81.421478
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M393.493408,151.632843
	C396.546509,151.184845 399.818817,151.089905 403.813843,150.988220
	C404.536591,150.981476 405.032410,151.006760 405.032410,151.006760
	C401.259125,151.333130 397.485840,151.659515 393.493408,151.632843
z"/>
            <path fill="#353233" opacity="1.000000" stroke="none"
                  d="
M444.700806,51.641098
	C444.138855,50.376545 443.655426,48.731987 443.265808,46.659920
	C443.832855,47.908642 444.306122,49.584866 444.700806,51.641098
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M480.901733,31.454176
	C477.571808,30.075289 478.678528,27.709715 480.397766,25.220432
	C480.878845,27.092840 480.929260,29.065170 480.901733,31.454176
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M388.721558,109.267197
	C388.432434,109.693100 387.858765,110.060341 387.138123,110.202629
	C387.473114,109.721291 387.955048,109.464905 388.721558,109.267197
z"/>
            <path fill="#2A2627" opacity="1.000000" stroke="none"
                  d="
M381.671265,112.635910
	C381.548920,113.095161 381.095917,113.378807 380.642883,113.662468
	C380.541809,113.262772 380.440735,112.863075 380.503113,112.298683
	C380.891266,112.242760 381.115936,112.351540 381.671265,112.635910
z"/>
            <path fill="#0D0D0D" opacity="1.000000" stroke="none"
                  d="
M234.861115,66.243904
	C235.065842,66.256981 235.194031,66.528870 235.154602,66.901932
	C234.919525,66.836304 234.852051,66.669510 234.861115,66.243904
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M331.507355,80.801170
	C331.214905,80.713608 331.167633,80.352859 331.371613,79.898727
	C331.666077,80.046227 331.709290,80.287102 331.507355,80.801170
z"/>
            <path fill="#0F0F0F" opacity="1.000000" stroke="none"
                  d="
M400.327393,80.772446
	C399.931702,80.798996 399.750427,80.570618 399.597473,80.324646
	C399.589417,80.311668 399.820862,80.149727 400.151001,79.958832
	C400.423401,80.078300 400.485535,80.296074 400.327393,80.772446
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M566.111938,94.741142
	C565.897156,94.774300 565.719177,94.534660 565.669495,94.169548
	C565.914795,94.185501 566.031738,94.326920 566.111938,94.741142
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M405.214813,123.768188
	C405.002808,123.754776 404.871887,123.470711 404.916718,123.078499
	C405.160278,123.146088 405.228088,123.321815 405.214813,123.768188
z"/>
            <path fill="#090909" opacity="1.000000" stroke="none"
                  d="
M405.181152,150.756287
	C405.032410,151.006760 404.536591,150.981476 404.288818,150.982529
	C404.249359,150.707947 404.457611,150.432312 404.911652,150.052979
	C405.214905,150.134766 405.272400,150.320282 405.181152,150.756287
z"/>
            <path fill="#F7F7F7" opacity="1.000000" stroke="none"
                  d="
M551.768677,137.626007
	C546.645508,142.305130 541.479370,142.828583 537.164978,139.376266
	C533.403564,136.366409 532.428284,130.320023 534.963623,125.728180
	C537.202942,121.672447 542.385071,119.864296 547.114502,121.488457
	C553.174500,123.569580 555.100952,129.804138 551.768677,137.626007
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M560.467041,150.448105
	C560.522522,150.415482 560.411499,150.480728 560.467041,150.448105
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M288.949463,122.742432
	C293.662292,120.114021 297.945007,120.128860 301.753021,123.547783
	C305.052612,126.510178 305.670685,130.388702 304.497101,134.541061
	C303.331177,138.666183 300.430328,140.989563 296.268311,141.499924
	C291.934021,142.031403 288.373749,140.482849 286.168427,136.580612
	C283.709808,132.230118 284.637665,127.450958 288.949463,122.742432
z"/>
            <path fill="#D6D6D6" opacity="1.000000" stroke="none"
                  d="
M453.803772,120.415222
	C458.899017,119.720894 463.294006,119.852409 465.639160,126.405571
	C463.292419,126.862076 461.134979,127.432457 458.941833,127.663651
	C456.967804,127.871742 454.932037,127.891685 452.965637,127.650703
	C451.347717,127.452438 449.791534,126.749969 448.208008,126.270973
	C449.186646,124.701790 450.062805,123.052605 451.194489,121.602875
	C451.645325,121.025291 452.661163,120.888702 453.803772,120.415222
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M352.732910,56.226486
	C356.691925,51.294754 360.811462,49.786636 364.961975,51.703129
	C369.375427,53.741047 371.300232,57.341019 370.850555,62.163868
	C370.408600,66.904472 367.595245,69.612000 363.155518,70.784637
	C357.113037,72.380592 348.759918,65.792671 352.732910,56.226486
z"/>
            <path fill="#ECECEC" opacity="1.000000" stroke="none"
                  d="
M504.026855,142.919815
	C502.523499,143.584610 501.170441,144.525604 500.106323,144.268906
	C497.780243,143.707794 495.480377,142.726486 493.474518,141.441269
	C493.120087,141.214172 494.024109,137.548157 494.721832,137.413589
	C497.477112,136.882156 500.469055,136.733185 503.173523,137.336975
	C503.910583,137.501526 503.949127,140.795212 504.026855,142.919815
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M511.724243,150.870865
	C511.250916,150.771713 511.002350,150.632965 510.753784,150.494232
	C511.002075,150.355835 511.309204,150.056442 511.483612,150.120193
	C511.696899,150.198105 511.798889,150.580536 511.724243,150.870865
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M507.554382,150.462891
	C507.590271,150.520844 507.518463,150.404953 507.554382,150.462891
z"/>
            <path fill="#ECECEC" opacity="1.000000" stroke="none"
                  d="
M202.630615,137.849762
	C204.138565,137.126785 205.352127,136.366577 206.586548,136.331085
	C209.740067,136.240417 213.700882,135.955948 213.547928,140.524292
	C213.411270,144.605713 209.707336,144.490433 206.672592,144.363739
	C202.623245,144.194687 200.844543,142.262878 202.630615,137.849762
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M261.276489,150.395096
	C261.149902,150.554077 260.930420,150.576859 260.710907,150.599640
	C260.868469,150.486053 261.026001,150.372467 261.276489,150.395096
z"/>
            <path fill="#141414" opacity="1.000000" stroke="none"
                  d="
M347.049377,127.367432
	C347.106781,125.633972 347.164154,124.346863 347.221527,123.059753
	C347.397247,123.063820 347.572998,123.067894 347.748718,123.071960
	C347.748718,131.369400 347.748718,139.666824 347.748718,147.964264
	C347.515594,147.968384 347.282440,147.972504 347.049316,147.976624
	C347.049316,141.255676 347.049316,134.534729 347.049377,127.367432
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M356.978699,144.516922
	C356.978607,145.910690 356.978607,146.871140 356.978607,147.831604
	C356.750793,147.832657 356.522980,147.833725 356.295166,147.834778
	C356.295166,139.932953 356.295166,132.031128 356.295166,124.129311
	C356.523041,124.123116 356.750916,124.116928 356.978790,124.110733
	C356.978790,130.768356 356.978790,137.425995 356.978699,144.516922
z"/>
            <path fill="#FDFDFD" opacity="1.000000" stroke="none"
                  d="
M86.857895,194.818924
	C86.776611,193.914139 87.021423,193.224274 87.266235,192.534393
	C87.443237,192.582962 87.620247,192.631531 87.797249,192.680099
	C87.592834,193.464676 87.388420,194.249252 86.857895,194.818924
z"/>
            <path fill="#ECECEC" opacity="1.000000" stroke="none"
                  d="
M339.379395,202.926712
	C338.921875,199.680435 340.195190,198.262741 342.889191,199.078674
	C344.655975,199.613785 346.153351,201.038544 347.771362,202.064865
	C346.767151,203.359238 345.864594,205.610413 344.735596,205.730347
	C342.907837,205.924530 339.362244,207.972443 339.379395,202.926712
z"/>
            <path fill="#ECECEC" opacity="1.000000" stroke="none"
                  d="
M344.609680,190.053894
	C345.628204,191.236572 346.229004,192.361053 346.829773,193.485550
	C344.654480,194.177811 342.479187,194.870041 339.775665,195.730377
	C339.567932,193.493668 339.440216,192.118683 339.263794,190.219055
	C341.083496,190.136581 342.637726,190.066132 344.609680,190.053894
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M282.724640,191.204193
	C284.811890,191.003342 286.902008,191.097595 288.862457,191.651093
	C289.249725,191.760437 289.615509,194.236221 289.170410,194.591080
	C287.575134,195.862900 285.627472,196.692657 282.682068,198.310989
	C282.682068,195.104538 282.682068,193.382431 282.724640,191.204193
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M514.672119,196.959290
	C508.959717,196.549774 513.043823,192.610718 511.523956,190.777359
	C511.817627,190.328568 512.111328,189.879791 512.404968,189.431015
	C514.422791,190.443512 516.440674,191.456009 518.458496,192.468521
	C517.346558,193.959503 516.234558,195.450485 514.672119,196.959290
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M196.671997,196.959229
	C190.960281,196.550461 195.042404,192.611130 193.522842,190.777832
	C193.816498,190.329147 194.110138,189.880447 194.403793,189.431747
	C196.421906,190.444199 198.440002,191.456665 200.458099,192.469131
	C199.346237,193.959900 198.234360,195.450653 196.671997,196.959229
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M139.261139,190.018997
	C145.428925,190.486649 147.686615,193.584061 146.858383,199.867706
	C146.250259,204.481354 143.205734,207.159454 138.986404,205.770584
	C136.965988,205.105530 134.651352,202.569031 134.194397,200.499390
	C133.263870,196.284760 133.146942,191.646851 139.261139,190.018997
z"/>
            <path fill="#F6F6F6" opacity="1.000000" stroke="none"
                  d="
M53.342621,193.984497
	C53.611130,196.491028 54.049637,198.705627 53.676792,200.773956
	C53.043819,204.285294 50.858364,206.253403 46.991707,206.025955
	C43.180222,205.801743 41.351040,203.810623 40.926075,200.124557
	C40.147709,193.373230 42.589287,189.460449 47.755733,190.155151
	C49.673985,190.413071 51.357277,192.418335 53.342621,193.984497
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M420.274536,194.790115
	C420.849487,196.538544 421.286743,197.935593 421.838623,199.698868
	C419.642456,199.698868 417.633667,199.698868 415.066315,199.698868
	C416.106110,196.341125 417.125305,193.049805 418.415710,188.882812
	C419.179657,191.348923 419.658264,192.893829 420.274536,194.790115
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M490.476593,192.024506
	C491.326569,194.686600 492.017395,197.035797 492.807434,199.722488
	C490.615356,199.722488 488.592255,199.722488 486.047119,199.722488
	C487.103729,196.339783 488.127533,193.062134 489.359772,189.117157
	C489.866364,190.489670 490.091888,191.100632 490.476593,192.024506
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M442.671997,197.007401
	C436.511108,196.802658 440.728577,192.623245 439.276154,190.695419
	C439.558502,190.258423 439.840851,189.821442 440.123199,189.384445
	C442.224640,190.312958 444.326111,191.241486 446.427551,192.169998
	C445.311462,193.777451 444.195404,195.384903 442.671997,197.007401
z"/>
            <path fill="#E4E4E4" opacity="1.000000" stroke="none"
                  d="
M465.671814,197.007996
	C459.511627,196.802780 463.725372,192.624619 462.276123,190.695648
	C462.558502,190.258530 462.840881,189.821396 463.123260,189.384277
	C465.223999,190.313141 467.324738,191.242004 469.425476,192.170868
	C468.310028,193.778412 467.194580,195.385971 465.671814,197.007996
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M470.458557,32.429150
	C470.529633,32.382664 470.552002,32.570999 470.552002,32.570999
	C470.552002,32.570999 470.387512,32.475636 470.458557,32.429150
z"/>
            <path fill="#1A1617" opacity="1.000000" stroke="none"
                  d="
M469.649841,23.508278
	C469.826599,23.753675 469.945221,24.078718 470.063843,24.403767
	C469.955994,24.295826 469.848175,24.187878 469.586456,23.892197
	C469.432556,23.704462 469.591675,23.587921 469.649841,23.508278
z"/>
</svg>
    )
}
