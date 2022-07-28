import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtableComponent } from './secondtable.component';

describe('SecondtableComponent', () => {
  let component: SecondtableComponent;
  let fixture: ComponentFixture<SecondtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
