import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustitutionComponent } from './sustitution.component';

describe('SustitutionComponent', () => {
  let component: SustitutionComponent;
  let fixture: ComponentFixture<SustitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
