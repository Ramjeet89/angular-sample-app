import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Course} from './course';
import {COURSES} from './mock-course';
import {Observable,of} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private MessageService:MessagesService) { }

  getCourses(): Observable<Course[]>{
    this.MessageService.add("CourseService: Fetched course")
    return of (COURSES);
  }
}
 