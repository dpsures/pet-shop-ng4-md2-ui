import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDetailsSnackbarComponent } from './pets-details-snackbar.component';

describe('PetsDetailsSnackbarComponent', () => {
  let component: PetsDetailsSnackbarComponent;
  let fixture: ComponentFixture<PetsDetailsSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsDetailsSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDetailsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
