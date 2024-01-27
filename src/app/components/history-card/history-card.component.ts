import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { History } from '../../models/history';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {

  @Input() history: History = {
    id: 0,
    name: '',
    description: '',
    avatar: '',
    product1: '',
    price1: 0,
    product2: '',
    price2: 0,
    date: ''
  }; 
}

