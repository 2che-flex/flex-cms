import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import store from '../store/'

Vue.use(VueRouter)

// const ifAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return ''
//   } else {
//     if (from) {
//     }
//     next('/login')
//   }
// }
// const ifAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated && to.name !== 'Login') {
//     next('/login'); return ''
//   } else {
//     next()
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: ifAuthenticated
    children: [
      {
        path: '/',
        name: 'Popular Work',
        component: () => import('../views/main/PopularWorks/PopularWork.vue')
      },
      {
        path: '/banner',
        name: 'Banner',
        component: () => import('../views/main/HeroSection/HeroSection.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/main/Category/DataCategory.vue')
      },
      {
        path: '/story',
        name: 'Story',
        component: () => import('../views/main/Story/Story.vue')
      },
      {
        path: '/service',
        name: 'Service',
        component: () => import('../views/main/Service/Service.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/main/Contact/Contact.vue')
      },
      {
        path: '/navbar',
        name: 'Navbar',
        component: () => import('../views/main/Navbar/Navbar.vue')
      },
      {
        path: '/footer',
        name: 'Footer',
        component: () => import('../views/main/Footer/Footer.vue')
      },
      {
        path: '/inputCategory',
        name: 'Input Category',
        component: () => import('../views/main/Category/InputCategory.vue')
      },
      {
        path: '/inputPopularWork',
        name: 'Input Item Popular Work',
        component: () => import('../views/main/PopularWorks/FormPopularWork.vue')
      },
      {
        path: '/inputStory',
        name: 'Input Story',
        component: () => import('../views/main/Story/FormStory.vue')
      },
      {
        path: '/inputContact',
        name: 'Input Contact',
        component: () => import('../views/main/Contact/FormContact.vue')
      },

      {
        path: '/inputNavbar',
        name: 'Input Navbar',
        component: () => import('../views/main/Navbar/InputNavbar.vue')
      },
      {
        path: '/inputFooter',
        name: 'Input Footer',
        component: () => import('../views/main/Footer/InputFooter.vue')
      },
      {
        path: '/inputHeroSection',
        name: 'Input Hero Section',
        component: () => import('../views/main/HeroSection/FormHeroSection.vue')
      },
      {
        path: '/PopuaraWorkEdit/:id',
        name: 'Edit Item Popular Work',
        component: () => import('../views/main/PopularWorks/FormPopularWork.vue')
      },
      {
        path: '/HeroSectionEdit/:id',
        name: 'Edit Item Hero Section',
        component: () => import('../views/main/HeroSection/FormHeroSection.vue')
      },
      {
        path: '/CategoryEdit/:id',
        name: 'Edit Item On Category Work',
        component: () => import('../views/main/Category/InputCategory.vue')
      },
      {
        path: '/ContactEdit/:id',
        name: 'Edit Item Contact',
        component: () => import('../views/main/Contact/FormContact.vue')
      },
      {
        path: '/StoryEdit/:id',
        name: 'Edit Item Story',
        component: () => import('../views/main/Story/FormStory.vue')
      },
      {
        path: '/ServiceEdit/:id',
        name: 'Edit Item Service',
        component: () => import('../views/main/Service/FormService.vue')
      },
      {
        path: '/NavbarEdit/:id',
        name: 'Edit Item Navbar',
        component: () => import('../views/main/Navbar/InputNavbar.vue')
      },
      {
        path: '/FooterEdit/:id',
        name: 'Edit Item Footer',
        component: () => import('../views/main/Footer/InputFooter.vue')
      },
      {
        path: '/UserEdit',
        name: 'Edit Account Admin',
        component: () => import('../views/main/User/FormUser.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    // beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticate = localStorage.access_token
  // store.commit('changePageTitle', to.name)
  if (to.name !== 'Login' && !isAuthenticate) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthenticate) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
