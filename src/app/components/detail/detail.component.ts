import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Game } from '../../models/games.interface';

@Component({
  selector: 'app-detail',
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  game!: Game;
  showDetails = false;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesService.getGameById(id).subscribe((game) => {
      this.game = {
        ...game,
        progress: Math.floor(Math.random() * 100), // inventada solo para usar ProgressBar
      };
    });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  back(): void {
    this.location.back();
  }
}
