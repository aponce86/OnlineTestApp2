import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestModel } from '../interfaces/test-model';

const URL = 'http://localhost:5000/api/interview';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  tests: TestModel[] = [];

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(`${URL}/questions`)
    .pipe(
      map(v => {
        this.tests = v;
        return v;
      })
    );
  }

  getQuestionById(id: number): Observable<TestModel> {
    return this.http.get<TestModel>(`${URL}/getById/${id}`);
  }

  getResult(userAnswer: {id: number, answers: any[]}): Observable<any> {
    return this.http.post<number>(`http://localhost:5000/api/interview/getResult`, userAnswer);
  }


}
