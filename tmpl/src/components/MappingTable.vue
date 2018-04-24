<template>
<div class="mapping-table">
<b-card header="Mappings" header-tag="header">
  <b-table :items="items" :small=true :outlined=true :fields="fields">
      <template slot="actions" slot-scope="row">
        <div>
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <b-button size="sm" @click.stop="viewMapping(row.item, row.index, $event.target)" class="mr-1">
            V
          </b-button>
          <b-button size="sm" @click.stop="modifyMapping(row.item, row.index, $event.target)" class="mr-1">
            M
          </b-button>
          <b-button size="sm" @click.stop="deleteMapping(row.item, row.index, $event.target)" class="mr-1">
            D
          </b-button>
        </div>
      </template>
  </b-table>
</b-card>
    <b-modal id="modalInfo" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
    <b-modal id="modalEdit" :title="modalInfo.title">
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
    <b-modal id="modalConfirmDelete" :title="modalInfo.title">
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
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

export default {
  data() {
    return {
      fields: [
        { key: "uri", label: "Uri", sortable: true ,'class': 'bold-row' },
        { key: "description", label: "Description"},
        { key: "method", label: "Method", sortable: true },
        { key: "path", label: "Path", 'class': 'path-row', sortable: true },
        { key: "result", label: "Result", sortable: true },
        { key: "actions", label: "Actions" }
      ],
      items: [
      ],
      modalInfo: { title: '', content: '' },
      resetModal: true,
    };
  },
  methods: {
    modifyMapping (item, index, button) {
      this.modalInfo.title = item.uri
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    deleteMapping (item, index, button) {
      this.modalInfo.title = item.uri
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    viewMapping (item, index, button) {
      this.modalInfo.title = item.uri
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    clean: function() {
      this.$data.items =[] ;
    },
    addMapping: function(data) {
      var r = {
        uri: data.URI,  
        description: data.description, 
        method: data.request.method, 
        path: data.request.path,
        result: data.response.statusCode,
        _cellVariants: { method: getColorByMethod( data.request.method), result:getColorByStatus(data.response.statusCode) }

      };
      this.$data.items.push(r);
    },
    setMappings: function(data) {
      console.log(data);
      data.forEach(item => {
        this.addMapping(item)
      });

    }
  }
};
</script>
<style>
    .mapping-table {
        margin-top: 30px;
    }
    .path-row { 
      width: 50%; 
    }
    .bold-row { 
      font-weight: bold;
    }
</style>