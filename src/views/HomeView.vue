<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FirstSection from '@/components/FirstSection.vue';
import SecondSection from '@/components/SecondSection.vue';
import ThirdSection from '@/components/ThirdSection.vue';
</script>

<template>
  <main class="bg-bgColors">
    <HeaderComponent />
    <FirstSection  class="px-10"/>
    <SecondSection class=" pt-10"/>
    <ThirdSection class="pt-10"/>
    <!-- footer -->
    <div class="flex flex-col justify-center items-center  py-10 ">
      <i class="text-center xl:max-w-[70%] lg:max-w-[70%]">Service opéré par declaration-cession-vehicule.fr Tous droits réservés, 2006 - 2023 declaration-cession-vehicule.fr -      <span class="text-primaryColors">0890 16 60 10 (0,80€/min) </span>
        <span class="text-primaryColors">declaration-cession-vehicule.fr</span> - 12-14, rue lazare hoche cs 60058 92774 boulogne-billancourt cedex 
      </i>
      <!-- <i></i> -->
    </div>
  </main>
  
</template>
