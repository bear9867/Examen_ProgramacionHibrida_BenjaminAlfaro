import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPostPage } from './nuevo-post.page';

describe('NuevoPostPage', () => {
  let component: NuevoPostPage;
  let fixture: ComponentFixture<NuevoPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
