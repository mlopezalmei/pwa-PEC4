import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { Game } from '../../models/games.interface';
import { GamesService } from '../../services/games.service';
import { GameCardComponent } from '../game-card/game-card.component';
import { GameGridComponent } from '../game-grid/game-grid.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    GameCardComponent,
    GameGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  loading = true;
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
      this.loading = false;
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
