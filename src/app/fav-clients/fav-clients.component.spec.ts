import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavClientsComponent } from './fav-clients.component';

describe('FavClientsComponent', () => {
  let component: FavClientsComponent;
  let fixture: ComponentFixture<FavClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
