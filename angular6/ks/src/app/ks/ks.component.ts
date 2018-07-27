import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ks',
  templateUrl: './ks.component.html',
  styleUrls: ['./ks.component.css']
})
export class KsComponent implements OnInit {

  newcomponent = "Entered in new component created";
  constructor() { }

  ngOnInit() {
  }

}
