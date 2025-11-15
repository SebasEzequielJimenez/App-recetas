import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarRecetasComponent } from './aprobar-recetas.component';

describe('AprobarRecetasComponent', () => {
  let component: AprobarRecetasComponent;
  let fixture: ComponentFixture<AprobarRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarRecetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
