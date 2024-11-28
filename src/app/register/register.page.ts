import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  datamembers:any = {};

  txtusername:any;
  txtname:any;
  txtphone:any;
  txtpassword:any;
  txtcompassword:any;


  constructor(private Nav:NavController, public dataapi : DatabasekruapalaiService , private route:Router) {

   }
   gotohome1(){
    this.Nav.navigateForward('/home')
   }

   
  ngOnInit() {
  }

}
