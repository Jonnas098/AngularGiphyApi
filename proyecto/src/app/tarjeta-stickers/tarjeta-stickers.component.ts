import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-stickers',
  templateUrl: './tarjeta-stickers.component.html',
  styleUrls: ['./tarjeta-stickers.component.css']
})
export class TarjetaStickersComponent {

  @Input() titulo:string='Zona de Stickers'
  @Input() imagenStickers='assets/stickerscollage.png'
}
