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

    Product = [
      {
        id: 1,
        name: 'Samsung Galaxy S24 Ultra',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-sm-s928bztqphl-539303750?$650_519_PNG$',
        price: 46900,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 FE',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ro/2401/gallery/ro-galaxy-s24-sm-s921blbgeue-539341925?$650_519_PNG$',
        price: 22900,
      },
      {
        id: 3,
        name: 'Samsung Galaxy Tab S10 Ultra',
        image: 'https://econtent.o2.co.uk/o/econtent/media/get/d274f152-1d06-4848-bb4f-e09b60dfe6f3',
        price: 52900,
      },
      {
        id: 4,
        name: 'Samsung Galaxy Z Fold 6',
        image: 'https://th.bing.com/th/id/R.627fb13a91b301891c11da27d87d5816?rik=jAcR6E435rXRrA&pid=ImgRaw&r=0',
        price: 63900,
      },
      {
        id: 5,
        name: 'Samsung Galaxy A06',
        image: 'https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/a/packshot-ss-galaxy-a06-lightgreen-dtac_0_3_1_2.png',
        price: 3699,
      },
      {
        id: 6,
        name: 'Samsung Galaxy A16 5G',
        image: 'https://techsmartcm.com/wp-content/uploads/2024/09/Samsung-Galaxy-A16-5G-1.png',
        price: 5990,
      },
    ];
    
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
  }

}
