import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoListComponent} from './pages/to-do-list/to-do-list.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {ToDoComponent} from './pages/to-do-list/to-do/to-do.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateToDoComponent} from './components/create-to-do/create-to-do.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SearchPipe} from './pipes/search.pipe';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ArchiveModule} from "./pages/archive/archive.module";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    HeaderComponent,
    ToDoComponent,
    CreateToDoComponent,
    NavigationComponent,
    SearchPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ArchiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
