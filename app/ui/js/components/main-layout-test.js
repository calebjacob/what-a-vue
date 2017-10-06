const injector = require('!!vue-loader?inject!components/main-layout.vue');
const mainLayout = injector({});



function createWrapper(options) {
  options = options || {};

  return avoriaz.mount(mainLayout, {});
}



describe('component - mainLayout', function() {
  let wrapper;

  beforeEach(function() {
    wrapper = createWrapper();
  });

  it('defaults data values', function() {
    expect(wrapper.vm.count).to.equal(0);
  });



  describe('methods.doThing()', function() {
    it('increases count by 1', function() {
      wrapper.vm.count = 0;

      wrapper.vm.doThing();
      expect(wrapper.vm.count).to.equal(1);

      wrapper.vm.doThing();
      expect(wrapper.vm.count).to.equal(2);
    });
  });
});
