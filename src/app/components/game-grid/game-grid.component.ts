import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Game } from '../../models/games.interface';

@Component({
  selector: 'app-game-grid',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './game-grid.component.html',
  styleUrl: './game-grid.component.scss',
})
export class GameGridComponent {
  @Input({ required: true }) games: Game[] = [];
  @Output() rowClick = new EventEmitter<number>();

  displayedColumns = ['title', 'genre', 'platform'];

  onRowClick(id: number): void {
    this.rowClick.emit(id);
  }
}
