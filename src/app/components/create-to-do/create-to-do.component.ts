import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ToDoListService} from "../../data/toDoList.service";

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  constructor(private toDoService: ToDoListService) {
  }

  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      todo: new FormControl<string>('', Validators.required)
    })
  }

  public onSubmit() {
    this.toDoService.addToDo(this.form.value.todo).subscribe(() => {
      this.form.reset()
    })
  }
}
