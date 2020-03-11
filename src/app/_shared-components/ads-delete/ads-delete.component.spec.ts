import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDeleteComponent } from './ads-delete.component';

describe('AdsDeleteComponent', () => {
  let component: AdsDeleteComponent;
  let fixture: ComponentFixture<AdsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
