import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinearRegresionComponent } from "./linear-regression.component";
import data_test1 from "../data/set1.json";
import data_test2 from "../data/set2.json";
import data_test3 from "../data/set3.json";
import data_test4 from "../data/set4.json";
const x = 386;

describe("Linear Regression Test Suite Using Data Set 1", () => {
  const component = new LinearRegresionComponent();
  const { slope, intercept } = component.calcularlinearRegression(
    data_test1.proxy_size,
    data_test1.actual_added,
  );
  
  const proxy_size = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
  const actual_added = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];

  it("Should return slope = 1.7279 with the dataset", () => {
    expect(parseFloat(slope.toFixed(4))).toBe(1.7279);
  });

  it("Should return intercept = -22.55 with the dataset", () => {
    expect(parseFloat(intercept.toFixed(2))).toBe(-22.55);
  });

  it("Should return yk = 644.429 when x = 386", () => {
    const yk = component.predict(slope, intercept, x);
    expect(parseFloat(yk.toFixed(3))).toBe(644.429);
  });
});

describe("Linear Regression Test Suite Using Data Set 2", () => {
  const component = new LinearRegresionComponent();
  const { slope, intercept } = component.calcularlinearRegression(
    data_test2.proxySize,
    data_test2.actualDevelop,
  );
  
  const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
  const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

  it("Should return slope = 0.1681 with the dataset", () => {
    expect(parseFloat(slope.toFixed(4))).toBe(0.1681);
  });

  it("Should return intercept = -4.039 with the dataset", () => {
    expect(parseFloat(intercept.toFixed(3))).toBe(-4.039);
  });

  it("Should return yk = 60.858 when x = 386", () => {
    const yk = component.predict(slope, intercept, x);
    expect(parseFloat(yk.toFixed(3))).toBe(60.858);
  });
});

describe("Linear Regression Test Suite Using Data Set 3", () => {
  const component = new LinearRegresionComponent();
  const { slope, intercept } = component.calcularlinearRegression(
    data_test3.planAdded,
    data_test3.actualAdded,
  );
  
  const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
  const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];

  it("Should return slope = 1.43097 with the dataset", () => {
    expect(parseFloat(slope.toFixed(5))).toBe(1.43097);
  });

  it("Should return intercept = -23.92 with the dataset", () => {
    expect(parseFloat(intercept.toFixed(2))).toBe(-23.92);
  });

  it("Should return yk = 528.429 when x = 386", () => {
    const yk = component.predict(slope, intercept, x);
    expect(parseFloat(yk.toFixed(3))).toBe(528.429);
  });
});

describe("Linear Regression Test Suite Using Data Set 4", () => {
  const component = new LinearRegresionComponent();
  const { slope, intercept } = component.calcularlinearRegression(
    data_test4.planAdded,
    data_test4.actualDevelop,
  );
  
  const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
  const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

  it("Should return slope = 0.14016 with the dataset", () => {
    expect(parseFloat(slope.toFixed(5))).toBe(0.14016);
  });

  it("Should return intercept = -4.604 with the dataset", () => {
    expect(parseFloat(intercept.toFixed(3))).toBe(-4.604);
  });

  it("Should return yk = 49.4994 when x = 386", () => {
    const yk = component.predict(slope, intercept, x);
    expect(parseFloat(yk.toFixed(4))).toBe(49.4994);
  });
});
