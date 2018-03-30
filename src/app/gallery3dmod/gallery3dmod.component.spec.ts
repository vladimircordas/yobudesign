import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery3dmodComponent } from './gallery3dmod.component';

describe('Gallery3dmodComponent', () => {
  let component: Gallery3dmodComponent;
  let fixture: ComponentFixture<Gallery3dmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery3dmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery3dmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
