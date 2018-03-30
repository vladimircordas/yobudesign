import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerysculpturesComponent } from './gallerysculptures.component';

describe('GallerysculpturesComponent', () => {
  let component: GallerysculpturesComponent;
  let fixture: ComponentFixture<GallerysculpturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerysculpturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerysculpturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
