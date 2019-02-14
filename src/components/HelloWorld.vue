<template>
  <div class="hello">
    <ion-label>Label</ion-label>

    <!-- Label Colors -->
    <ion-label color="primary">Primary Label</ion-label>

    <ion-input clearInput value="clear me"></ion-input>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
