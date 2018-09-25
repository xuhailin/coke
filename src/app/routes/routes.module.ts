import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ReturnTopComponent } from './common/return-top/return-top.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ShowCssComponent } from './search/show-css/show-css.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'search/show-css', component: ShowCssComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    ReturnTopComponent,
    AboutComponent,
    ShowCssComponent,
  ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
