import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarcompraComponent } from './insertarcompra.component';

describe('InsertarcompraComponent', () => {
  let component: InsertarcompraComponent;
  let fixture: ComponentFixture<InsertarcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarcompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
