import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AICompanionService } from './ai-companion.service';
import { GAME_CONFIG } from './game-config';

@Component({
  selector: 'ns-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameMode: string;
  player: any = { name: 'Superviviente', health: 100, radiation: 0, inventory: [] };
  world: any = { radiation: 50, resources: ['wood', 'metal', 'cloth'], currentLocation: 'Ciudad en Ruinas' };
  aiCompanion: AICompanionService;
  currentEnemy: any = null;
  storyProgress: number = 0;
  gameStarted: boolean = false;

  constructor(private route: ActivatedRoute, private aiCompanionService: AICompanionService) {
    this.aiCompanion = aiCompanionService;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.gameMode = params['mode'];
    });
    this.initializeGame();
  }

  initializeGame() {
    console.log(`Iniciando juego en modo: ${this.gameMode}`);
    this.aiCompanion.setPlayerName(this.player.name);
    if (this.gameMode === 'single' && !this.gameStarted) {
      console.log(this.aiCompanion.getIntroduction());
      console.log(this.aiCompanion.getBackstory());
      this.gameStarted = true;
    }
    this.updateStoryProgress();
  }

  // ... (resto del código sin cambios)
}