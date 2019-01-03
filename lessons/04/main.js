var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "../assets/vmSocks-green.png",
        altText: "A pair of socks",
        link: "https://not.a.real.url",
        linkText: "not a real link",

        inventory: 100,
        onSale: true,
        onSaleText: "On Sale!",

        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],

        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})

