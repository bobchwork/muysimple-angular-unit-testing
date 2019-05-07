import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuySimpleHomeComponent } from './muy-simple-home.component';

describe('MuySimpleHomeComponent', () => {
  let component: MuySimpleHomeComponent;
  let fixture: ComponentFixture<MuySimpleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuySimpleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuySimpleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
