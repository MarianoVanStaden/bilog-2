import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnFormComponent } from './turn-form.component';

describe('TurnFormComponent', () => {
  let component: TurnFormComponent;
  let fixture: ComponentFixture<TurnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
