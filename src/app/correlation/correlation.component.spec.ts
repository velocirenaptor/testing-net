import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CorrelationComponent } from "./correlation.component";
import data_test1 from "../data/set1.json";
import data_test2 from "../data/set2.json";
import data_test3 from "../data/set3.json";
import data_test4 from "../data/set4.json";

describe("CorrelationComponent data_test1", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test1.proxy_size,
    data_test1.actual_added,
  );
  it("Should return r=0.9545 with the dataset = proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and  actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9545);
  });
  it("Should return rr=0.9111 with the dataset = proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and  actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9111);
  });
});
describe("CorrelationComponent data_test2", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test2.proxySize,
    data_test2.actualDevelop,
  );
  it("Should return r=0.9333 with the dataset = proxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9333);
  });
  it("Should return rr=0.8711 with the dataset = proxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8711);
  });
});

describe("CorrelationComponent data_test3", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test3.planAdded,
    data_test3.actualAdded,
  );
  it("Should return r=0.9631 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9631);
  });
  it("Should return rr=0.8711 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9276);
  });
});

describe("CorrelationComponent data_test4", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test4.planAdded,
    data_test4.actualDevelop,
  );
  it("Should return r=0.9480 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] actualDevelop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.948);
  });
  it("Should return rr=0.8711 with the dataset = planAdded: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and actualAdded: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8988);
  });
});