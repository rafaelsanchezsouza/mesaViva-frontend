import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './dropdown-question';
import { FormControlBase }     from './form-control-base';
import { TextboxQuestion }  from './textbox-question';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: FormControlBase<string>[] = [

      new TextboxQuestion({
        key: 'nome',
        label: 'Nome',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'E-mail',
        type: 'email',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'telefone',
        label: 'Telefone de Contato (Preferencialmente Whatsapp) ',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'endereco',
        label: 'Endereço',
        required: true,
        order: 4
      }),

      new TextboxQuestion({
          key: 11,
          label: 'Banana',
          required: false,
          order: 5
      }),

      new TextboxQuestion({
          key: 12,
          label: 'Macaxeira',
          required: false,
          order: 6
      }),

      new TextboxQuestion({
          key: 13,
          label: 'Abacaxi',
          required: false,
          order: 7
      }),

      new TextboxQuestion({
          key: 14,
          label: 'Abacate',
          required: false,
          order: 8
      }),

      new TextboxQuestion({
          key: 15,
          label: 'Pimenta de Cheiro',
          required: false,
          order: 9
      }),

      new TextboxQuestion({
          key: 16,
          label: 'Manjericão',
          required: false,
          order: 10
      }),

    //   new TextboxQuestion({
    //       key: 17,
    //       label: 'Batata Doce',
    //       required: false,
    //       order: 11
    //   }),

    //   new TextboxQuestion({
    //       key: 18,
    //       label: 'Quiabo',
    //       required: false,
    //       order: 12
    //   }),

    //   new TextboxQuestion({
    //       key: 19,
    //       label: 'Maxixe',
    //       required: false,
    //       order: 13
    //   }),

    //   new TextboxQuestion({
    //       key: 20,
    //       label: 'Limão',
    //       required: false,
    //       order: 14
    //   }),

    //   new TextboxQuestion({
    //       key: 21,
    //       label: 'Banana2',
    //       required: false,
    //       order: 15
    //   }),

    //   new TextboxQuestion({
    //       key: 22,
    //       label: 'Macaxeira2',
    //       required: false,
    //       order: 16
    //   }),

    //   new TextboxQuestion({
    //       key: 23,
    //       label: 'Abacaxi2',
    //       required: false,
    //       order: 17
    //   }),

    //   new TextboxQuestion({
    //       key: 24,
    //       label: 'Abacate2',
    //       required: false,
    //       order: 18
    //   }),

    //   new TextboxQuestion({
    //       key: 25,
    //       label: 'Pimenta de Cheiro2',
    //       required: false,
    //       order: 19
    //   }),

    //   new TextboxQuestion({
    //       key: 26,
    //       label: 'Manjericão2',
    //       required: false,
    //       order: 20
    //   }),

    //   new TextboxQuestion({
    //       key: 27,
    //       label: 'Batata Doce2',
    //       required: false,
    //       order: 21
    //   }),

    //   new TextboxQuestion({
    //       key: 28,
    //       label: 'Quiabo2',
    //       required: false,
    //       order: 22
    //   }),
    //   new TextboxQuestion({
    //       key: 29,
    //       label: 'Maxixe2',
    //       required: false,
    //       order: 23
    //   }),
    //   new TextboxQuestion({
    //       key: 30,
    //       label: 'Limão2',
    //       required: false,
    //       order: 24
    //   }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}