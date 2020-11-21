var app = new Vue({
    el: "#app",
    data: {
        brand: "Vue mastery",
        product: "socks",
        image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        inStock: false,
        details: ["80% cotton","10% polyster","10% silk"],
        variants: [
            {
                variantId: 1111,
                variantColor: "green",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2222,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"

            }
        ],
        cart: 0
        
    },
    methods: {
        addToCart(){
            this.cart++
        },
        remove(){
            this.cart = "0"
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        }
    }
})