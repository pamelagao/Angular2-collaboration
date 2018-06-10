import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [
    {
      id: 1,
      firstName: 'Sarah',
      lastName: 'Conner',
      gender: 'female', 
      dateOfBirth: new Date('01/01/1994'),
      programs: ['Web Development']
    },
    {
      id: 2,
      firstName: 'Daniel',
      lastName: 'Fenton',
      gender: 'male', 
      dateOfBirth: new Date('02/02/1995'),
      programs: ['Web Development', 'User Experience']
    },
    {
      id: 3,
      firstName: 'Richard',
      lastName: 'Grayson',
      gender: 'male', 
      dateOfBirth: new Date('03/03/1992'),
      programs: ['Web Development']
    }
  ];

  getStudents() : Observable<Student[]> {
    return of(this.students);
  }

  constructor() { 
  }
}
