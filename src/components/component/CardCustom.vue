<script lang="ts">
import CitationIcon from '@/assets/thirdSection/citation.svg';
import StarIcon from '@/assets/thirdSection/star.svg';
export default {
    name: 'CustomCard',
    data() {
        return {
            citationIcon: CitationIcon,
            starIcon: StarIcon,
        }
    },
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        star : {
            type: Number,
            default: 5,
        },
    },

}
</script>
<template>
    <div class="flex flex-col w-11/12 px-10 ">
        <div class="relative h-full py-5 rounded-lg  bg-white shadow-xl">
            <div class="flex flex-col px-10  ">
                <div class="flex flex-row justify-between items-center ">
                    <img :src="citationIcon" alt="Citation Icon" >
                    <div class="flex flex-row">
                        <img :src="starIcon" v-for="item in star" alt="Star Icon" >
                    </div>
                </div>
                <p class="text-justify break-all">
                    <slot name="content"></slot>
                </p>
            </div>
            <div class="absolute -bottom-4 w-0 h-0 border-[40px] border-t-[20px] border-b-[16px] border-transparent border-l-white border-r-0 rounded-md"></div>
        </div>
        <div class="flex flex-row items-center gap-4">
            <div class="avatar ml-5 mt-5">
                <div class="w-20 rounded-full">
                    <slot name="img"></slot>
                </div>
            </div>
            <div class="flex flex-col justify-start items-start mt-5">
                <slot name="detailConsument"></slot>
            </div>
        </div>
    </div>
</template>

