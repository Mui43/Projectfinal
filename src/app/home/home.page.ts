import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txtusername: string = '';
  txtpassword: string = '';

  constructor(
    private router: Router,
    private dataapi: DatabasekruapalaiService,
    private alertController: AlertController
  ) {}

  login() {
    if (this.txtusername === 'admin' && this.txtpassword === '123456') {
      // นำทางไปยังหน้า Home ถ้าข้อมูลถูกต้อง
      this.router.navigate(['/showlistmenu']);
    } else {
      // แสดงข้อความแจ้งเตือนถ้าข้อมูลไม่ถูกต้อง
      alert('Username หรือ Password ไม่ถูกต้อง');
    }
  }
}
