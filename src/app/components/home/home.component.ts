import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../../services/test-service.service';
import { TestModel } from '../../interfaces/test-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tests: TestModel[];

  constructor(private testService: TestServiceService){}

  ngOnInit(): void {
    this.testService.getQuestions().subscribe(tests => {
      this.tests = tests;
    });
  }

  
}
