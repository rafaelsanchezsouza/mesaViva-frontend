import { Component }       from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase }    from './question-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'Formulário Terra Viva';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}