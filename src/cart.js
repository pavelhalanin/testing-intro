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

  if (NEW_COUNT > product.stock) {
    throw new RangeError(
      `Вы не можете добавить ${NEW_COUNT} шт. товара, так как на складе ${product.stock} шт.`,
    );
  }

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

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError("Количество товара должно быть больше нуля");
  }

  const PRODUCT = cart.find((product) => product.id === productId);

  if (!PRODUCT) {
    return cart;
  }

  if (newQuantity > PRODUCT.stock) {
    throw new RangeError(
      `Вы не можете добавить ${newQuantity} шт. товара, так как на складе ${PRODUCT.stock} шт.`,
    );
  }

  const BASKET = cart.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        quantity: newQuantity,
      };
    }
    return product;
  });

  return BASKET;
}

function removeFromCart(cart, productId) {
  return cart.filter((product) => product.id !== productId);
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
