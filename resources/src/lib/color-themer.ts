function hex2rgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}


const colorThemer = (function ({ theme, addComponents }) {
    const colors = theme('colors');

    const setThemeProperties = Object.entries(colors).reduce(
        (acc, [key, value]) => {
            if (typeof value !== 'string' && key !== 'primary') {
                acc[`.set-theme-${key}`] = Object.entries(value as {[p: string]: string}).reduce(
                    (acc, [k, v]) => {
                        acc[`--color-primary-${k}`] = hex2rgb(v).join(' ');
                        return acc;
                    },
                    {},
                );
            }

            return acc;
        },
        {},
    );
    addComponents(setThemeProperties);
})
export default colorThemer;
/*
*
* <html class="set-theme-red">
    <div class="color-primary-500" />
    <div class="color-primary-800" />
</html>
*
* */
