import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/clients'
    },
    {
        path: 'clients',
        component: ClientComponent
    },
    {
        path: 'clients/create',
        component: ClientFormComponent
    },
    {
        path: 'clients/edit/:id',
        component: ClientFormComponent
    },
];
