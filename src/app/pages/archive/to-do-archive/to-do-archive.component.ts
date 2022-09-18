import {Component, Input} from '@angular/core';
import {IToDo} from "../../../models/IToDo";
import {ArchiveService} from "../../../data/archive.service";
import {ToDoListService} from "../../../data/toDoList.service";

@Component({
  selector: 'app-to-do-archive',
  templateUrl: './to-do-archive.component.html',
  styleUrls: ['./to-do-archive.component.css']
})
export class ToDoArchiveComponent {

  constructor(private archiveService: ArchiveService, private toDoService: ToDoListService) {
  }

  @Input("toDoItem") toDo: IToDo;


  delete(toDo: IToDo) {
    this.archiveService.deleteToDo(toDo);
  }

  recover(toDo:IToDo){
    this.toDoService.recoverToDo(toDo).subscribe();
    this.archiveService.deleteToDo(toDo);
  }

}
