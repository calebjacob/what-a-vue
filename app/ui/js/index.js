try {
  // libraries:

  const VeeValidate = require('vee-validate');
  const Vue = require('vue');
  const VueRouter = require('vue-router');



  // services:

  const loggerService = require('services/logger');



  // helpers:

  // ...



  // mixins:

  // ...



  // directives:

  // ...



  // components:

  const homePage = require('components/home-page.vue');
  const mainLayout = require('components/main-layout.vue');



  // initialize directives:

  // ...



  // initialize shared components:

  Vue.component('mainLayout', mainLayout);



  // use libraries:

  Vue.use(VueRouter);
  Vue.use(VeeValidate, {
    enableAutoClasses: true
  });



  // set up router:

  const routes = [
    {
      path: '/home',
      name: 'home',
      component: homePage
    }
  ];

  const router = new VueRouter({
    mode: 'history',
    routes: routes
  });



  // initialize primary Vue instance:

  const vm = new Vue({
    el: '#app',
    router: router
  });



  // export the app for testing:

  module.exports = vm;
}



catch (error) {
  loggerService.error(error);
}
