import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerydigitalpComponent } from './gallerydigitalp.component';

describe('GallerydigitalpComponent', () => {
  let component: GallerydigitalpComponent;
  let fixture: ComponentFixture<GallerydigitalpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerydigitalpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerydigitalpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
