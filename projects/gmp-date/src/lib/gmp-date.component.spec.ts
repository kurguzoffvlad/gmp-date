import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpDateComponent } from './gmp-date.component';

describe('GmpDateComponent', () => {
  let component: GmpDateComponent;
  let fixture: ComponentFixture<GmpDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
