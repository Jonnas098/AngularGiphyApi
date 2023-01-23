import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pantalla-stickers',
  templateUrl: './pantalla-stickers.component.html',
  styleUrls: ['./pantalla-stickers.component.css']
})
export class PantallaStickersComponent implements OnInit {
  stickers: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingStickers()
      .subscribe((response: any) => {
        this.stickers = response.data;
      });
  }

}
