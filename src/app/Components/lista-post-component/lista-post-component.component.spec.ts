import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaPostComponentComponent } from './lista-post-component.component';

describe('ListaPostComponentComponent', () => {
  let component: ListaPostComponentComponent;
  let fixture: ComponentFixture<ListaPostComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListaPostComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
