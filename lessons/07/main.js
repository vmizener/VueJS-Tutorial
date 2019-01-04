var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "../assets/vmSocks-green.jpeg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "../assets/vmSocks-blue.jpeg",
                variantQuantity: 0
            }
        ],
        cart: 0,
        onSale: false
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0){
                this.cart -= 1
            }
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0
        },
        onSaleProp() {
            if (this.onSale){
                return 'on sale: ' + this.brand + ' ' + this.product
            } else {
                return 'not on sale: ' + this.brand + ' ' + this.product
            }
        }
    }
})

