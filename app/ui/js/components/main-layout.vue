<template>
  <div class="container">
    <h1>What a Vue!</h1>

    <p>
      <button type="button" @click="doThing">Do a Thing</button>
    </p>

    <p>Times the thing was done: {{count}}</p>

    <hr>

    <slot></slot>
  </div>
</template>



<script>
  module.exports = {
    data: function() {
      return {
        count: 0
      }
    },

    methods: {
      doThing: function() {
        this.count++;
      }
    }
  };
</script>
