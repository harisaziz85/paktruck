import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopsindividualpopup',
  templateUrl: './shopsindividualpopup.component.html',
  styleUrls: ['./shopsindividualpopup.component.css']
})
export class ShopsindividualpopupComponent {
  @Output() actionSelected = new EventEmitter<string>(); // Event to emit the button action

  // Emit selected button value
  onButtonClick(action: string): void {
    this.actionSelected.emit(action);
  }
}
