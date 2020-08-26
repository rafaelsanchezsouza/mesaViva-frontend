import { Component }       from '@angular/core';

import { QuestionService } from './form-control/question.service';
import { FormControlBase }    from './form-control/form-control-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'Formulário Terra Viva';
  questions$: Observable<FormControlBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}