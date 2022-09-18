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
              private archiveService: ArchiveService) {}

  @Input("toDoItem") toDo: IToDo;

  @ViewChild('toDoItem') toDoName: ElementRef;

  done: boolean = false;

  edit: boolean = false;

  delete(toDo: IToDo) {
    this.archiveService.addToDoInArchive(toDo).subscribe();
    this.toDoService.deleteToDo(toDo);
  }

  setEdit(toDo: IToDo) {
    if (this.edit) {
      this.toDoService.editToDo(toDo, this.toDoName.nativeElement.value ).subscribe();
      this.edit = false;
    } else {
      this.edit = true;
    }
  }
}
