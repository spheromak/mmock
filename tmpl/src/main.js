import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Datetime from 'vue-datetime'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import VueNativeSock from 'vue-native-websocket'
import VueHighlightJS from 'vue-highlightjs'
import JsonEditor from 'vue-json-editor-block-view'

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import App from './App.vue'
import SearchRequestForm from './components/SearchRequestForm.vue'
import NavBar from './components//NavBar.vue'
import LogTable from './components/LogTable.vue'
import MappingTable from './components/MappingTable.vue'
import JsonTreeBox from './components/JsonTree.vue'
import JsonEditorBox from './components/JsonEditor.vue'
import router from './router.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(Datetime);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueHighlightJS);
Vue.use(JsonEditor);

var host = "127.0.0.1:8082"
Vue.http.options.root = 'http://'+host+'/api';
Vue.use(VueNativeSock, 'ws://'+host+'/echo', { 
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
})

Vue.component('search-request-form', SearchRequestForm);
Vue.component('navbar', NavBar);
Vue.component('log-table', LogTable);
Vue.component('mapping-table',MappingTable);
Vue.component('json-tree', JsonTreeBox);
Vue.component('json-editor', JsonEditorBox);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
