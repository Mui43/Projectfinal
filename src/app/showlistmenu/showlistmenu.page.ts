import { Component, OnInit } from '@angular/core';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-showlistmenu',
  templateUrl: './showlistmenu.page.html',
  styleUrls: ['./showlistmenu.page.scss'],
})
export class ShowlistmenuPage implements OnInit {

  menu:any = [];

  constructor(public dataapi:DatabasekruapalaiService,
    private route:Router,
    private nav:NavController,
    private alertController: AlertController) {
    this.loadDataMenu();
   }

  ngOnInit() {
    this.loadDataMenu();
  }

  loadDataMenu(){
    this.dataapi.showmenu().subscribe({
      next: (res:any) => {
       console.log('Successfully',res);
       this.menu = res;
      },
      error: (error) => {
        console.log('Error',error);
      }
    });
  }
  //ตัวแปร edit
  edit(datamem:any){
    this.dataapi.data_dateilmamu = datamem
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }

  async confirmDelete(id: any) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ',
      message: 'คุณต้องการลบรายการนี้หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel', // หากกด ยกเลิก จะไม่ทำอะไร
          handler: () => {
            console.log('การลบถูกยกเลิก');
          },
        },
        {
          text: 'ตกลง',
          handler: () => {
            // เรียกฟังก์ชันลบเมื่อกดตกลง
            this.delMenu(id);
          },
        },
      ],
    });

    await alert.present();
  }

  async delMenu(id: any) {
    this.dataapi.delMember(id).subscribe({
      next: (res: any) => {
        console.log('Successfully', res);
        this.loadDataMenu(); // โหลดข้อมูลใหม่หลังจากลบ
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }
}
