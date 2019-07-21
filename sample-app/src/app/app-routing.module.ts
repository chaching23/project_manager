import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowallComponent } from './showall/showall.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'products', pathMatch: 'full', component: ShowallComponent },
  { path: 'products/new', pathMatch: 'full', component: NewComponent },
  { path: 'products/edit/:id', pathMatch: 'full', component: EditComponent },
];

  
  
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
