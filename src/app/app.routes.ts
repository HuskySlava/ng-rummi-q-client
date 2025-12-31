import { Routes } from "@angular/router";
import { WelcomePage } from "./pages/welcome-page/welcome-page";
import { GamePage } from "./pages/game-page/game-page";
import {LeaderboardPage} from "./pages/leaderboard-page/leaderboard-page";

export const routes: Routes = [
	{ path: '',  component: WelcomePage },
	{ path: 'game',  component: GamePage },
	{ path: 'leaderboard',  component: LeaderboardPage },
];
