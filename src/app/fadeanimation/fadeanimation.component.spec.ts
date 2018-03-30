import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeanimationComponent } from './fadeanimation.component';

describe('FadeanimationComponent', () => {
  let component: FadeanimationComponent;
  let fixture: ComponentFixture<FadeanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
