import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemComponent } from './tablem.component';

describe('TablemComponent', () => {
  let component: TablemComponent;
  let fixture: ComponentFixture<TablemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
