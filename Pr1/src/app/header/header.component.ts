import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerImage: string = '/Pr1/src/icon/header.PNG'
  constructor() { }

  ngOnInit(): void {
  }



}
