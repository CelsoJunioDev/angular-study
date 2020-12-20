import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {MenuComponent} from './menu/menu.component'
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'footer', component: FooterComponent},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(u => u.UsuarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
