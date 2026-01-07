import { Routes } from '@angular/router';
import { FruitDetail } from './pages/fruit-detail/fruit-detail';
import { Home } from './pages/home/home';
import { SearchFruit } from './pages/search-fruit/search-fruit';

export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=> import('./pages/home/home').then(m=> m.Home)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home/:name',
        loadComponent: ()=> import('./pages/fruit-detail/fruit-detail').then(m => m.FruitDetail)
    },
    {
        path:'search',
        loadComponent: ()=> import('./pages/search-fruit/search-fruit').then(m => m.SearchFruit)
    }

];
