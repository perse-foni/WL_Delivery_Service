import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFamousStoresListComponent } from './most-famous-stores-list.component';

describe('MostFamousStoresComponent', () => {
  let component: MostFamousStoresListComponent;
  let fixture: ComponentFixture<MostFamousStoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostFamousStoresListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostFamousStoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
