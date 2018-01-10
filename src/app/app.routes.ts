import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, ProductoComponent, SearchComponent }
from './components/index.paginas';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'producto/:id', component: ProductoComponent, pathMatch: 'full' },
  { path: 'buscar/:termino', component: SearchComponent, pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
