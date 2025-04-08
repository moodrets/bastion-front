// const vClickOutside = {
//   mounted:(el:HTMLElement, binding:DirectiveBinding, vnode:VNode){
//      // do something
//   }
// }

import { DirectiveBinding } from 'vue';

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (binding.value.action === 'play-video') {
            el.addEventListener('mouseover', (e: MouseEvent) => {
                let video = (e.currentTarget as HTMLElement).querySelector('video');
                video && video.play();
            });

            el.addEventListener('mouseleave', (e: MouseEvent) => {
                let video = (e.currentTarget as HTMLElement).querySelector('video');
                video && video.pause();
            });
        }
    },
};
