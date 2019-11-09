<template>
  <div class="#app">
    <app-header />
    <app-wrapper />
    <app-footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

export default {
  name: 'App',

  components: {
    appHeader: Header,
    appFooter: Footer,
    appWrapper: Wrapper
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
