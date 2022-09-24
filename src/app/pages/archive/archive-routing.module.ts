import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArchiveComponent} from "./archive.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const ArchiveRoutes: Routes = [
  {path: '', component: ArchiveComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ArchiveRoutes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule {
}
