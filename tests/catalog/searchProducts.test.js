const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const ACTUAL_VALUE = searchProducts(products, "Наушники").map((e) => e.id);
    const EXPECTED_VALUE = [1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const ACTUAL_VALUE = searchProducts(products, "Чистый код").map(
      (e) => e.id,
    );
    const EXPECTED_VALUE = [6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const ACTUAL_VALUE = searchProducts(products, "Настольная лампа").map(
      (e) => e.id,
    );
    const EXPECTED_VALUE = [4];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const ACTUAL_VALUE = searchProducts(products, "javascript").map(
      (e) => e.id,
    );
    const EXPECTED_VALUE = [3];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const ACTUAL_VALUE = searchProducts(products, "ЧЕХОЛ").map((e) => e.id);
    const EXPECTED_VALUE = [5];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const ACTUAL_VALUE = searchProducts(products, "наушники").map((e) => e.id);
    const EXPECTED_VALUE = [1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = searchProducts(products, "").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = searchProducts(products, "   ").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const ACTUAL_VALUE = searchProducts(products, "\t\n").map((e) => e.id);
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });
});
