import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoComponent } from './privado.component';

describe('PrivadoComponent', () => {
  let component: PrivadoComponent;
  let fixture: ComponentFixture<PrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
