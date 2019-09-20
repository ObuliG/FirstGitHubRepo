import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GenerateBOMComponent } from './generate-bom/generate-bom.component';
import { GenerateRoutingComponent } from './generate-routing/generate-routing.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },

  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     { path: '', component: GenerateBOMComponent },
  //     { path: 'generate-routing', component: GenerateRoutingComponent },
  //     { path: 'search', component: SearchComponent },
  //     { path: 'upload', component: UploadComponent },
  //   ]
  { path: '', component: GenerateBOMComponent },
  { path: 'generate-routing', component: GenerateRoutingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload', component: UploadComponent },
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
