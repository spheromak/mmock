<template>
  <div>
      <b-card header="Logs"
                header-tag="header">
        <b-form @submit="onSubmit">
          <b-form-row>
             <b-col>
          <b-form-group id="dateStartInputGroup"
                        label="Start date/time:"
                        label-for="startInput"
            >
            <datetime type="datetime" id="startInput" v-model="form.start"></datetime>
          </b-form-group>
          </b-col>
          <b-col>
          <b-form-group id="dateEndInputGroup"
                        label="End date/time:"
                        label-for="endInput">
          <datetime type="datetime" id="endInput" v-model="form.end"></datetime>

          </b-form-group>
           </b-col>
             <b-col>
            <b-button type="submit" class="mt-4 ml-5" variant="primary">Search</b-button>
          </b-col>
           </b-form-row>
          <b-form-row>
                    <b-col>
          <b-form-group id="statusInputGroup"
                        label="Status Code:"
                        label-for="statusInput">
            <b-form-select id="statusInput"
                          :options="httpCodes"
                          required
                          size="sm"
                          v-model="form.statusCode">
            </b-form-select>
          </b-form-group>
            </b-col>
            <b-col>
          <b-form-group id="methodInputGroup"
                        label="Method:"
                        label-for="methodInput">
            <b-form-select id="methodInput"
                          :options="httpVerbs"
                          required
                          size="sm"
                          v-model="form.method">
            </b-form-select>
          </b-form-group>
            </b-col>
        <b-col>
        </b-col>
        </b-form-row>
        </b-form>
        </b-card>
            <div class="loading" v-if="loading">
      Loading...
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      form: {
        start: null,
        end: null,
        statusCode: "20x",
        method: "GET"
      },
      httpCodes: [
        "20x",
        "30x",
        "40x",
        "50x"
      ],
      httpVerbs: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      loading: false
    };
  },
  methods: {
    onSubmit(evt) {

      evt.preventDefault();
      this.$data.loading = true;
        this.$http.get("http://jsonplaceholder.typicode.com/todos").then(response => {
                this.todos = response.body;
                this.$data.loading = false;
                this.$emit('search-result-event',this.todos);
            }, error => {
              this.$data.loading = false;
                console.error(error);
            });

      
    }
  }
};
</script>