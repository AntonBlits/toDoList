import { Component, OnInit } from '@angular/core';
import {ArchiveService} from "../../data/archive.service";
import {ToDoListService} from "../../data/toDoList.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(public archiveService: ArchiveService, public toDoService: ToDoListService) {
  }

  loading = false;

  errorMessage: string;

  ngOnInit() {
    this.loading = true;
    this.archiveService.getArchive().subscribe(() => {
      this.loading = false;
    }, error => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    )
  }
}
