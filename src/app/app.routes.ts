import { Routes } from '@angular/router';
import { Home } from './Component/home/home';
import { Bio } from './Component/bio/bio';
import { Experince } from './Component/experince/experince';
import { Skills } from './Component/skills/skills';
import { Contact } from './Component/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'bio', component: Bio },
    { path: 'experience', component: Experince },
    { path: 'skills', component: Skills },
    { path: 'contact', component: Contact },
];
