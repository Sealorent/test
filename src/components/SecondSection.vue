<script lang="ts">
import HeaderIcon from '@/assets/secondSection/headerIcon.svg';
import Accordion from '@/components/component/Accordion.vue';
import ImageBottom from '@/assets/secondSection/imageBottom.svg';

export default {
    data() {
        return {
            headerIcon : HeaderIcon,
            imageBottom : ImageBottom,
        };
    },
    components: {
        Accordion,
    },
    
}
</script>
<template>
    <div class="flex flex-col items-center justify-center py-20">
        <div class="flex justify-center items-center flex-col mb-5">
            <img :src="headerIcon" alt="Header Icon" />
            <p class="font-[600] text-[48px] w-[60%] text-center">Nos <span class="text-primaryColors">équipes</span> répondent à vos questions</p>
        </div>
        <div class="items-center justify-center w-[80%]">
            <!-- Accordion -->
            <div class="flex flex-col gap-2 ">
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">Quand <span class="text-primaryColors">enregistrer</span> la cession de mon véhicule ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">De quelle <span class="text-primaryColors">manière</span> vais-je recevoir mon <span class="text-primaryColors">accusé</span> d’enregistrement de cession ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">Pourquoi <span class="text-primaryColors">enregistrer</span> la cession de mon véhicule ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">Combien de temps la <span class="text-primaryColors">démarche</span>prend ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">Le paiement est-il <span class="text-primaryColors">sécurisé</span> ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>
                <Accordion>
                    <template #title>
                        <p class="text-[20px] font-[600]">Puis-je vous <span class="text-primaryColors">confier</span> mes démarches ?</p>
                    </template>
                    <template #content>
                        <ul class="list-disc flex flex-col gap-2">
                           <li class="font-[400] text-[20px]">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px]">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px]">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px]">Votre responsabilité est déchargée</li>
                        </ul>
                    </template>
                </Accordion>

               
            </div>
        </div>
        <div class="flex items-center justify-center flex-col">
            <img :src="imageBottom" alt="Image Bottom" >
        </div>
        <div class="flex items-center justify-center  text-center flex-col">
            <p>Numéro surtaxé pour un premier contact </p>
            <p> un numéro gratuit vous sera communiqué après commande</p>
        </div>
    </div>
</template>