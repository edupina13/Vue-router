<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Proximos Vuelos</p>
    </div>
    
</template>
   
<script>
export default {
    data() {
        return {
            items: [
          {
            text: "Vuelos Cancelados",
            href: "#",
            to: "vuelosCancelados"
          },
          {
            text: "Proximos Vuelos",
            href: "#",
            to: "proximosVuelos"
          },
          
            ]
        }
    }
}
</script>
   
   
<style></style>