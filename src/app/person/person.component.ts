import { Component } from '@angular/core';
import { PaginacaoResponse } from '../shared/paginacao-response.model';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent {
    persons: PaginacaoResponse<Person> = new PaginacaoResponse<Person>();
    displayedColumns: string[] = ['id', 'name'];

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.getPersons();
    }

    getPersons(): void {
        this.personService.findAll().subscribe(persons => this.persons = persons);
    }
}
