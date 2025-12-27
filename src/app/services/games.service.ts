import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/games.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private api = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api';
;

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.api}/games`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.api}/game?id=${id}`);
  }
}
