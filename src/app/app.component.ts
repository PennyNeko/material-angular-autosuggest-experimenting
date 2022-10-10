import { Component, VERSION } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public options: string[] = ['option1', 'option2'];
  public auto: MatAutocomplete;
  public text: string;

  public update(text: string) {
    this.text = text;
    this.options.push(text);
  }
}
