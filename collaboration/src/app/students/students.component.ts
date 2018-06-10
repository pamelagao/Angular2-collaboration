import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title: string = 'Student Information by Serena';

  students : Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
  	this.studentsService.getStudents().subscribe(s => this.students = s);
    console.log(this.students);
  }

}
