import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qeue',
    loadChildren: () => import('./qeue/qeue.module').then( m => m.QeuePageModule)
  },
  {
    path: 'histoey',
    loadChildren: () => import('./histoey/histoey.module').then( m => m.HistoeyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'done',
    loadChildren: () => import('./done/done.module').then( m => m.DonePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'showlistmenu',
    loadChildren: () => import('./showlistmenu/showlistmenu.module').then( m => m.ShowlistmenuPageModule)
  },
  {
    path: 'addmenu',
    loadChildren: () => import('./addmenu/addmenu.module').then( m => m.AddmenuPageModule)
  },
  {
    path: 'listmenu',
    loadChildren: () => import('./listmenu/listmenu.module').then( m => m.ListmenuPageModule)
  },
  {
    path: 'editlistmenu',
    loadChildren: () => import('./editlistmenu/editlistmenu.module').then( m => m.EditlistmenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
