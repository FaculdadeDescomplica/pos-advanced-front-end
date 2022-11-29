import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulandoJsonComponent } from './manipulando-json.component';

describe('ManipulandoJsonComponent', () => {
  let component: ManipulandoJsonComponent;
  let fixture: ComponentFixture<ManipulandoJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulandoJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulandoJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
