import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ToDoArchiveComponent} from "./to-do-archive/to-do-archive.component";
import {ArchiveComponent} from "./archive.component";
import {ArchiveRoutingModule} from "./archive-routing.module";

@NgModule({
  declarations: [
    ArchiveComponent,
    ToDoArchiveComponent
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule
  ],
  providers: []
})
export class ArchiveModule {
}
