import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // Redirige cualquier ruta no encontrada a la página principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
