import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
{path: "home", component: PortfolioComponent},
{path: "about", component: AboutComponent},
{path: "item/:id", component: PortfolioItemComponent},
{path: "search/:termino", component: SearchComponent},
{path: "**", pathMatch: "full", redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
