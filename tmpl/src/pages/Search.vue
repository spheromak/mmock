<template>
      <b-container fluid>
        <h1 id="jumbotron" tabindex="-1">Search requests</h1>
      <b-row>
        <b-col>
          <search-request-form v-on:search-result-event="onSearchResultHandler"></search-request-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <log-table ref="table"></log-table>
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
export default {
  mounted() {},
  methods: {
    onSearchResultHandler: function(result) {
      this.$refs.table.clean();
      this.$refs.table.setRequests(result);
    }
  }
};
</script>
