function isPaid(order) {
  return order.payment.status.toLowerCase() === 'paid'.trim();
}

function hasShipped(order) {
  return order.shipping.status.toLowerCase() === 'shipped'.trim();
}

function getDeliveryMessage(order) {
  return `Your order will be delivered on ${order.shipping.estimatedDelivery}`
}

function needsAttention(order) {
  return !isPaid(order) || !hasShipped(order)
}

function createOrderSummary(order) {
  let itemCount = order.items.reduce((acc, item) => acc + item.quantity, 0);
  return {
    id: order.id,
    customer: order.customer.name,
    paid: isPaid(order),
    shipped: hasShipped(order),
    itemCount: itemCount,
    deliveryMessage: getDeliveryMessage(order),
    needsAttention: needsAttention(order),
    summary: `Order ${order.id} for ${order.customer.name} is ${isPaid(order) ? 'paid' : 'unpaid'}, ${hasShipped(order) ? 'shipped' : 'not shipped'}`
  }
}

const order = {
  id: 'ORD-1001',
  customer: {
    name: 'Ava Stone',
    email: 'ava@example.com',
  },
  payment: {
    status: 'paid',
  },
  shipping: {
    status: 'shipped',
    estimatedDelivery: '2026-06-18',
  },
  items: [
    { name: 'Notebook', quantity: 2 },
    { name: 'Pen Set', quantity: 1 },
  ],
};
console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));
const pendingOrder = {
  ...order,
  payment: { status: 'unpaid' },
  shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));