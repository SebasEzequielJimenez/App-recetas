import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasListAdminComponent } from './recetas-list-admin.component';

describe('RecetasListAdminComponent', () => {
  let component: RecetasListAdminComponent;
  let fixture: ComponentFixture<RecetasListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasListAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
