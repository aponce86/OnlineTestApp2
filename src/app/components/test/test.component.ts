import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TestModel } from '../../interfaces/test-model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() test: TestModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStart() {
    this.router.navigate(["/test-form"], {queryParams: {id: this.test.id}})
  }

}
