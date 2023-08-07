import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencasesComponent } from './opencases.component';

describe('OpencasesComponent', () => {
  let component: OpencasesComponent;
  let fixture: ComponentFixture<OpencasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpencasesComponent]
    });
    fixture = TestBed.createComponent(OpencasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
