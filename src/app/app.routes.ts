import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"", redirectTo: 'home', pathMatch:"full"},

            {path:"home",component:HomeComponent,title:"Home Pages"},
            {path:"about",component:AboutComponent,title:"About Pages"},
            {path:"contact",component:ContactComponent,title:"Contact Pages"},

];
