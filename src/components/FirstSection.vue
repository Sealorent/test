<script lang="ts">
import firstNumber from '@/assets/firstSection/firstNumber.svg';
import secondNumber from '@/assets/firstSection/secondNumber.svg';
import thirdNumber from '@/assets/firstSection/thirdNumber.svg';
import DashComponent from '@/assets/firstSection/dash.svg';
import VerifyIcon from '@/assets/firstSection/verify.svg';
import VerifyGreenIcon from '@/assets/firstSection/verifyGreen.svg';
import PaymentIcon from '@/assets/firstSection/payment.svg';

export default {
    data() {
        return {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            thirdNumber: thirdNumber,
            dashComponent: DashComponent,
            verifyIcon: VerifyIcon,
            verifyGreenIcon: VerifyGreenIcon,
            paymentIcon: PaymentIcon,
        };
    },

}
</script>

<template>
    <div class="flex justify-between py-10 bg-firstSection">
        <!-- section 1 -->
        <div class="w-1/2">
            <p class="font-semibold text-[45px] mb-3">Bienvenue !</p>
            <p class="font-[700] text-[48px] leading-none"><span class="text-primaryColors">Déclaration de cession</span> auprès de <span class="text-primaryColors">L'ANTS</span></p>

            <div class="flex flex-col mt-10 gap-5 w-11/12">
                <!-- input 1 -->
                <div class="flex flex-col gap-2">
                    <div class="flex justify-start items-center flex-row">
                        <img :src="firstNumber" alt="First Number" />
                        <p class=" text-primaryColors pl-2 text-[20px] font-[600]">Immatriculation</p>
                    </div>
                    <input type="text" class=" px-5 h-10 bg-input-default  placeholder-default focus:text-primaryColors focus:border-primaryColors" placeholder="AA-123-AA">
                </div>
                <!-- input 2 -->
                <div class="flex flex-col gap-2">
                    <div class="flex justify-start items-center flex-row">
                        <img :src="secondNumber" alt="First Number" />
                        <p class=" text-primaryColors pl-2 text-[20px] font-[600] ">Date de la vente</p>
                    </div>
                    <input type="date" class="h-10 bg-input-default  placeholder-default px-5" placeholder="JJ/MM/AAAA">
                </div>
                <!-- input 3-->
                <div class="flex flex-col gap-2">
                    <div class="flex justify-start items-center flex-row">
                        <img :src="thirdNumber" alt="Third Number" />
                        <p class=" text-primaryColors pl-2 text-[20px] font-[600] ">Heure de la vente</p>
                    </div>
                    <input type="time" class="h-10 bg-input-default  placeholder-default px-5" placeholder="JJ/MM/AAAA">
                </div>

                <!-- button -->
                <button class="btn rounded-lg bg-primaryColors w-1/4 py-3 px-3">
                    <p class="font-[600] text-[24px] text-white">Suivant</p>
                </button>

            </div>
        </div>

        <!-- section 2 -->
        <div class=" w-1/2 flex flex-col gap-5">
        
            <!-- Stepper -->
           <div class="flex flex-row justify-center items-center mt-24">
                <div class="rounded-full py-3 px-6 bg-white shadow-lg border-blue-400 border-2 font-lexend font-bold">
                    <p>Etape 1</p>
                </div>
                <div class="flex justify-center items-center ">
                    <img :src="dashComponent" alt="Dash Component" />
                </div>
                <div class="rounded-full py-3 px-6 bg-white shadow-lg font-lexend ">
                    <p>Etape 2</p>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="dashComponent" alt="Dash Component" />
                </div>
                <div class="rounded-full py-3 px-6 bg-white shadow-lg font-lexend ">
                    <p>Etape 3</p>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="dashComponent" alt="Dash Component" />
                </div>
                <div class="rounded-full py-3 px-6 bg-white shadow-lg font-lexend ">
                    <p>Etape 4</p>
                </div>
             
           </div>

           <!-- Card -->
           <div class="w-full flex justify-center items-center flex-col gap-2">
                <!-- Card 1 -->
                <div class="w-9/12 flex flex-col justify-center items-center bg-white shadow-md rounded-2xl lg:px-10 pb-6 ">
                    <div class="flex flex-row gap-5 mb-5 ">
                        <img :src="verifyIcon" alt="Verify Icon">
                        <p class="font-[700] text-[30px] leading-none pt-6">Enregistrement de Cession en ligne</p>
                    </div>
                    <div class=" lg:px-10  w-full">
                        <ul class="list-image-[url(https://files.edgestore.dev/6t0qcdfelivj6fcf/publicFiles/_public/1eef433e-e3f2-4ff5-b1a6-4cb549e0ef5b.svg)]  flex flex-col gap-2">
                           <li class="font-[400] text-[20px] pl-3">Enregistrez la vente immédiatement</li>
                           <li class="font-[400] text-[20px] pl-3">Recevez l'accusé d'enregistrement</li>
                           <li class="font-[400] text-[20px] pl-3">L'acheteur est également informé</li>
                           <li class="font-[400] text-[20px] pl-3">Votre responsabilité est déchargée</li>
                        </ul>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="w-6/12 flex flex-col justify-center items-center bg-green-500 shadow-md rounded-2xl mt-4">
                    <p class="font-[600] text-[25px] leading-none text-white py-2">PAIEMENT Sécurisé</p>
                    <div class="bg-white rounded-b-lg h-20 w-11/12 mb-2 flex flex-row gap-2 ">
                        <img :src="verifyGreenIcon" alt="Verify Green" >
                        <img :src="paymentIcon" alt="Payment Icon" class="lg:max-w-[70%] xl:max-w-[75%]">
                    </div>
                </div>
            </div>

        </div>
        

    </div>
</template>

<style scoped>
.placeholder-default::placeholder {
  color: rgba(0, 0, 0, 0.4)  !important;
}

.bg-input-default {
    background-color: rgba(0, 66, 148, 0.11) !important;
}

.bg-firstSection {
    background-color: #fffcfc;
}

.cardColors {
    background-color: rgba(255, 255, 255, 1);
}
</style>