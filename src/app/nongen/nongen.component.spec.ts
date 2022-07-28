import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NongenComponent } from './nongen.component';

describe('NongenComponent', () => {
  let component: NongenComponent;
  let fixture: ComponentFixture<NongenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NongenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NongenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
