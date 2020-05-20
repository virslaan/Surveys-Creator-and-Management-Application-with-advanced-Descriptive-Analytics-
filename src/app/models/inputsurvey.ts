import { ChoiceInput } from './inputchoice';
export class SurveyInput {
    value(value: any) {
          throw new Error("Method not implemented.");
    }
    constructor(public name: string, public question: string, public choices: Array<ChoiceInput>){

    }
}
