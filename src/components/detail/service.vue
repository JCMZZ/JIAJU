<template>
  <div>
      <ClientServe :commodity="comm"/>
      <With/>
  </div>
</template>
<script>
    import ClientServe from './client-serve.vue'
    import With from './with-respect.vue'
    export default{
        name:"service",
        components:{
            With,
            ClientServe
        },
        props:['comm']
    }
</script>
