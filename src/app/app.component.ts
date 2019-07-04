import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'turingFrontEndChallenge';
  public department_id: number;

  public tryOpenCategory(department_id: number){
    this.department_id = (this.department_id === department_id ? null : department_id);
  }

}
