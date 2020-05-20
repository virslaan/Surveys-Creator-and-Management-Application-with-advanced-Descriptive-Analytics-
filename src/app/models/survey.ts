import{ Question} from './question'
import { Choice } from './choice';
export class Survey {
    constructor(public id: number, public name: string, public question: string, public choices: Array<Choice>){

    }
}
