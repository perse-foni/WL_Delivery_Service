import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HistoryCardComponent } from '../history-card/history-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HistoryCardComponent, HttpClientModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {

  historyList: any;
  service = inject(HistoryService);
  
  ngOnInit() {
    this.service.getHistoryOrder().subscribe({
      next: response => {console.log(response);this.historyList = response}
    });
  }
}
