import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'blog', loadChildren: '../blog/blog.module#BlogPageModule' },
      { path: 'scholar', loadChildren: '../scholar/scholar.module#ScholarPageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    ]
  },
  {
    path:'',
    redirectTo: 'main/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
