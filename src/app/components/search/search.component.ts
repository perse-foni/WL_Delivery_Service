import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StoresService } from '../../services/stores.service';
import { FoundStoresComponent } from '../found-stores/found-stores.component';
import { RouterLink } from '@angular/router';
import { StoreComponent } from '../store/store.component';
import { Store } from '../../models/store';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FoundStoresComponent, RouterLink, StoreComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  service = inject(StoresService);

  searchForm: FormGroup;
  stores: Store[] = [];

  constructor(private formBuilder: FormBuilder ) {
    this.searchForm = new FormGroup({
      searchValue: new FormControl(''),
    });
  }

  getStoresByName(){
    console.log('hi', this.searchForm.value.searchValue);
    this.service.getStores().subscribe( stores => {
      let searchValue = this.searchForm.value.searchValue;
      let foundStores = stores.filter((store) => store.name.toLowerCase().startsWith(searchValue.toLowerCase()))
      console.log(foundStores)
    })}

  
  

}
