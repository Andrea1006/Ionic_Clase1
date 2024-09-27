import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tostada',
  templateUrl: './tostada.page.html',
  styleUrls: ['./tostada.page.scss'],
})
export class TostadaPage implements OnInit {
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
    console.log("hola")
  }

}
