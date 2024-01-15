import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFamousStoresComponent } from './most-famous-stores-list.component';

describe('MostFamousStoresComponent', () => {
  let component: MostFamousStoresComponent;
  let fixture: ComponentFixture<MostFamousStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostFamousStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostFamousStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
