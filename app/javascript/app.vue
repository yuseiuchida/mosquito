<template>
  <div class="d-flex flex-column min-vh-100">
    <TheHeader class="mb-auto" />
    <router-view />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
  import TheFooter from "components/TheFooter";
  import TheHeader from "components/TheHeader";
  export default {
    components: { TheFooter, TheHeader, }
  }
</script>