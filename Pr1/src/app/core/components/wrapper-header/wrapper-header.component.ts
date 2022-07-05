import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-header',
  templateUrl: './wrapper-header.component.html',
  styleUrls: ['./wrapper-header.component.scss']
})
export class WrapperHeaderComponent implements OnInit {
  public logo: string = '../assets/images/apple-touch-icon.png';

  constructor() { }

  ngOnInit(): void {
  }

}
