import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SimpsonComponent } from "./simpson.component";
import { twoX, x2, oneOverX } from "../common/simpson_rule";

describe("SimpsonComponent test for f(x) = 2x", () => {
  const component = new SimpsonComponent();
  const result = component.calculateSimpsonRule(twoX, 0, 4, 4, 0.0001);

  it("Should return p=16.0 when f(x)=2x, x0=0, x1=4, num_seg=4", () => {
    expect(parseFloat(result.toFixed(1))).toBe(16.0);
  });
});

describe("SimpsonComponent test for f(x) = x^2", () => {
  const component = new SimpsonComponent();
  const result = component.calculateSimpsonRule(x2, 0, 1, 4, 0.0001);

  it("Should return p=0.3333 when f(x)=x^2, x0=0, x1=1, num_seg=4", () => {
    expect(parseFloat(result.toFixed(4))).toBe(0.3333);
  });
});

describe("SimpsonComponent test for f(x) = 1/x", () => {
  const component = new SimpsonComponent();
  const result = component.calculateSimpsonRule(oneOverX, 1, 4, 6, 0.001);

  it("Should return p=1.38 when f(x)=1/x, x0=1, x1=4, num_seg=6", () => {
    expect(parseFloat(result.toFixed(2))).toBe(1.39);
  });
});
