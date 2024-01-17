    <template>
     <b-breadcrumb :items="items"></b-breadcrumb>
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
                    text:"Siguiente3",
                    href: "#",
                }
            ]
        }
    }
    }
    </script>
    
    
    <style>
    
    </style>