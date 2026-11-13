function calculateSubTotal(price, quantity) {
    return price * quantity
}

function calculateDiscount(subTotal, discountPercent) {
    return subTotal * discountPercent / 100
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * taxPercent / 100
}

function createCartSummary(items, discountPercent, taxPercent) {
    let cartTotal = 0;
    items.forEach(item => {
        const subTotal = calculateSubTotal(item.price, item.quantity);
        const discount = calculateDiscount(subTotal, discountPercent);
        const amountAfterDiscount = subTotal - discount;
        const tax = calculateTax(amountAfterDiscount, taxPercent);
        const itemTotal = amountAfterDiscount + tax;

        cartTotal += itemTotal
        console.log(`${item.name} - $${subTotal.toFixed(2)} - $${discount.toFixed(2)} - $${amountAfterDiscount.toFixed(2)} - $${tax.toFixed(2)} - $${itemTotal.toFixed(2)}`);
    })
    return cartTotal;
}

