<template>
    <div id="jsonBox" ref="myDiv"></div>
</template>

<script>
import JSONFormatter from 'json-formatter-js'
export default {
     props: ['header','code'],
     mounted () {
      const formatter = new JSONFormatter(this.code,2,{animateOpen: false, animateClose: false,theme:'dark'});
      this.$refs.myDiv.appendChild(formatter.render());  
    }
}
</script>
<style>
  #jsonBox {
    margin: 10px;
    padding: 10px;
    background-color:rgb(56, 56, 56);
    border-radius: 3px;
  }
</style>
