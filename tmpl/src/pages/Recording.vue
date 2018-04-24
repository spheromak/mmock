<template>
      <b-container fluid>
        <h1 id="jumbotron" tabindex="-1">Recording</h1>
      <b-row>
        <b-col>
          <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template slot="header">
              Bootstrap Vue
            </template>
            <template slot="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </template>
            <hr class="my-4">
            <p>
              It uses utility classes for typography and spacing to space content
              out within the larger container.
            </p>
            <b-btn variant="primary" href="#">Do Something</b-btn>
            <b-btn variant="success" href="#">Do Something Else</b-btn>
          </b-jumbotron>
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
      alert(JSON.stringify(result));
      this.$refs.table.clean();
    }
  }
};
</script>
