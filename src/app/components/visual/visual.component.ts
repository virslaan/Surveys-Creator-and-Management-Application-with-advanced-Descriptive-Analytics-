   
import { HttpClient } from '@angular/common/http';  
import { Data } from 'src/app/data'  
import { Choice } from 'src/app/models/choice';
import {Chart} from 'chart.js';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TakeSurveyComponent } from '../take-survey/take-survey.component';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {  
  data: Data[];  
  url = 'http://192.168.1.9:8000/api/choice/';  
  Player = [];  
  Run = [];  
  barchart = [];  
  barchart2 = [];  
  barchart3 = [];  
  
  surveys: any[];
  constructor(private http: HttpClient,private surveyService : SurveyService) { }  
  ngOnInit() {  
    this.surveyService.fetchAllSurveys()
  .subscribe((res:Array<Survey>)=> {
    console.log(res);
    this.surveys = res;
  })
  
    
}
i='Loading...';
names='The Statistical Report';
view(surveyName :string)
{

  
  
  console.log("XXXXXXXXXXXX"+surveyName)
  this.http.get(this.url+surveyName).subscribe((result:Choice[]) => {  
    result.forEach(x => {  
      this.Player.push(x.choice_text);  
      this.Run.push(x.count);
this.i=(x.surveyName);
    });  
    this  
    this.barchart = new Chart('canvas', {  
      type: 'bar',  
      data: {  
        heading:this.names,
        labels: this.Player,  
        datasets: [  
          {  
            data: this.Run,  
            borderColor: '#3cba9f',  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",  
              "Blue"  
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true 
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    });  
  }); 
  this.barchart2 = new Chart('canvas2', {  
      type: 'doughnut',  
      data: {  
        labels: this.Player,  
        datasets: [  
          {  
            data: this.Run,  
            borderColor: '#3cba9f',  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",  
              "pink"  
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    });  
  

this.barchart3 = new Chart('canvas3', {  
  type: 'line',  
  data: {  
    labels: this.Player,  
    datasets: [  
      {  
        data: this.Run,  
        borderColor: '#3cba9f',  
        backgroundColor: [  
          "#3cb371",  
          "#0000FF",  
          "#9966FF",  
          "#4C4CFF",  
          "#00FFFF",  
          "#f990a7",  
          "#aad2ed",  
          "#FF00FF",  
          "Blue",  
          "Red",  
          "Blue"  
        ],  
        fill: true  
      }  
    ]  
  },  
  options: {  
    legend: {  
      display: false  
    },  
    scales: {  
      xAxes: [{  
        display: true  
      }],  
      yAxes: [{  
        display: true  
      }],  
    }  
  }  
});  

}






















}