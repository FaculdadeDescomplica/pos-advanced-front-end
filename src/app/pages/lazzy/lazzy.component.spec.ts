import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzyComponent } from './lazzy.component';

describe('LazzyComponent', () => {
  let component: LazzyComponent;
  let fixture: ComponentFixture<LazzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazzyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
