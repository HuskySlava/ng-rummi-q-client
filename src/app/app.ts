import {Component, OnInit, signal} from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App implements OnInit {
	protected readonly title = signal("ng-rummi-q-client");

	private test(x: any){
		console.log(x)
	}

	ngOnInit() {
		this.test("abc")
	}
}
