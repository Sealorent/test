<script lang="ts">

import VerifyIcon from '@/assets/secondSection/verifyIcon.svg';
import ChevronUpIcon from '@/components/icons/IconChevronUp.vue';
import ChevronDownIcon from '@/components/icons/IconChevronDown.vue';

export default{
    name   : 'Accordion',
    data() {
        return {
            isOpen: false,
            verifyIcon: VerifyIcon,
        }
    },
    components: {
        ChevronUpIcon,
        ChevronDownIcon,
    },
    props  : {
        title: {
            type: String,
            default: 'Title',
        },
    },
}
</script>

<template>
    <div>
        <div  class="bg-gray-50 flex flex-row justify-between px-5 py-2">
            <div class="flex flex-row items-center gap-2">
                <img :src="verifyIcon" alt="Verify Icon" />
                <slot name="title">
                    {{ title }}
                </slot>
            </div>
            <div v-on:click="isOpen = !isOpen" class=" flex flex-row items-center gap-2 cursor-pointer" >
                <ChevronUpIcon v-if="isOpen" />
                <ChevronDownIcon v-else />
            </div>
        </div>
        <div :class="isOpen ? 'd-block' : 'hidden'">
            <div class="px-20 bg-gray-100 py-2">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
