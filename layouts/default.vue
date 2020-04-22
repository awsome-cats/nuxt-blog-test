<template>
  <div>
    <TheHeader />
    <TheSideNav />
    <TheSideNavToggle />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
import TheSideNav from '~/components/Navigation/TheSideNav'
import TheSideNavToggle from '~/components/Navigation/TheSideNavToggle'
export default {

  components: {
    TheHeader,
    TheSideNav,
    TheSideNavToggle
  }

}
</script>

<style>
html {
  font-family: 'open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
