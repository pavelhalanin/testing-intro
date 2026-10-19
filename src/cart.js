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

function calculateCartSubtotal(cart) {
  return cart.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.quantity;
  }, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const TOTAL_PRICE = calculateCartSubtotal(cart);

  let delivery = 0;
  if (TOTAL_PRICE < 50000) {
    delivery = 30000;
  }

  let discount = 0;

  if (promoCode === "SAVE10" && TOTAL_PRICE >= 20000) {
    discount = Math.round(TOTAL_PRICE * 0.1);
  }

  const TOTAL = TOTAL_PRICE + delivery - discount;

  return {
    delivery: delivery,
    discount: discount,
    subtotal: TOTAL_PRICE,
    total: TOTAL,
  };
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
