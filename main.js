var app = new Vue({
    el: "#app",
    data: {
        brand: "Vue mastery",
        product: "socks",
        selectedVariant: 0,
        details: ["80% cotton","10% polyster","10% silk"],
        variants: [
            {
                variantId: 1111,
                variantColor: "green",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2222,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0

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
        updateProduct(index){
            this.selectedVariant = index;
            
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})