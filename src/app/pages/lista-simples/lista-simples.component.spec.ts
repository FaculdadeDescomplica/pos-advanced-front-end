import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSimplesComponent } from './lista-simples.component';

describe('ListaSimplesComponent', () => {
  let component: ListaSimplesComponent;
  let fixture: ComponentFixture<ListaSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSimplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
