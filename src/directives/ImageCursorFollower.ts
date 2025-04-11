import { DirectiveBinding } from 'vue';

let follower: HTMLElement | null = null;

let hideTimeout: ReturnType<typeof setTimeout> | null = null;

function addImageCursorFollower() {
    follower = document.createElement('div');
    follower.classList.add('image-cursor-follower');
    document.body.appendChild(follower);
}

addImageCursorFollower();

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        el.addEventListener('mouseenter', (event: MouseEvent) => {
            hideTimeout && clearTimeout(hideTimeout);
            if (follower) {
                follower.classList.add('is-visible');
                follower.classList.add(binding.value.followerClass);
                follower.innerHTML = `<img src="${binding.value.image}" />`;
            }
        });

        el.addEventListener('mousemove', (event: MouseEvent) => {
            if (!follower) return;

            hideTimeout && clearTimeout(hideTimeout);

            let rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
            let followerWidth = follower.offsetWidth;
            let maxLeft = window.innerWidth - followerWidth - 20;
            let left = Math.max(0, Math.min(event.clientX, maxLeft));
            let top = rect.top + window.scrollY + rect.height / 2 - follower.offsetHeight / 2;

            follower.style.setProperty('--left', `${left}px`);
            follower.style.setProperty('--top', `${top}px`);
        });

        el.addEventListener('mouseleave', (event: MouseEvent) => {
            if (follower) {
                hideTimeout = setTimeout(() => {
                    follower && follower.classList.remove('is-visible');
                }, 150);
            }
        });
    },
};
