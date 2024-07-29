// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/views/LandingPage.vue';
import PageNotFound from '@/components/PageNotFound.vue'
import AboutPage from '@/components/views/AboutPage.vue';
import ProjectView from '@/components/views/ProjectView.vue';
import SkillsPage from '@/components/views/SkillsPage.vue';
const routes = [
  { path: '/', component: LandingPage },
  { path: '/about', component: AboutPage },
  { path: "/projects", component: ProjectView },
  { path: "/skills", component: SkillsPage },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
