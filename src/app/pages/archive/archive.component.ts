import {Component, OnInit} from '@angular/core';
import {ArchiveService} from "../../data/archive.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(public archiveService: ArchiveService) {
  }

  public loading = false;

  public errorMessage: string;

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
