import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent], // Assuming MenuComponent is standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} },
            params: of({}),
            queryParams: of({}),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the MenuComponent", () => {
    expect(component).toBeTruthy();
  });
});
