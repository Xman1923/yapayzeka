<template>
  <div>
    <Header />
    <main class="main-content">
      <nuxt />
    </main>
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
/* Global styles can be placed here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
</style>
