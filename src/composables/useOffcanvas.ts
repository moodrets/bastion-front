import { computed, ref } from 'vue';
import type { Ref } from 'vue';

class OffcanvasController {
    private state: Ref<Record<string, boolean>> = ref({});

    public visibleAvailable = computed<boolean>(() => {
        return Object.values(this.state.value).includes(true);
    });

    public register(offcanvasName: string) {
        this.state.value[offcanvasName] = false;
    }

    public isOpen(offcanvasName: string) {
        return this.state.value[offcanvasName] === true;
    }

    public toggle(offcanvasName: string) {
        if (this.state.value[offcanvasName] !== undefined) {
            this.state.value[offcanvasName] = !this.state.value[offcanvasName];
            document.body.classList[this.state.value[offcanvasName] === true ? 'add' : 'remove']('is-offcanvas-open');
        }
    }

    public close(offcanvasName?: string) {
        if (offcanvasName && this.state.value[offcanvasName] !== undefined) {
            this.state.value[offcanvasName] = false;
            return;
        }

        for (const state in this.state.value) {
            this.state.value[state] = false;
        }

        document.body.classList.remove('is-offcanvas-open');
    }
}

const offcanvasController = new OffcanvasController();

export { offcanvasController };
