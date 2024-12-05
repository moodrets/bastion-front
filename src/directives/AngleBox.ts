export default {
    mounted(el: HTMLElement) {
        el.classList.add('angle-box');
        el.insertAdjacentHTML(
            'afterbegin',
            `
                <div class="angle-box__elems-left"></div>
                <div class="angle-box__elems-right"></div>
            `
        );
    },
};
