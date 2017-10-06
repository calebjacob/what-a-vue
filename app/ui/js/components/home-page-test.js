const injector = require('!!vue-loader?inject!components/home-page.vue');
const homePage = injector({});



function createWrapper(options) {
  options = options || {};

  return avoriaz.mount(homePage, {});
}



describe('component - homePage', function() {
  let wrapper;

  beforeEach(function() {
    wrapper = createWrapper();
  });

  it('renders a view', function() {
    expect(wrapper.vm.$el).to.be.defined;
  });
});
