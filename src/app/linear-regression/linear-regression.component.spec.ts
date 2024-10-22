import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinearRegresionComponent } from "./linear-regression.component";
import data_test1 from "../data/set1.json";
import data_test2 from "../data/set2.json";
import data_test3 from "../data/set3.json";
import data_test4 from "../data/set4.json";
const x = 386;
describe(" linear regresion test suite using data_test1", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    data_test1.proxy_size,
    data_test1.actual_added,
  );
  it("Should return B0=-22.55 with the dataset = proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and  actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-22.55);
  });
  it("Should return B1=1.7279 with the dataset = proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and  actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(1.7279);
  });
  it("Should return yk=644.429 with the dataset = proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and  actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(644.429);
  });
});

describe(" linear regresion test suite using data_set2", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    data_test2.proxySize,
    data_test2.actualDevelop,
  );
  it("Should return B0=-4.039 with the dataset = proxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.039);
  });
  it("Should return B1=0.1681 with the dataset = proxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(0.1681);
  });
  it("Should return yk=60.858 with the dataset = proxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(60.858);
  });
});
describe("Linear regresion test suite using data_set3", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    data_test3.planAdded,
    data_test3.actualAdded,
  );
  it("Should return B0=-23.92 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-23.92);
  });
  it("Should return B1=1.43097 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(1.43097);
  });
  it("Should return yk=528.429 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(528.429);
  });
});

describe("Linear regresion test suite using data_set4", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    data_test4.planAdded,
    data_test4.actualDevelop,
  );
  it("Should return B0=-4.604 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.604);
  });
  it("Should return B1=0.14016 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(0.14016);
  });
  it("Should return yk=49.4994 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(4))).toBe(49.4994);
  });
});