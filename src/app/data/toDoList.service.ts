import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IToDo} from "../models/IToDo";

@Injectable({
    providedIn: 'root'
  }
)

export class ToDoListService {

  constructor(private http: HttpClient) {
  }

  toDoList: IToDo[] = [];

  searchItem: string;

  url = "http://localhost:3000/toDoList";

  private errorHundler(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }

  getToDoList(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(this.url)
      .pipe(
        tap(data => this.toDoList = data));
        catchError(this.errorHundler)
  }

  addToDo(name: string): Observable<IToDo> {
    return this.http.post<IToDo>(this.url, {name})
      .pipe(
        tap(todo => this.toDoList.push(todo))
      );
  }

  deleteToDo(toDo: IToDo) {
    this.http.delete<IToDo>(`${this.url}/${toDo.id}`)
      .subscribe(() => {
        this.toDoList = this.toDoList.filter(t => t.id !== toDo.id);
      })
  }

  editToDo(toDo: IToDo, toDoName: string): Observable<IToDo> {
    toDo.name = toDoName;
    return this.http.put<IToDo>(`${this.url}/${toDo.id}`, toDo);
  }

  recoverToDo(toDo: IToDo) : Observable<IToDo> {
    return this.http.post<IToDo>(this.url, toDo)
      .pipe(
        tap(todo => this.toDoList.push(todo))
      );
  }
}