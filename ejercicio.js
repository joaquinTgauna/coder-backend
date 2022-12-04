
class ProdcutManager {
    constructor() {
        this.products = []

    }

    getProducts = () => { return this.products }

    // Consigue el siguiente ID
    getNextID = () => {
        const count = this.products.length
        if (count == 0) return 1

        const lastProduct = this.products[count - 1]
        const lastID = lastProduct.id
        const nextID = lastID + 1


        return nextID

    }

    addProduct = (title, description, price, code, stock, thumbnail) => {
        const id = this.getNextID()

        const product = {
            id,
            title,
            description,
            price,
            code,
            stock,
            thumbnail
        }

        if (this.products.find(p => p.code == product.code))
            return console.log("El codigo esta repetido")

        this.products.push(product)
    }

    getProductById = (productId) => {
        const product = this.products.find(p => p.id == productId)

        if (!product)
            return "No se encontor el producto"

        return product
    }


}

const manager = new ProdcutManager()

manager.addProduct("Bimbo", "pan lactal blanco", 500, 0101101, 100, "https://www.pasosonline.com.ar/wp-content/uploads/2020/11/BIMBO-pan-chico-x400g.png")

console.log("lista de productos")
console.log(manager.getProducts())
console.log("producto especifico")
console.log(manager.getProductById(1))

manager.addProduct("Dove", "jabon de tocador", 250, 1001101, 200, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/671/329/products/dove1-6907d6323b5ac8e07716209365061142-640-0.jpg")

console.log("lista de productos")
console.log(manager.getProducts())
console.log("producto especifico")
console.log(manager.getProductById(2))

manager.addProduct("palmolive", "jabon de tocador", 200, 1001101, 300, "https://www.palmolive.com.ar/content/dam/cp-sites/personal-care/palmolive-latam/redesign-2020/pdp/aloe-y-oliva/jabon-en-barra-sensacion-humectante-oliva-y-aloe-frente-ar.jpg")

console.log("lista de productos")
console.log(manager.getProducts())
console.log("producto especifico")
console.log(manager.getProductById(3))