const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(products, "asc").map((e) => e.id);
    const EXPECTED_VALUE = [3, 6, 5, 4, 2, 1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(products).map((e) => e.id);
    const EXPECTED_VALUE = [3, 6, 5, 4, 2, 1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(
      [1, 3, 4].map((id) => products.find((product) => product.id === id)),
      "asc",
    ).map((e) => e.id);
    const EXPECTED_VALUE = [3, 4, 1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(products, "desc").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 4, 5, 6, 3];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(
      [3, 1, 4].map((id) => products.find((product) => product.id === id)),
      "desc",
    ).map((e) => e.id);
    const EXPECTED_VALUE = [1, 4, 3];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const ACTUAL_VALUE = sortProductsByPrice(
      [5, 2, 6].map((id) => products.find((product) => product.id === id)),
      "desc",
    ).map((e) => e.id);
    const EXPECTED_VALUE = [2, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const ITEMS = [1, 3, 4].map((id) =>
      products.find((product) => product.id === id),
    );
    sortProductsByPrice(ITEMS, "asc");
    const ACTUAL_VALUE = ITEMS.map((product) => product.id);
    const EXPECTED_VALUE = [1, 3, 4];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const ITEMS = [1, 3, 4].map((id) =>
      products.find((product) => product.id === id),
    );
    sortProductsByPrice(ITEMS, "desc");
    const ACTUAL_VALUE = ITEMS.map((product) => product.id);
    const EXPECTED_VALUE = [1, 3, 4];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test.todo("направление по умолчанию не меняет исходный массив всех товаров");
});
