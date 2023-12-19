import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { PaginacaoResponse } from '../shared/paginacao-response.model';
import { Person } from "./person";

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<PaginacaoResponse<Person>> {
        return this.http.get<PaginacaoResponse<Person>>(`${environment.baseUrl}funcionario?size=10`)
    }

    findById(id: string): Observable<Person> {
        return this.http.get<Person>(`${environment.baseUrl}funcionario/${id}`)
    }

    update(person: Person): Observable<any> {
        return this.http.put(`${environment.baseUrl}funcionario/${person.id}`, person);
    }

    save(person: Person): Observable<any> {
        return this.http.post(`${environment.baseUrl}funcionario`, person);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${environment.baseUrl}funcionario/${id}`);
    }
}
