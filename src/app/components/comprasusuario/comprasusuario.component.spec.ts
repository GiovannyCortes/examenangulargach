import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasusuarioComponent } from './comprasusuario.component';

describe('ComprasusuarioComponent', () => {
  let component: ComprasusuarioComponent;
  let fixture: ComponentFixture<ComprasusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
