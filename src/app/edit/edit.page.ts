import { Component, OnInit } from '@angular/core';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  menu:any = [];
  name:any;
  created_at:any;
  status:any;

  constructor(public dataapi:DatabasekruapalaiService, private route:Router) { }

  ngOnInit() {
    this.menu = this.dataapi.data_dateilmamu;
  }

  update(){
    let upstatus = {
      id:this.menu.id,
      status:this.menu.status
    };

    this.dataapi.updatestatus(upstatus).subscribe({
      next: (res:any) => {
        console.log("ข้อมูลถูกแก้ไข", res);
      },
      error: (err:any) => {
        console.log("ไม่สามารถแก้ไขข้อมูลได้", err);
      },
    });
  }

}
