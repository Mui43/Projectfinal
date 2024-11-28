import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-histoey',
  templateUrl: './histoey.page.html',
  styleUrls: ['./histoey.page.scss'],
})
export class HistoeyPage implements OnInit {
  mamu:any=[];//ประกาศตัวแปร อาเรย์ เพื่อรับค่า

  constructor(
    private http:HttpClient,
    public dataapi:DatabasekruapalaiService,
    private nav:NavController,
    private alertController: AlertController) {
    this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem();
  }

  loadDataMem(){
    this.dataapi.showmenu().subscribe({
      next: (res:any) => {
       console.log('Successfully',res);
       this.mamu = res;
      },
      error: (error) => {
        console.log('Error',error);
      }
    });
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
            this.delMem(id);
          },
        },
      ],
    });

    await alert.present();
  }

  async delMem(id: any) {
    this.dataapi.delMember(id).subscribe({
      next: (res: any) => {
        console.log('Successfully', res);
        this.loadDataMem(); // โหลดข้อมูลใหม่หลังจากลบ
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }

}
