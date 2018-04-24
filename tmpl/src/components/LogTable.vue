<template>
<div class="log-table">
<b-card header="Logs" header-tag="header">
  <b-table :items="items" :small=true :outlined=true :fields="fields">
    <template slot="show_details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : '...'}}
      </b-button>

    </template>
    <template slot="row-details" slot-scope="row">
      <b-tabs>
        <b-tab title="Request" active>
          <json-tree :code=row.item.request></json-tree>        
        </b-tab>
        <b-tab title="Response">
          <json-tree :code=row.item.response></json-tree>          
        </b-tab>
        <b-tab title="Result">
          <json-tree :code=row.item.result></json-tree>
        </b-tab>
      </b-tabs>
    </template>
  </b-table>
</b-card>
</div>
</template>

<script>

function getColorByMethod(method) {
      if (method === 'GET') {
          return "info";
      } else if (method === 'POST') {
          return "success";
      } else if (method === 'PUT') {
          return "success";
      } else if (method === 'DELETE') {
          return "danger";
      } else {
          return "warning";
      }
}

function getColorByStatus(statusCode) {
    if (statusCode === 200 || statusCode === 201) {
        return "success";
    } else if (statusCode === 404) {
        return "danger";
    } else {
        return "warning";
    }
}

function dateFormat(date) {
      //format date
      var d = new Date();
      d.setTime(date*1000);
      return d.toLocaleString();
}

export default {
  data () {
    return {
      fields: [ 
        {
          key: 'time',
          sortable: true,
        },
        {
          key: 'status',
          sortable: true,
          'class': 'bold-row' 
        },
        {
          key: 'method',
          sortable: true,
        },
        {
          key: 'path',
          sortable: true,
          'class': 'path-row',
        },
         {
          key: 'show_details',
          label: 'Details'
        },
        
      ],
      items: [
      ]
    }
  },
  methods: {
    clean: function() {
      this.$data.items =[] ;
    },
    addRequest: function(data) {
      var r = {
        time: dateFormat(data.time), 
        status: data.response.statusCode, 
        method: data.request.method, 
        path: data.request.path,
        request: data.request,
        response: data.response,
        result: data.result,
        _rowVariant: getColorByStatus(data.response.statusCode)
      };
      this.$data.items.unshift(r);
    },
    setRequests: function(data) {
      console.log(data);
      data.forEach(item => {
        this.addRequest(item)
      });

    }
  }
}
</script>

<style>
    .log-table {
        margin-top: 30px;
    }
    .path-row { 
      width: 50%; 
    }
    .bold-row { 
      font-weight: bold;
    }
</style>
