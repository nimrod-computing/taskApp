import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3{
      color: dodgerblue;
    }`]
})
export class AppComponent {

    showMenu = false;

    onToggleMenu() {
        this.showMenu = !this.showMenu;
        console.log(this.showMenu);
    }
}
