import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import { ChoiceInput } from 'src/app/models/inputchoice';
import { SurveyInput } from 'src/app/models/inputsurvey';
import { SurveyService } from 'src/app/services/survey.service';
import { stringify } from 'querystring';

@Component({
      selector: 'app-form',
      templateUrl: './form.component.html',
      styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

      title = 'app';
      topics = ['Angular', 'React', 'Vue'];
      choices = new Array(new ChoiceInput('', '', 0), new ChoiceInput('', '', 0));
      obj = new SurveyInput('', '', this.choices);
      topicHasError = true;
      submitted = false;
      errorMsg = '';
      _surveyService: any;
      showMessage: boolean;
      surveyForm: FormGroup;
      v: any;
      i:number;
      constructor(private service: SurveyService, private fb: FormBuilder) {this.i=4; }

count:0;
      ngOnInit(): void {
            this.count++;
          
      
      
      
            this.surveyForm = this.fb.group({
                options: this.fb.array(['']),

        

      });

      
      
      
      
      
      
      }
      values=[];
      h=0;
      setoptions()
      {
      
            console.log(this.surveyForm.value);
            console.log(this.surveyForm.value.options[this.h]);
            this.add(this.surveyForm.value.options[this.h]);
      this.h++;
      
      
      
      }

      get options() {
            return this.surveyForm.get('options') as FormArray;

      }
      addoptions() {
            console.log("VVVVVVVVVVVVVVVV" + this.fb.control(''));
            this.options.push(this.fb.control(''));
  
                      
      }
      add(some:string) {

          this.choices.push(new ChoiceInput(this.obj.name, some, 0));
            
  
      }





      validateTopic(value) {
            if (value === 'default') {
                  this.topicHasError = true;
            } else {
                  this.topicHasError = false;
            }
      }

      check() {
            this.choices[0].surveyName = this.obj.name;
            this.choices[1].surveyName = this.obj.name;
            console.log(("XXXXXXXXXXX" + this.obj));
            this.onSubmit();
      }


      onSubmit() {
            this.submitted = true;
            this.service.addSurvey(this.obj)
                  .subscribe(res => {
                        console.log(res)
                        if (res.status == 201) {
                              this.showMessage = true;
                        }
                  });

      }
      userModel(userModel: any) {
            throw new Error("Method not implemented.");
      }
}





/*
export class FormComponent implements OnInit {
v:any;
      surveyForm: FormGroup;

      get options() {
            var op=this.surveyForm.get('options') as FormArray;
      this.v={"text":op,count:0};
            console.log("GET options:"+this.v);

            return op;
      }
 h:any;
      addoptions()
{
      console.log("VVVVVVVVVVVVVVVV"+this.fb.control(''));
                        this.options.push(this.fb.control(''));
            this.addoptionscount(0);
      }
      get optionscount() {
            return this.surveyForm.get('optionscount') as FormArray;
      }

      addoptionscount(n: number) {
            this.optionscount.push(this.fb.control(n));
      }

      surveyContainer: any;

      constructor(private fb: FormBuilder) { }
      ngOnInit(): void {
            count: 0;



            this.surveyForm = this.fb.group({
                  surveyName: ['',Validators.required],
                  question_text: ['',Validators.required],
                options: this.fb.array([{}]),
                  optionscount: this.fb.array([0])



      });
}


      onSubmit() {
            console.log(this.surveyForm.value);
            console.log("XXXXXXXXXXXXXXXXXXXXXXX");
            console.log(this.surveyContainer);
      }










      export class FormComponent implements OnInit {
v:any;
      surveyForm: FormGroup;

      get options() {
            var op=this.surveyForm.get('options') as FormArray;
      this.v={"text":op,count:0};
            console.log("GET options:"+this.v);

            return op;
      }
 h:any;
      addoptions()
{
      console.log("VVVVVVVVVVVVVVVV"+this.fb.control(''));
                        this.options.push(this.fb.control(''));
            this.addoptionscount(0);
      }
      get optionscount() {
            return this.surveyForm.get('optionscount') as FormArray;
      }

      addoptionscount(n: number) {
            this.optionscount.push(this.fb.control(n));
      }

      surveyContainer: any;

      constructor(private fb: FormBuilder) { }
      ngOnInit(): void {
            count: 0;



            this.surveyForm = this.fb.group({
                  surveyName: ['',Validators.required],
                  question_text: ['',Validators.required],
                options: this.fb.array([{}]),
                  optionscount: this.fb.array([0])



      });
}


      onSubmit() {
            console.log(this.surveyForm.value);
            console.log("XXXXXXXXXXXXXXXXXXXXXXX");
            console.log(this.surveyContainer);
      }





}
*/