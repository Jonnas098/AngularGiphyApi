import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaExplicativaComponent } from './pagina-explicativa/pagina-explicativa.component';
import { PantallaGifComponent } from './pantalla-gif/pantalla-gif.component';
import { PantallaStickersComponent } from './pantalla-stickers/pantalla-stickers.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"explicacion", component: PaginaExplicativaComponent},
  {path:"gifs", component:PantallaGifComponent},
  {path:"stickers", component:PantallaStickersComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
