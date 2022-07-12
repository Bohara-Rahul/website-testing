describe("Navbar", () => {
    menuItems = ["Jupiter Toys", "Home", "Shop", "Contact"]
    it("displays all the menu items for navigation", () => {
        expect(menuItems).toEqual([
            "Jupiter Toys", "Home", "Shop", "Contact"  
        ])
    })

    describe("when the user is logged out", () => {
        loginBtn = true
        it("shows login button", () => {
            expect(loginBtn.exists()).toBe(true)
        })
    })
})

describe("hero section", () => {
    text = "Jupiter Toys"
    paragraph = "toys, games, puzzles, art and craft, novelties, teddy bears, bicycles, kites, models, sports, gifts..."
     
    it("displays text", () => {
        expect(text).toEqual("Jupiter Toys")
    })

    it("displays paragraph", () => {
        expect(paragraph).toEqual("toys, games, puzzles, art and craft, novelties, teddy bears, bicycles, kites, models, sports, gifts...")
    })
})

describe("main section", () => {
    welcome_message = "Welcome to Jupiter Toys, a magical world for good girls and boys."
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    it("displays welcome message", () => {
        expect(welcome_message).toEqual("Welcome to Jupiter Toys, a magical world for good girls and boys.")
    })

    it("displays description", () => {
        expect(description).toEqual("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    })
})

describe("footer", () => {
    footer_content = "© Jupiter Toys 2022"
    it("should show footer content", () => {
        expect(footer_content).toEqual("© Jupiter Toys 2022")
    })
})

describe("shop page", () => {
    products = [
        { 
            "product_title": "Teddy Bear", 
            "image": "img1",
            "price": 12.99,
        },
        { 
            "product_title": "Stuffed Frog", 
            "image": "img2",
            "price": 10.99,
        },
        { 
            "product_title": "Handmade Doll", 
            "image": "img3",
            "price": 10.99,
        }
    ]
    it("should display a list of products", () => {
        expect(products).toBe([
            { 
                "product_title": "Teddy Bear", 
                "image": "img1",
                "price": 12.99,
            },
            { 
                "product_title": "Stuffed Frog", 
                "image": "img2",
                "price": 10.99,
            },
            { 
                "product_title": "Handmade Doll", 
                "image": "img3",
                "price": 10.99,
            }
        ])
    })

    describe("when buy button in clicked ", () => {
        cart = 1
        it("adds item to cart when button is clicked", () => {
            button.trigger("click")
            expect(cart).toEqual(1)
        })
    })
})

describe("contact page", async () => {
    success_msg = "Thanks John, we appreciate your feedback."
    it("sends a message when submit button is clicked", () => {
        await submitBtn.trigger("click")
        expect(success_msg).toEqual("Thanks John, we appreciate your feedback.")
    })
})