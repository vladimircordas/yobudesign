import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypatternsComponent } from './gallerypatterns.component';

describe('GallerypatternsComponent', () => {
  let component: GallerypatternsComponent;
  let fixture: ComponentFixture<GallerypatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
