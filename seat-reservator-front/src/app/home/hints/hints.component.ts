import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/homeService';
@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.css']
})
export class HintsComponent implements OnInit {
   hints: string = '';

  
  constructor(private homeService: HomeService) {
   }
  
  
  ngOnInit(): void {
  }
  
}
