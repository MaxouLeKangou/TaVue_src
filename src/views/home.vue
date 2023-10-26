<script setup>
    import getPicture from '../composables/utilsApp.js'
    getPicture();
</script>

<template>
    <main class="font-poppins h-screen flex items-center">
        <div class="relative grid grid-cols-12">
            <div class="text-black grid col-start-2 col-span-5 gap-6">
                <h2 class="font-playfair text-6xl">CRÉER VOTRE PROPRE DESIGN</h2>
                <div class="text-lg flex flex-col gap-4 font-light">
                    <p>Créez votre propre style en quelques clics : choisissez vos verres, la monture et les branches. Une paire unique pour des moments inoubliables.</p>
                    <p>Obtenez <span class="font-bold">10%</span> de remise sur votre premier achat !</p>
                </div>
                <div class="absolute bottom-[-30px] mt-8 font-medium flex flex-col gap-1">
                    <RouterLink to="/configuration">Configurer une paire</RouterLink>
                    <span class="w-full h-[1px] bg-black rounded-full"></span>
                </div>
            </div>
            <div class="col-span-5 col-end-12 flex flex-col gap-12">
                <div class="flex justify-end"><button class="py-2 px-6 bg-black text-white rounded-lg">-50% jusqu'à demain</button></div>
                <img src="/images/lunettes.svg" alt="">
            </div>
        </div>
    </main>
</template>