import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFamousStoreComponent } from './most-famous-store.component';

describe('MostFamousStoreComponent', () => {
  let component: MostFamousStoreComponent;
  let fixture: ComponentFixture<MostFamousStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostFamousStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostFamousStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
