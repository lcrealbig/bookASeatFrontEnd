import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/homeService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  showHints(){
    this.router.navigate(['/hints']);
    return this.homeService.showHints();
  }

  bookASeat(){}




  ngOnInit(): void {
  }

}
