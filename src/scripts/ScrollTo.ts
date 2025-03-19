// format = /pathname#scrollto=${elementId}
export function initScrollToOnLoad() {
    let hash = document.location.hash;
    let elementId = hash ? hash.split('=')[1] : '';
    if (!elementId) return;
    let target = document.querySelector(`#${elementId}`);

    if (target) {
        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    }
}
