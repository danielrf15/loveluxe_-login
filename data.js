/* ==========================================
   LOVE LUXE BY EA
   SHARED ARRAY DATA
   NO DATABASE
   NO LOCALSTORAGE
========================================== */


/* ==========================================
   CUSTOMER ACCOUNTS
========================================== */

const customers = [

    /*
        Customer accounts created during
        the current page session can be
        added to this array.

        Example account:
    */

    {
        fullName: "Test Customer",
        username: "customer",
        password: "1234",
        phone: "",
        shippingAddress: "",
        role: "customer"
    }

];


/* ==========================================
   ADMIN ACCOUNT
========================================== */

const adminAccount = {

    username: "admin",

    password: "Admin123",

    fullName: "Love Luxe Admin",

    role: "admin"

};


/* ==========================================
   CURRENT USER
========================================== */

let currentUser = null;


/* ==========================================
   PRODUCTS
========================================== */

const products = [

    /* ==========================================
       CLOTHING
    ========================================== */

    {
        name: "Sophia Skirt",

        category: "Clothing",

        price: 790,

        description:
            "A simple and stylish skirt for everyday wear.",

        image:
            "images/sophia-skirt.jpg",

        colors: [
            "Black and White Polka",
            "Light Blue",
            "Gray",
            "Black"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ]
    },


    {
        name: "Nov-Mardi T-Shirt",

        category: "Clothing",

        price: 450,

        description:
            "A comfortable casual shirt with a simple style.",

        image:
            "images/nov-mardi-tshirt.jpg",

        colors: [
            "White",
            "Pink",
            "Black"
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ]
    },


    {
        name: "Basic Chic01 Terno",

        category: "Clothing",

        price: 950,

        description:
            "A simple and comfortable terno for everyday outfits.",

        image:
            "images/basic-chic01-terno.jpg",

        colors: [],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ]
    },


    {
        name: "Sami T-Shirt",

        category: "Clothing",

        price: 790,

        description:
            "A casual shirt available in different colors.",

        image:
            "images/sami-tshirt.jpg",

        colors: [
            "Brown",
            "Tan",
            "Pink",
            "Black",
            "Light Blue"
        ],

        sizes: []
    },


    /* ==========================================
       BODY CARE
    ========================================== */

    {
        name: "Alada Soap",

        category: "Body Care",

        price: 350,

        description:
            "A body care soap for everyday use.",

        image:
            "images/alada-soap.jpg",

        colors: [],

        sizes: []
    },


    {
        name: "Dewy Gluta Soap",

        category: "Body Care",

        price: 199,

        description:
            "A gentle soap for an everyday body care routine.",

        image:
            "images/dewy-gluta-soap.jpg",

        colors: [],

        sizes: []
    },


    {
        name: "Serene Skin Soap",

        category: "Body Care",

        price: 299,

        description:
            "A simple soap for everyday skin care.",

        image:
            "images/serene-skin-soap.jpg",

        colors: [],

        sizes: []
    },


    {
        name: "Vitamin E Whitening Cream",

        category: "Body Care",

        price: 180,

        description:
            "A vitamin E cream for everyday skin care.",

        image:
            "images/vitamin-e-whitening-cream.jpg",

        colors: [],

        sizes: []
    },


    /* ==========================================
       PERFUME
    ========================================== */

    {
        name: "Victoria's Secret Perfume",

        category: "Perfume",

        price: 700,

        description:
            "Choose your preferred Victoria's Secret scent.",

        image:
            "images/victorias-secret-perfume.jpg",

        colors: [],

        sizes: [],

        scents: [
            "Bare Vanilla",
            "Aqua Kiss",
            "Vanilla Lace",
            "Midnight Bloom",
            "Love Spell",
            "Pure Seduction",
            "Velvet Petals"
        ]
    },


    {
        name: "Bath & Body Works Perfume",

        category: "Perfume",

        price: 600,

        description:
            "Choose your preferred Bath & Body Works scent.",

        image:
            "images/bath-body-works-perfume.jpg",

        colors: [],

        sizes: [],

        scents: [
            "Pure Wonder",
            "Hello Beautiful",
            "A Thousand Wishes",
            "You're the One",
            "Vanilla Ease"
        ]
    },


    {
        name: "Smart Collection Perfume",

        category: "Perfume",

        price: 350,

        description:
            "A Smart Collection perfume inspired by Chanel N'5.",

        image:
            "images/smart-collection-perfume.jpg",

        colors: [],

        sizes: [],

        scents: [
            "Chanel N'5"
        ]
    },


    {
        name: "Lattafa YARA",

        category: "Perfume",

        price: 390,

        description:
            "Lattafa YARA perfume.",

        image:
            "images/lattafa-yara.jpg",

        colors: [],

        sizes: [],

        scents: []
    },


    /* ==========================================
       BAGS
    ========================================== */

    {
        name: "Mini Enzo",

        category: "Bags",

        price: 3590,

        description:
            "A compact bag available in several colors.",

        image:
            "images/mini-enzo.jpg",

        colors: [
            "Black",
            "Green",
            "Red",
            "Blue"
        ],

        sizes: []
    },


    {
        name: "Mini Bucket Bag",

        category: "Bags",

        price: 2090,

        description:
            "A stylish bucket bag for everyday use.",

        image:
            "images/mini-bucket-bag.jpg",

        colors: [
            "Dark Blue",
            "Grayish Blue",
            "Blue",
            "Blue Stripes"
        ],

        sizes: []
    },


    {
        name: "Anytime Medium",

        category: "Bags",

        price: 2890,

        description:
            "A medium-sized bag for everyday use.",

        image:
            "images/anytime-medium.jpg",

        colors: [
            "Black",
            "Tantaupe",
            "Tantaupe Two",
            "White",
            "Clay Two"
        ],

        sizes: []
    },


    {
        name: "Emilio Barrel",

        category: "Bags",

        price: 3590,

        description:
            "A stylish barrel-shaped bag available in different colors.",

        image:
            "images/emilio-barrel.jpg",

        colors: [
            "Dark Brown",
            "Red",
            "Green",
            "Black"
        ],

        sizes: []
    }

];


/* ==========================================
   ORDERS ARRAY
========================================== */

const orders = [];


/* ==========================================
   CART ARRAY
========================================== */

const cart = [];
