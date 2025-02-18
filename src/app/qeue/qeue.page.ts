import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qeue',
  templateUrl: './qeue.page.html',
  styleUrls: ['./qeue.page.scss'],
})
export class QeuePage implements OnInit {

  datamamu:any = {};

  txtid:any;
  txtname:any;
  txtstatus:any;

  constructor(
    private alertController: AlertController,
    public dataapi: DatabasekruapalaiService,
    private route:Router,
    private nav:NavController) { }

  loadDataMenu(){
    this.dataapi.showlistme().subscribe({
      next: (res:any) => {
        console.log('Successfully',res);
          this.datamamu = res;
        },
        error: (error) => {
          console.log('Error',error);
        }
      });
    }

  addmenus(){
    let data = {
    id:this.txtid,
    name:this.txtname,
    status:this.txtstatus
    }

    this.dataapi.addmenu(data).subscribe({
      next:(res:any) =>{
        console.log("ข้อมูลถูกเพิ่ม" , res);
      },
      error:(err:any) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", err);
      }
    });
    this.clearForm();
  }

  clearForm(){
    this.txtname = '';
    this.txtstatus = '';

  }

  async showQueueNumber() {
    const alert = await this.alertController.create({
      header: 'คุณได้เพิ่มคิวเสร็จสิ้นแล้ว',
      message: `สามารถดูได้ที่ประวัติการจองคิว`,
      buttons: [{
        text: 'ยกเลิก', // ปุ่มยกเลิก
        role: 'cancel', // กำหนด role เพื่อแยกประเภท
      },
      {
        text: 'ดูประวัติ', // ปุ่มดูประวัติ
        handler: () => {
          this.nav.navigateForward('/histoey'); // ใช้ nav เพื่อนำไปหน้า 'history'
        },
      },
    ],
  });

  await alert.present();
}

  ngOnInit() {
    this.loadDataMenu();
  }


}
