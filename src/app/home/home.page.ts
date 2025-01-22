import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txtusername:any;
  txtpassword:any;

  constructor(private Nav:NavController,
    public dataapi: DatabasekruapalaiService,
    public route: Router
  ){}

  login() {
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword
    }
    this.dataapi.loginUser(datalog).subscribe({
      next: (res:any) => {
      if (res.success) {
        localStorage.setItem('token',res.token);
        this.route.navigateByUrl('/showlistmenu');
      }else{
        alert('Error: Invalid credentials' + res.message);
      }
     },
     error: (error) => {
      console.log(error);
      alert('Error: ' +error.message);
     }
    });
  }
  gotoregister(){
  this.Nav.navigateForward('/register');
  }
}
