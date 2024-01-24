<script setup> 
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';
    import PocketBase from 'pocketbase'
    const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

    onMounted(()=>{
        console.log(import.meta.env.VITE_URL_POCKETBASE)
    });

    const router = useRouter()
    
    let user = ref('')
    let psw = ref('')

    const connect = async () =>{
        try {
            await pb.collection('users').authWithPassword(user.value, psw.value)
            router.push({name:"home"})
        } catch(error) {
            alert("Erreur d'identification : mauvais login et/ou mot de passe")
            user.value = ""
            psw.value = ""
        }
    }

    const Github = async () => {
        await pb.collection("users").authWithOAuth2({ provider: "github" });
    }

    const register = async () => {
        try {
            await pb.collection("users").create({
                email: user.value, 
                password: psw.value,
                passwordConfirm: psw.value,
                name: "Test User"
            });
            router.push({name:"home"})
        } catch(error) {
            user.value = ""
            psw.value = ""
        }
    }

    const deconnect = ()=>{
        pb.authStore.clear()
        setTimeout(() => {
            router.push({ name: "home" });
        }, 100);
    }


</script>


<template>
    <form v-if="pb.authStore.isValid" class="flex flex-col gap-8 h-screen items-center justify-center">
        <button class="py-4 px-8 bg-black text-white" type="submit" @click="deconnect">Se Deconnecter</button>
    </form>
    <div v-else class="flex flex-col gap-8 h-screen items-center justify-center">
        <input id="email" class="py-2 px-4 rounded-sm bg-slate-100" type="mail" placeholder="email" v-model="user">
        <input id="psw" class="py-2 px-4 rounded-sm bg-slate-100" type="password" placeholder="mot de passe" v-model="psw">
        <button class="py-4 px-8 bg-black text-white" type="submit" @click.prevent="connect">Se Connecter</button>
        <button class="py-2 px-10 bg-white border-black border-2" v-on:click="Github()">GITHUB</button>
        <a class="text-gray" @click="register">créer mon compte</a>
    </div>
</template>