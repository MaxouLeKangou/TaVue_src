import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import compte from '../views/compte.vue'
import configuration from '../views/configuration.vue'
import boutique from '../views/boutique.vue'
import panier from '../views/panier.vue'
import nouveautes from '../views/nouveautes.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
const pb = new PocketBase("http://127.0.0.1:8090/");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/compte', name: 'compte', component: compte },
    { path: '/configuration', name: 'configuration', component: configuration },
    { path: '/boutique', name: 'boutique', component: boutique },
    { path: '/panier', name: 'panier', component: panier },
    { path: '/nouveautes', name: 'nouveautes', component: nouveautes },
  ]
})


router.beforeEach( (to, from, next) =>{
  if (to.name == "home" || to.name == "compte") {
    next();
  } else {
    if (pb.authStore.model != null) {
      next();
    } else {
      router.push({ name: "compte" });
    }
  }
});

export default router
