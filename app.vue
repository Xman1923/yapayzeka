
<template>
  <div>
    <Header />
    <div class="container">
      <NuxtWelcome />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* İsteğe bağlı stiller */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
</style>


