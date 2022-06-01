import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo: string ="../assets/images/apple-touch-icon.png"
  constructor() { }

  ngOnInit(): void {
  }

}
