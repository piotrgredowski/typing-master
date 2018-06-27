<template>
  <div id="app" class="container section">
    <Header />
    <Typer />
  </div>
</template>

<script>
import Header from './components/Header';
import Typer from './components/Typer';
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

export default {
  name: "app",
  components: {
    Header,
    Typer,
  },
};
</script>

<style lang="scss" scoped>
</style>
