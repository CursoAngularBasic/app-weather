import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './page/auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=> import('./page/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'page',
    loadChildren: ()=> import('./page/page.module').then(m=> m.PageModule),
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
