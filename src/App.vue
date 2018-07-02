<template>
  <div id="app" class="container__main container">
    <Header />
    <Typer />
    <Footer />
  </div>
</template>

<script>
import Buefy from 'buefy';
import 'buefy/lib/buefy.css'

import Header from './components/Header';
import Typer from './components/Typer';
import Footer from './components/Footer';

export default {
  name: "app",
  components: {
    Header,
    Typer,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.conatiner__main {
  margin: 0;
  padding: 0;
}
</style>
