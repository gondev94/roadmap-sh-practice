function filterByCategory(products, category) {
    if (!Array.isArray(products)) {
        return [];
    }
    return products.filter(product => product.category === category);
}

function filterByMaxPrice(products, maxPrice) {
    if (!Array.isArray(products)) {
        return [];
    }
    return products.filter(product => product.price <= maxPrice);
}

function getInStockProducts(products) {
    if (!Array.isArray(products)) {
        return [];
    }
    return products.filter(product => product.inStock);
}

function findProductById(products, productId) {
    if (!Array.isArray(products)) {
        return null;
    }
    return products.find(product => product.id === productId );
}

function searchProducts(products, searchText) {
    if (!Array.isArray(products)) {
        return [];
    }
    return products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
}
