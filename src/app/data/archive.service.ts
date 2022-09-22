import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToDo} from "../models/IToDo";
import {Observable, tap} from "rxjs";
import {ArchiveModule} from "../pages/archive/archive.module";

@Injectable({
  providedIn: ArchiveModule
})

export class ArchiveService {

  constructor(private http: HttpClient) {
  }

  public archive: IToDo[] = [];

  private urlArchive = "http://localhost:3000/archive";

  public getArchive(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(this.urlArchive)
      .pipe(
        tap(data => this.archive = data));
  }

  public addToDoInArchive(toDo: IToDo): Observable<IToDo> {
    return this.http.post<IToDo>(this.urlArchive, toDo)
      .pipe(
        tap(todo => this.archive.push(todo))
      );
  }

  public deleteToDo(toDo: IToDo) {
    return this.http.delete<IToDo>(`${this.urlArchive}/${toDo.id}`)
      .subscribe(() => {
        this.archive = this.archive.filter(td => td.id !== toDo.id)
      })
  }
}
