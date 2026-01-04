import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.html',
  styleUrl: './leaderboard-page.css',
})
export class LeaderboardPage {
	private router = inject( Router )

	back() {
		this.router.navigate([''])
	}
}
