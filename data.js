const LoveLuxeData = {

    adminAccount: {

        username: "admin",

        password: "Admin123",

        fullName: "Love Luxe Admin",

        role: "admin"

    },


    customers: [

        {

            fullName: "Demo Customer",

            username: "customer",

            password: "Customer123",

            phone: "",

            role: "customer",

            shippingAddress: {

                houseNumber: "",

                street: "",

                barangay: "",

                city: "",

                province: "",

                postalCode: ""

            }

        }

    ],


    orders: [],


    appointments: [],


    archivedProducts: [],


    currentUser: null

};


window.LoveLuxeData =
    LoveLuxeData;
