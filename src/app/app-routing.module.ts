import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PersonEditComponent } from './person/edit/person-edit.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
    {path: '', redirectTo: 'persons', pathMatch: 'full'},
    {path: 'persons', component: PersonComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'persons/:id', component: PersonEditComponent, canActivate: [AuthGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'persons'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
