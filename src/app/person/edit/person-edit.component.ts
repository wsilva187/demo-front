import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent {

    person: Person = new Person();

    constructor(private route: ActivatedRoute, private personService: PersonService, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit(): void {
        this.getPerson();
    }

    getPerson(): void {
        let idParam = this.route.snapshot.paramMap.get('id')?? "new";
        if (idParam === "new") {
            this.person = new Person();
        } else {
            this.personService.findById(idParam).subscribe(person => this.person = person);
        }
    }

    save(): void {
        if (this.person.id) {
            this.update();
        } else {
            this.personService.save(this.person).subscribe(() => {
                let snackBar = this.snackBar.open("Person saved", "OK",);
                snackBar.onAction().subscribe(value => this.router.navigateByUrl("/persons"));
            });
        }
    }

    update(): void {
        this.personService.update(this.person).subscribe(() => {
            let snackBar = this.snackBar.open("Person saved", "OK",);
            snackBar.onAction().subscribe(value => this.router.navigateByUrl("/persons"));
        });
    }

}
