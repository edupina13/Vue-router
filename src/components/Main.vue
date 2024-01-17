//Crear rapido "vue"
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
     <p>Main</p>
  </div>
</template>

<script>
export default {
data(){
    return{
        items:[
            {
                text:"Inicio",
                href: "#",
                to:"Inicio"
            },
            {
                text:"Siguiente2",
                href: "#",
            }
        ]
    }
}
}
</script>

<style>

</style>