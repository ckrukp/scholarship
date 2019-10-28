import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'slide', loadChildren: './pages/slide/slide.module#SlidePageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'contactus', loadChildren: './pages/contactus/contactus.module#ContactusPageModule' },
  { path: 'blogdetails', loadChildren: './pages/blogdetails/blogdetails.module#BlogdetailsPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'scholardetails', loadChildren: './pages/scholardetails/scholardetails.module#ScholardetailsPageModule' },
  { path: 'filterdetail', loadChildren: './pages/filterdetail/filterdetail.module#FilterdetailPageModule' },  { path: 'viewall', loadChildren: './pages/viewall/viewall.module#ViewallPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
