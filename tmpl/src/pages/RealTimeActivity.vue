<template>
    <b-container fluid>
      <h1 id="jumbotron" tabindex="-1">Realtime requests</h1>
      <b-row>
        <b-col>
          <log-table ref="table"></log-table>
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
  export default {
    mounted () {
      this.$options.sockets.onmessage = function(message) {
           var data = JSON.parse(message.data);
           this.$refs.table.addRequest(data);
      };
       
    }  
  }
</script>
