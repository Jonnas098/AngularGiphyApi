import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pantalla-gif',
  templateUrl: './pantalla-gif.component.html',
  styleUrls: ['./pantalla-gif.component.css']
})
export class PantallaGifComponent implements OnInit {
  gifs: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
      .subscribe((response: any) => {
        this.gifs = response.data;
      });
  }

}
