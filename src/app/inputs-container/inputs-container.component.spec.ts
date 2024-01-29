import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsContainerComponent } from './inputs-container.component';

describe('InputsContainerComponent', () => {
  let component: InputsContainerComponent;
  let fixture: ComponentFixture<InputsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
