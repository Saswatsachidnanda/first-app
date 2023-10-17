import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'shirts',
    loadChildren: () => import('./shirts/shirts.module').then( m => m.ShirtsPageModule)
  },
  {
    path: 'jeans',
    loadChildren: () => import('./jeans/jeans.module').then( m => m.JeansPageModule)
  },
  {
    path: 'jacket',
    loadChildren: () => import('./jacket/jacket.module').then( m => m.JacketPageModule)
  },
  {
    path: 'boots',
    loadChildren: () => import('./boots/boots.module').then( m => m.BootsPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
