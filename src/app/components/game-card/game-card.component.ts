import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Game } from '../../models/games.interface';

@Component({
  selector: 'app-game-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) game!: Game;
}
