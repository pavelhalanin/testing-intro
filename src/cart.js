function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество товара должно быть больше нуля");
  }

  const FOUND_ITEM = cart.find((item) => item.id === product.id);
  const CURRENT_COUNT = FOUND_ITEM ? FOUND_ITEM.quantity : 0;
  const NEW_COUNT = CURRENT_COUNT + quantity;

  if (FOUND_ITEM) {
    const BASKET = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: NEW_COUNT,
        };
      }
      return item;
    });

    return BASKET;
  }

  const BASKET = [
    ...cart,
    {
      ...product,
      quantity: NEW_COUNT,
    },
  ];

  return BASKET;
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
