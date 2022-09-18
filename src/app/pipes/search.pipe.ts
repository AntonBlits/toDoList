import { Pipe, PipeTransform } from '@angular/core';
import {IToDo} from "../models/IToDo";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(toDoList: IToDo[], search: string): IToDo[] {
    if(search) {
      return toDoList.filter(td => td.name.toLowerCase().includes(search.toLowerCase()));
    }
    return toDoList;
  }
}
