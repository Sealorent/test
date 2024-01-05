<script lang="ts">
import InformationSvg from '@/assets/header/informations.svg';
import RetourSvg from '@/assets/header/retour.svg';
import BleuSvg from '@/assets/header/info-bleu.svg';

export default {
  data() {
    return {
        informationSvg: InformationSvg,
        retourSvg: RetourSvg,
        bleuSvg: BleuSvg,
    };
  },
};

</script>


<template>
    <header class="bg-white w-full h-32 flex justify-center items-center shadow-md px-10" >
        <div class="flex justify-between items-center w-full h-20 ">
            <div class="flex justify-start flex-col">
                <h1 class="text-[25px] font-medium text-primaryColors">ENREGISTREMENT EN LIGNE</h1>
                <h1 class="text-[25px] font-extrabold text-primaryColors">CESSION DE VOTRE VÉHICULE</h1>
            </div>
            <div class="flex justify-start items-center flex-row  relative  h-full">
                <div class="absolute top-0 left-0 ">
                  <img :src="bleuSvg" alt="Bleu Icon" />
                </div>
                <div class="w-6">
                </div>
                <div class="justify-center items-center text-center px-2" >
                    <h1 class="text-[18px] font-medium">Agréé & Habilité <span class="font-bold text-primaryColors">Ministère de l'Intérieur</span></h1>
                    <h1 class="text-[18px] font-medium">Agrément Préfecture <span class="font-bold text-primaryColors">N°59783</span></h1>
                </div>
                <!-- <p class="text-center w-30">Agréé & Habilité Ministère de l'Intérieur Agrément Préfecture n°59783</p> -->
                <img :src="informationSvg" alt="Information Icon" />
                <img :src="retourSvg" alt="Rotour Icon" />
            </div>
        </div>
    </header>
</template>