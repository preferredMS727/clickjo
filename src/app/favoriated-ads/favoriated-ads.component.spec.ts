import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriatedAdsComponent } from './favoriated-ads.component';

describe('FavoriatedAdsComponent', () => {
  let component: FavoriatedAdsComponent;
  let fixture: ComponentFixture<FavoriatedAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriatedAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriatedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
