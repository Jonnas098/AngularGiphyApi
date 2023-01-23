import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getTrendingGifs() {
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=b0SuNw5amgNmXM3J6aAArpF7VqD48msG&limit=45&rating=g`);
}

getTrendingStickers() {
  return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=b0SuNw5amgNmXM3J6aAArpF7VqD48msG&limit=45&rating=g`)
}

getRandomSticker() {
  return this.http.get(`https://api.giphy.com/v1/stickers/random?api_key=b0SuNw5amgNmXM3J6aAArpF7VqD48msG&tag=&rating=g`)
}

}
