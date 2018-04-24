<template>
      <b-container fluid>
      <h1 id="jumbotron" tabindex="-1">Current mapping</h1>
      <b-row>
        <b-col>
          <mapping-table ref="table"></mapping-table>
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
export default {
  mounted() {
    this.$http.get("mapping").then(
        response => {
          if (response.ok) {
            this.$refs.table.clean();
            this.$refs.table.setMappings(response.body);
          } else {
            console.error("Error getting mappings: " + response.statusText);
          }
        },
        error => {
          this.$data.loading = false;
          console.error("Ajax connection error: " + error.statusText);
        }
    )

  },
  methods: {
  }
};
</script>
