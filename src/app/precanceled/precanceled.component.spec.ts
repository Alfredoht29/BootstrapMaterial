import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecanceledComponent } from './precanceled.component';

describe('PrecanceledComponent', () => {
  let component: PrecanceledComponent;
  let fixture: ComponentFixture<PrecanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecanceledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
