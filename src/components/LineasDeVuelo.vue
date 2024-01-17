<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Lineas de Vuelo</p>
    </div>
    
</template>
   
<script>
export default {
    data() {
        return {
            items: [
            {
            text: "Vuelos Disponibles",
            href: "#",
            to: "vuelosDisponibles"
          },
          {
            text: "Lineas de Vuelo",
            href: "#",
            to: "lienasDeVuelo"
          },
            ]
        }
    }
}
</script>
   
   
<style></style>