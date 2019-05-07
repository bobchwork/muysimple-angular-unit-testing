import { Component, OnInit } from '@angular/core';
import { PersonService } from "./PersonService";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: [ './person.component.sass' ],
  providers: [PersonService]
})
export class PersonComponent {

  public person: { name: string; isLoggedIn: boolean };

  constructor(
    public personService: PersonService
  ) {
    this.person =  this.personService.person;
  }
}
