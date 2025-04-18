export function addGlobalHandler(
    event: string,
    element: HTMLElement | Document | Window,
    callbacks: ((e: Event) => void)[] = []
) {
    function handler(e: Event) {
        callbacks.forEach((fn) => {
            fn(e);
        });
    }

    element.removeEventListener(event, handler);
    element.addEventListener(event, handler);
}
