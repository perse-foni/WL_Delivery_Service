import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../service-history.service';
import { HistoryCardComponent } from '../history-card/history-card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HistoryCardComponent, HttpClientModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
  historyList: any;

  service = inject(DataService);

  ngOnInit() {
    this.service.getData().subscribe({
      next: (response) => (this.historyList = response),
    });
  }
}
