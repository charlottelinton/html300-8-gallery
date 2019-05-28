<template lang="html">
  <div class="flex-container">
      <div v-for="image in images" >
        <img v-bind:src="image" v-bind:alt="imagesAlt" class="img-thumbnail" data-toggle="tooltip" v-bind:title="imagesTitle">
        <div class="caption">
          <h3 v-bind:imagesTitle="imagesTitle">{{ imagesTitle }}</h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['images', 'imagesAlt', 'imagesTitle'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  /* width: 100%; */
}

.flex-container div {
  padding: 0.5rem;
  width: 33%;
  font-size: 0.75rem;
  min-width: 200px;
}
</style>
