// libraries:

const routerBeforeEach = sinon.stub();
const VeeValidate = 'vee validate';
const Vue = sinon.spy(function Vue() {});
Vue.component = sinon.stub();
Vue.directive = sinon.stub();
Vue.mixin = sinon.stub();
Vue.use = sinon.stub();
const VueRouter = sinon.spy(function VueRouter() {
  return {
    beforeEach: routerBeforeEach
  };
});



// services:

// ...



// helpers:

// ...



// mixins:

// ...



// directives:

// ...



// components:

const homePage = 'homePage {}';
const mainLayout = 'mainLayout {}';



// inject everything:

const injector = require('inject-loader!index');
const index = injector({
  'vue': Vue,
  'vue-router': VueRouter,
  'vee-validate': VeeValidate,

  'components/home-page.vue': homePage,
  'components/main-layout.vue': mainLayout
});



describe('index', function() {
  describe('when all directives are included', function() {
    // ...
  });



  describe('when all shared components are included', function() {
    it('mainLayout is initialized', function() {
      sinon.assert.calledWith(Vue.component, 'mainLayout', mainLayout);
    });
  });



  describe('when global mixins are included', function() {
    // ...
  });



  describe('when VeeValidate is configured', function() {
    it('is used by Vue with configured options', function() {
      sinon.assert.calledWith(Vue.use, VeeValidate, {
        enableAutoClasses: true
      });
    });
  });



  describe('when VueRouter is configured', function() {
    it('is used by Vue', function() {
      sinon.assert.calledWith(Vue.use, VueRouter);
    });

    it('a new router is created', function() {
      sinon.assert.calledWithNew(VueRouter);
    });

    it('the new router is created with options', function() {
      sinon.assert.calledWith(VueRouter, {
        mode: 'history',
        routes: [
          {
            path: '/home',
            name: 'home',
            component: homePage
          }
        ]
      });
    });
  });



  describe('when primary Vue instance is configured', function() {
    it('a new instance is created', function() {
      sinon.assert.calledWithNew(Vue);
    });

    it('the new instance is created with options', function() {
      sinon.assert.calledWith(Vue, {
        el: '#app',
        router: new VueRouter()
      });
    });
  });
});
