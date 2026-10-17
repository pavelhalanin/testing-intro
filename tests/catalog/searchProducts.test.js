const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const ACTUAL_VALUE = searchProducts(products, "Наушники").map((e) => e.id);
    const EXPECTED_VALUE = [1];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test.todo("'Чистый код' возвращает товар с ID 6");
  test.todo("'Настольная лампа' возвращает товар с ID 4");
  test.todo("'javascript' возвращает товар с ID 3");
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test.todo("'наушники' возвращает товар с ID 1");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
});
