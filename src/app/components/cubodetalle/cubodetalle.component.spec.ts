import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubodetalleComponent } from './cubodetalle.component';

describe('CubodetalleComponent', () => {
  let component: CubodetalleComponent;
  let fixture: ComponentFixture<CubodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubodetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
