import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-dl',
  templateUrl: './learning-dl.component.html',
  styleUrl: './learning-dl.component.css'
})
export class LearningDLComponent implements OnInit {

constructor( private http:HttpClient){}



  ngOnInit(): void {
    
  }

}
