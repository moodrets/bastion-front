// format = /pathname#scrollto=${elementId}
export function initScrollToOnLoad() {
    let hash = document.location.hash;
    let elementId = hash ? hash.split('=')[1] : '';
    if (!elementId) return;
    let target = document.querySelector(`#${elementId}`);
    let targetRect = target?.getBoundingClientRect();

    if (target && targetRect) {
        window.scrollTo({
            left: 0,
            top: targetRect.top,
            behavior: 'smooth',
        });
    }
}
