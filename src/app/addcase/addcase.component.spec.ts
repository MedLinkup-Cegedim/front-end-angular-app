import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaseComponent } from './addcase.component';

describe('AddcaseComponent', () => {
  let component: AddcaseComponent;
  let fixture: ComponentFixture<AddcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcaseComponent]
    });
    fixture = TestBed.createComponent(AddcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
