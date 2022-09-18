import {Component, OnInit} from '@angular/core';
import {ToDoListService} from "../../data/toDoList.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  constructor(public toDoService: ToDoListService) {
  }

  loading = false;

  errorMessage: string;

  ngOnInit() {
    this.loading = true;
    this.toDoService.getToDoList().subscribe(() => {
        this.loading = false;
      }, error => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    )
  }
}
