import { Injectable } from '@angular/core';
import { Courses } from './courses';
import { Observable, of } from 'rxjs';  // need to import additional 'of'

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  courses : Courses[] = [
    { id : 1, name : 'Portfolio Development', start : true, start_time : new Date('2018-06-10T08:55:00'), end_time : new Date('2018-06-10T12:30:00'), instructor : ['Joanna', 'Joanna@humber.ca'] },
    { id : 2, name : 'Web Project', start : true, start_time : new Date('2018-06-10T08:00'), end_time : new Date('2018-06-10T11:35:00'), instructor : ['Nithya', 'Nithya@humber.ca'] },
    { id : 3, name : 'Usability and Accessibility', start : false, start_time : new Date('2018-06-10T08:55:00'), end_time : new Date('2018-06-10T12:30:00'), instructor : ['Simon', 'Simon@humber.ca'] }
  ];
  
  // method to retrieve array of objects
  getCourse () : Observable<Courses[]> {
    return of(this.courses);
  }

  constructor() { }
}
