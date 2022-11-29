import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComponent } from './detalhe.component';

describe('DetalheComponent', () => {
  let component: DetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
