class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1; // Contador para generar IDs autoincrementables
  }

  // Agregar un producto
  addProduct(title, description, price, thumbnail, code, stock) {
    // Validando campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // Para evitar que code se repita
    const codeExists = this.products.some(product => product.code === code);
    if (codeExists) {
      console.error("El código de producto ya existe.");
      return;
    }

    const product = {
      id: this.productIdCounter++, // ID autoincrementable
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(product);
  }

  // Obtener todos los productos
  getProducts() {
    return this.products;
  }

  // Buscar un producto por su ID
  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.error("Producto no encontrado.");
    }
    return product;
  }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Agregar los productos 
productManager.addProduct("Rayban", "Gafas de sol de alta calidad", 150, "rayban.jpg", "RB001", 50);
productManager.addProduct("Oakley", "Gafas deportivas resistentes", 120, "oakley.jpg", "OK001", 30);
productManager.addProduct("Bulgari", "Gafas de diseño elegante", 200, "bulgari.jpg", "BL001", 20);

// Obtener todos los productos
console.log(productManager.getProducts());
