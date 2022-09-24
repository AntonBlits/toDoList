import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable, tap} from "rxjs";

import {IToDo} from "../models/IToDo";
import {ArchiveModule} from "../pages/archive/archive.module";

@Injectable({
  providedIn: ArchiveModule
})
export class ArchiveService {

  constructor(private http: HttpClient) {
  }

  public archive: IToDo[] = [];

  private url = "http://localhost:3000/archive";

  public getArchive(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(this.url)
      .pipe(
        tap(data => this.archive = data));
  }

  public addToDoInArchive(toDo: IToDo): Observable<IToDo> {
    return this.http.post<IToDo>(this.url, toDo)
      .pipe(
        tap(todo => this.archive.push(todo))
      );
  }

  public deleteToDo(toDo: IToDo) {
    return this.http.delete<IToDo>(`${this.url}/${toDo.id}`)
  }
}
