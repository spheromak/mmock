<template>
  <div>
      <b-card header="Logs"
                header-tag="header">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
             <b-button type="reset" class="mt-4 ml-5" variant="danger">Reset</b-button>
           </b-col>
           </b-form-row>
          <b-form-row>
                    <b-col>
          <b-form-group id="statusInputGroup"
                        label="Status Code:"
                        label-for="statusInput">
            <b-form-select id="statusInput"
                          :options="httpCodes"
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
                <b-alert variant="warning" show>Loading...</b-alert>
            </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
export default {
  data() {
    return {
      form: {
        start: null,
        end: null,
        statusCode: "",
        method: ""
      },
      httpCodes: [
        { value: "", text: "Any" },
        { value: "1xx", text: "1xx Informational responses" },
        { value: "2xx", text: "2xx Success" },
        { value: "3xx", text: "3xx Redirection" },
        { value: "4xx", text: "4xx Client errors" },
        { value: "5xx", text: "5xx Server errors" }
      ],
      httpVerbs: [{ value: "", text: "Any" }, "GET", "POST", "PUT", "PATCH", "DELETE"],
      loading: false,
      error: false,
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      this.$data.form.start= null;
      this.$data.form.end= null;
      this.$data.form.statusCode="";
      this.$data.form.method= "";
      
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$data.loading = true;

      var options = {
        params: {
          start: this.$data.form.start
            ? Math.round(DateTime.fromISO(this.$data.form.start).valueOf() / 1000)
            : this.$data.form.start,
          end: this.$data.form.end
            ? Math.round(DateTime.fromISO(this.$data.form.end).valueOf() / 1000)
            : this.$data.form.end,
          statusCode: this.$data.form.statusCode,
          method: this.$data.form.method
        }
      };

      this.$http.get("request/find",options).then(
        response => {
          this.$data.loading = false;
          if (response.ok) {
            this.$emit("search-result-event", response.body);
          } else {
            console.error("Error getting requests: " + response.statusText);
          }
        },
        error => {
          this.$data.loading = false;
          console.error("Ajax connection error: " + error.statusText);
        }
      );
    }
  }
};
</script>