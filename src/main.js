import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
// import NProgress from 'nprogress';
import VueCookie from 'vue-cookie';


import App from './App.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueCookie);


Vue.config.productionTip = false; 

const routes = [
  { 
    name: 'Profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      // NProgress.start()
  }
  next()
});
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })
router.afterEach(() => {
  // NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')