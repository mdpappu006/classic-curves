const app = Vue.createApp({
    data(){
        return{
            products:[
                {
                    id:1,
                    title : "Rayon Lycra",
                    desc: "Casual animal print jacket",
                    img: "assets/img/one.jpg",
                    item: 1,
                    price: "40.00"
                },
                
                {
                    id:2,
                    title : "Rayon Lycra",
                    desc: "Casual animal print jacket",
                    img: "assets/img/one.jpg",
                    item: 2,
                    price: "55.00"
                }
            ]
            
        }
    },

    methods: {
        handleClick(id){
            if(id == 1){
                return id = 1;
            }else if(id == 2){
                return id = 2;
            }
        }
    }
 })
 
 app.mount('#app')
