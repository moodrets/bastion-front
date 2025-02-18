export function initWindowResize(funcs: (() => void)[] = []) {
    function onResize() {
        funcs.forEach((fn) => {
            fn();
        });
    }
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
}
