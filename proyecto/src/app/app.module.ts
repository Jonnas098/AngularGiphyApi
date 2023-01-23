import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { TarjetaGifComponent } from './tarjeta-gif/tarjeta-gif.component';
import { PantallaGifComponent } from './pantalla-gif/pantalla-gif.component';
import { FooterComponent } from './footer/footer.component';
import { PantallaStickersComponent } from './pantalla-stickers/pantalla-stickers.component';
import { HeaderComponent } from './header/header.component';
import { TarjetaStickersComponent } from './tarjeta-stickers/tarjeta-stickers.component';
import { PaginaExplicativaComponent } from './pagina-explicativa/pagina-explicativa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannerHomeComponent,
    TarjetaGifComponent,
    PantallaGifComponent,
    FooterComponent,
    PantallaStickersComponent,
    HeaderComponent,
    TarjetaStickersComponent,
    PaginaExplicativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
