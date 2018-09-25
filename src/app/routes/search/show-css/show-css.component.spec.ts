import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCssComponent } from './show-css.component';

describe('ShowCssComponent', () => {
  let component: ShowCssComponent;
  let fixture: ComponentFixture<ShowCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
