import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private Nav:NavController) {

  }
  gotoqeue(){
    this.Nav.navigateForward('/qeue');
}
  gotohistoey(){
  this.Nav.navigateForward('/histoey');
}
  gotohome(){
  this.Nav.navigateForward('/home');
}

  ngOnInit() {
  }

}
