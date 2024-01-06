<script lang="ts">
import UpperIcon from '@/assets/thirdSection/upperIcon.svg';
import CustomCard from '@/components/component/CardCustom.vue';
import QuestionIcon from '@/assets/thirdSection/question.svg';

export default {
    data() {
        return {
            upperIcon: UpperIcon,
            questionIcon: QuestionIcon,
        };
    },
    components: {
        CustomCard,
    },
}
</script>
<template>
    <div class="flex flex-col justify-center items-center bg-white gap-5 py-14 ">
        <img :src="upperIcon" alt="Upper Icon" />
        <p class="font-[500] text-[48px] ">Les avis de nos clients</p>

        <!-- Card Custom -->
        <div class="flex flex-row gap-2 mt-10" >
            <CustomCard :star="3">
                <template #content>
                    "Une expérience parfaite pour obtenir ma déclaration de cession! Le processus a été rapide et efficace. J'ai été guidé à chaque étape, et le service client était exceptionnel. Je recommande vivement cette démarche à tous ceux qui recherchent une solution sans tracas."
                </template>
                <template #img>
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </template>
                <template #detailConsument>
                    <p class="font-[700] text-[25px]">ELISA L.</p>
                    <p class="font-[500] text-[18px] text-primaryColors">Cliente du 3 janvier 2022</p>
                </template>
            </CustomCard>
            <CustomCard :star="3">
                <template #content>
                    "Une expérience parfaite pour obtenir ma déclaration de cession! Le processus a été rapide et efficace. J'ai été guidé à chaque étape, et le service client était exceptionnel. Je recommande vivement cette démarche à tous ceux qui recherchent une solution sans tracas."
                </template>
                <template #img>
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </template>
                <template #detailConsument>
                    <p class="font-[700] text-[25px]">Gabriel B.</p>
                    <p class="font-[500] text-[18px] text-primaryColors">Cliente du 3 janvier 2022</p>
                </template>
            </CustomCard>
            <CustomCard :star="3">
                <template #content>
                    "Une expérience parfaite pour obtenir ma déclaration de cession! Le processus a été rapide et efficace. J'ai été guidé à chaque étape, et le service client était exceptionnel. Je recommande vivement cette démarche à tous ceux qui recherchent une solution sans tracas."
                </template>
                <template #img>
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </template>
                <template #detailConsument>
                    <p class="font-[700] text-[25px]">Hector E.</p>
                    <p class="font-[500] text-[18px] text-primaryColors">Cliente du 3 janvier 2022</p>
                </template>
            </CustomCard>
        </div>

        <!-- Card Bottom -->
        <div class="flex w-full justify-center items-center mt-36">
            <div class="flex flex-row justify-center items-center w-9/12  bg-hero bg-no-repeat bg-cover rounded-xl relative py-5 px-5" style="background-image: url('https://source.unsplash.com/featured/300x201');">
                <div class="absolute inset-0 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 rounded-xl"></div>
                <img :src="questionIcon" alt="Question Icon"  class="z-10"/>
                <div class="flex flex-col justify-start items-start relative z-10">
                    <p class="font-[700] text-[25px] text-white">Modernisation et simplification des démarches cession de véhicules :</p>
                    <p class="font-[500] text-[18px] text-white pt-2">Les services de l'Etat se modernisent. </p>
                    <p class="font-[500] text-[18px] text-white">Votre démarche de déclaration de cession se fait désormais en ligne. </p>
                </div>
            </div>
        </div>
    </div>
</template>