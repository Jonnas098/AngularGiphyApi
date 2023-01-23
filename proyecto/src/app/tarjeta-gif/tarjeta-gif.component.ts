import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tarjeta-gif',
  templateUrl: './tarjeta-gif.component.html',
  styleUrls: ['./tarjeta-gif.component.css']
})
export class TarjetaGifComponent implements OnInit{

  sticker: any = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRandomSticker()
    .subscribe((data) => {
      this.sticker= data;
    });
  }

  @Input() titulo:string='Zona de Gifs'
  @Input() imagenDeTarjeta='assets/gifcollage.png'
}
