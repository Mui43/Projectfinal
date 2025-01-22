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


  constructor(private Nav:NavController,
    public dataapi : DatabasekruapalaiService,
    private route:Router) {

   }

  ngOnInit() {
  }

  register(){
    let data = {
      username: this.txtusername,
      name: this.txtname,
      phone: this.txtphone,
      password: this.txtpassword,
      compassword: this.txtcompassword
    }
    this.dataapi.registerUser(data).subscribe({
      next: (res:any) => {
      alert(res.message);
      this.route.navigateByUrl('/home');
     },
     error: (error) => {
      console.log(error);
      alert("Register failed" + error.message);
     }
    });
  }

  gotohome(){
    this.route.navigate(['/home']);
  }
}
