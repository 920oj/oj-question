<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from '~/components/layouts/header.vue'
import Footer from '~/components/layouts/footer.vue'

export default {
  components: {
    Header,
    Footer,

  }
}

</script>

<style>
* {
  font-family: 'Roboto', 'Noto Sans JP';
}

body {
  color: #282828;
  background: #F9F9F9;
}

a {
  text-decoration: none;
}
</style>
