import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
];

export const MapRoutes = RouterModule.forChild(routes);
