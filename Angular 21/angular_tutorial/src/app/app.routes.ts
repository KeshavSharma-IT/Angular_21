import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},

    {path:'dashboard',
        component:Dashboard,
        children:[
            {path:'profile',component:Profile},
            {path:'setting',component:Setting}
        ]
    },
    {
        path:'',redirectTo:'',pathMatch:'full'  
    }
    
];
