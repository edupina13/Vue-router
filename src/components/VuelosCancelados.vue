<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Vuelos Cancelados</p>
    </div>
    
</template>
   
<script>
export default {
    data() {
        return {
            items: [
            {
            text: "Inicio",
            href: "#",
            to: "inicio"
          },
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
          {
            text: "",
            href: "#",
            to: ""
          },
            ]
        }
    }
}
</script>
   
   
<style></style>