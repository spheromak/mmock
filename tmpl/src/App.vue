<template>
    <div>
    <navbar></navbar>
    <router-view></router-view>
    <!-- Modal Component -->
    <b-modal id="modal-about" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  background: #ddd;
  padding-top: 70px;
}
</style>
