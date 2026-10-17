const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = filterByCategory(products, "all").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = filterByCategory(products, undefined).map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = filterByCategory(products, "").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const ACTUAL_VALUE = filterByCategory(products, "electronics").map(
      (e) => e.id,
    );
    const EXPECTED_VALUE = [1, 2];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const ACTUAL_VALUE = filterByCategory(products, "books").map((e) => e.id);
    const EXPECTED_VALUE = [3, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const ACTUAL_VALUE = filterByCategory(products, "home").map((e) => e.id);
    const EXPECTED_VALUE = [4, 5];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'clothes' возвращает пустой массив", () => {
    const ACTUAL_VALUE = filterByCategory(products, "clothes").map((e) => e.id);
    const EXPECTED_VALUE = [];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'toys' возвращает пустой массив", () => {
    const ACTUAL_VALUE = filterByCategory(products, "toys").map((e) => e.id);
    const EXPECTED_VALUE = [];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test.todo("'sports' возвращает пустой массив");
});
