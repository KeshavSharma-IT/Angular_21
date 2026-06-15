import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';
import { PageNotFound } from './page-not-found/page-not-found';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},

    // {path:'dashboard',
    //     component:Dashboard,
    //     children:[
    //         {path:'profile',component:Profile},
    //         {path:'setting',component:Setting}
    //     ]
    // },
    {
        path:'',redirectTo:'',pathMatch:'full'  
    },
    {
        path:'home',component:Home
    },
    {
        path:'admin', loadComponent:()=>import('./admin/admin').then(m=>m.Admin)
    },

    // not found/wild card route
    {
        path:'**',component:PageNotFound
    },
    {
        path:'login', component:Login
    },
    {
        path:'dashboard',component:Dashboard,canActivate:[authGuard]
    }
    
];
