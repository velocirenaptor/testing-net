import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StddevComponent } from "./stddev.component";

describe("StddevComponent", () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    component.column1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    component.column2 = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    component.ngOnInit();
  });
  it("should return stddev = 572.03 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] ", () => {
    const expectedStddevColumn1 = 572.03;

    expect(component.stddevColumn1).toBe(expectedStddevColumn1);
  });

  it("should return stddev = 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] ", () => {
    const expectedStddevColumn2 = 62.26;

    expect(component.stddevColumn2).toBe(expectedStddevColumn2);
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});