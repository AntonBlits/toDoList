import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {IToDo} from "../../../models/IToDo";
import {ToDoListService} from "../../../data/toDoList.service";
import {ArchiveService} from "../../../data/archive.service";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  constructor(private toDoService: ToDoListService,
              private archiveService: ArchiveService) {
  }

  @Input("toDoItem") public toDo: IToDo;

  @ViewChild('toDoItem') public toDoName: ElementRef;

  public done: boolean = false;

  public edit: boolean = false;

  public delete(toDo: IToDo) {
    this.archiveService.addToDoInArchive(toDo).subscribe();
    this.toDoService.deleteToDo(toDo);
  }

  public setEdit(toDo: IToDo) {
    if (this.edit) {
      this.toDoService.editToDo(toDo, this.toDoName.nativeElement.value).subscribe();
      this.edit = false;
    } else {
      this.edit = true;
    }
  }
}
