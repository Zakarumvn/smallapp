import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeText : String;


  constructor( private homeService: HomeService) {

  }

  ngOnInit() {
    this.homeService.getAll().subscribe(data => {
      this.homeText = data;
    });
  }

}
