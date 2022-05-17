import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  simpleContent = 'S';
  overlap = true;
  disabled = true;
}
