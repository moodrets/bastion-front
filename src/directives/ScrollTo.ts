import { DirectiveBinding, VNode } from 'vue';

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        el.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();

            try {
                let targetElem = document.querySelector(binding.value.target) as HTMLElement;

                targetElem?.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                });
            } catch (error) {
                console.warn(error);
            }
        });
    },
};
