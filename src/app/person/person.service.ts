import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PaginacaoResponse } from '../shared/paginacao-response.model';
import { Person } from "./person";

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<PaginacaoResponse<Person>> {
        return this.http.get<PaginacaoResponse<Person>>("http://localhost:8080/avaliacao/funcionario?size=10")
    }

    findById(id: number): Observable<Person> {
        return this.http.get<Person>(`/api/persons/${id}`)
    }

    save(person: Person): Observable<any> {
        return this.http.post("/api/persons", person);
    }
}
