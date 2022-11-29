import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrouteComponent } from './subroute.component';

describe('SubrouteComponent', () => {
  let component: SubrouteComponent;
  let fixture: ComponentFixture<SubrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
