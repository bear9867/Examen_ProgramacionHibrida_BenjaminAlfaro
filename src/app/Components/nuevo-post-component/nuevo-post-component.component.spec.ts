import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuevoPostComponentComponent } from './nuevo-post-component.component';

describe('NuevoPostComponentComponent', () => {
  let component: NuevoPostComponentComponent;
  let fixture: ComponentFixture<NuevoPostComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NuevoPostComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
