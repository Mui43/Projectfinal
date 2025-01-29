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

  constructor(
    public route: Router,
    public dataapi: DatabasekruapalaiService) {}

    login() {
      let datalog = {
        username: this.txtusername,
        password: this.txtpassword
      };
      console.log('Login Data:', datalog); // บันทึกข้อมูลการเข้าสู่ระบบ
      this.dataapi.loginUser(datalog).subscribe({
        next: (res:any) => {
          console.log('Response:', res); // บันทึกการตอบกลับ
          if (res.success) {
            localStorage.setItem('token', res.token);
            this.route.navigateByUrl('/showlistmenu');
          } else {
            alert('Error: Invalid credentials ' + res.message);
          }
        },
        error: (error) => {
          console.log('Error:', error); // บันทึกข้อผิดพลาด
          alert('Error: ' + error.message);
        }
      });
    }


  gotoregister() {
    this.route.navigate(['/register']);
  }
}
