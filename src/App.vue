<script setup>
    import getPicture from './composables/utilsApp.js'
    getPicture();
</script>

<template>
    <header class="bg-white h-[80px] grid grid-cols-12 align-middle items-center">
        <div class="text-black flex justify-center gap-8 col-start-3 font-playfair text-lg">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/nouveautes">Nouveautés</RouterLink>
            <RouterLink to="/boutique">Boutique</RouterLink>
        </div>

        <div class="flex justify-center col-span-6">
            <RouterLink class="font-playfair text-3xl" to="/">TAVUE</RouterLink>
        </div>

        <div class="flex gap-6 col-start-11">
            <RouterLink class="w-8" to="/panier">
                <img src="/images/SHOPPING.svg" alt="Icon panier">
            </RouterLink>
            <RouterLink class="w-8" to="/compte">
                <img class="rounded-full" id="userAvatar" src="/images/ACCOUNT.svg" alt="Icon compte utilisateur">
            </RouterLink>
        </div>
    </header>

    <RouterView />

    <footer class="h-[320px] bg-black">

    </footer>
</template>

<style scoped>
</style>