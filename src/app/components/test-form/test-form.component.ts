import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TestModel } from 'src/app/interfaces/test-model';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
})
export class TestFormComponent implements OnInit {
  test: TestModel;
  testId: string;
  evaluation: number;
  answers: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private testService: TestServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => { 
        this.testId = params['id'];

        this.testService.getQuestionById(+this.testId).subscribe((v: any) => {
          this.test = v.response;
        });
    });


    
  }

  onSubmit(answer: NgForm) {
    let emptyQuestion;

    for(let ans in answer.value ) {
      this.answers.push(answer.value[ans])      
    }

    this.answers.forEach(value => {
      if(value === ''){    
        emptyQuestion = true;
      }
    })

    if(emptyQuestion) {
      emptyQuestion = confirm("There is at least a missing answer. Do you want to send the test");
      if(!emptyQuestion) {
        this.answers = [];
        return;
      }else {
        this.submitResult();
      }            
    }else {
      this.submitResult()
    }
  }

  submitResult = () => {
    let userAnswer = {
      id: +this.testId,
      answers: this.answers
    }

    this.testService.getResult(userAnswer).subscribe(result => {
      this.evaluation = result.result;
      alert("Your evaluation is " + this.evaluation + "/" + this.answers.length);
      this.router.navigate(["/"]);
    });
    
  }
}
