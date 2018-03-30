import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2dComponent } from './gallery2d.component';

describe('Gallery2dComponent', () => {
  let component: Gallery2dComponent;
  let fixture: ComponentFixture<Gallery2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
