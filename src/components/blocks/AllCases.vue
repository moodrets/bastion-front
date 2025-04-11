<template>
    <section class="all-cases">
        <div class="centered flex flex-col">
            <div class="all-cases__button px-3 py-5 overflow-hidden order-1">
                <a href="#" class="w-full button button--responsive">
                    <span class="bracket-text">Смотреть все кейсы</span>
                </a>
            </div>
            <div class="p-4" v-angle-box>
                <div class="all-cases__header block-title pointer-events-none flex items-center justify-between mb-14">
                    <a href="#" class="decor-link pointer-events-auto">Все кейсы</a>
                    <span>2024</span>
                </div>
                <div class="all-cases__list">
                    <div v-for="(item, itemIndex) in items" :key="itemIndex" class="all-cases__item">
                        <div class="all-cases__item-images">
                            <img :src="item.image" :style="{ '--parent-index': itemIndex + 1 }" alt="" />
                            <img
                                v-for="(subItem, subItemIndex) in shuffle([...items]).slice(0, 2)"
                                :key="subItemIndex"
                                :src="subItem.image"
                                :style="{ '--index': subItemIndex + 1, '--parent-index': itemIndex + 1 }"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    items: Record<string, any>[];
}>();

const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
</script>
