const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  test("ID 1 возвращает products[0]", () => {
    const ACTUAL_VALUE = getProductById(products, 1);
    const EXPECTED_VALUE = products[0];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID 4 возвращает products[3]", () => {
    const ACTUAL_VALUE = getProductById(products, 4);
    const EXPECTED_VALUE = products[3];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID 6 возвращает products[5]", () => {
    const ACTUAL_VALUE = getProductById(products, 6);
    const EXPECTED_VALUE = products[5];
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID 0 возвращает null", () => {
    const ACTUAL_VALUE = getProductById(products, 0);
    const EXPECTED_VALUE = null;
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID 999 возвращает null", () => {
    const ACTUAL_VALUE = getProductById(products, 999);
    const EXPECTED_VALUE = null;
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID -1 возвращает null", () => {
    const ACTUAL_VALUE = getProductById(products, -1);
    const EXPECTED_VALUE = null;
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("строковый ID '1' возвращает null", () => {
    const ACTUAL_VALUE = getProductById(products, "1");
    const EXPECTED_VALUE = null;
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test("ID undefined возвращает null", () => {
    const ACTUAL_VALUE = getProductById(products, undefined);
    const EXPECTED_VALUE = null;
    expect(ACTUAL_VALUE).toEqual(EXPECTED_VALUE);
  });

  test.todo("ID NaN возвращает null");
});
