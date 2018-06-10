import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  title = 'Courses Information'

  course : Courses = new Courses();
  courses : Courses[];

  constructor(private coursesService: CoursesService) {
   }

  ngOnInit() {
    // the peas are the objects being returned from the service.
    this.coursesService.getCourse().subscribe(c => this.courses = c);
  }
}
