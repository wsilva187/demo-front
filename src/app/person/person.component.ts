import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent {
    datasource: Person[] = [];
    displayedColumns: string[] = ['id', 'nome'];

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.getPersons();
    }

    getPersons(): void {
        this.personService.findAll().subscribe(persons => {
            this.datasource = persons?.content ?? [];
            console.log(this.datasource)
        });
    }

    delete(id: string): void {
        this.personService.delete(id).subscribe(() => {
            this.getPersons();
        });
    }

}
