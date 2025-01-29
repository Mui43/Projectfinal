import { Component, OnInit } from '@angular/core';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.page.html',
  styleUrls: ['./addmenu.page.scss'],
})
export class AddmenuPage implements OnInit {

  txtname:any;
  txtprice:any;
  selectFile:File | null = null;

  constructor(
    public dataapi: DatabasekruapalaiService,
    public router: Router,
  ) { }

  onfilechange(event: any) {
    const file = event.target.files[0];
    if(file){
      this.selectFile = file;
    }
  }

  ngOnInit() {
  }

  addproduct(){
    const formData = new FormData();
    formData.append('name', this.txtname);
    formData.append('price', this.txtprice);
    if(this.selectFile){
      formData.append('image', this.selectFile, this.selectFile.name);
    }
    this.dataapi.addmenulist(formData).subscribe(res => {
      console.log(res);
      this.txtname = ""
      this.txtprice = ""
      this.selectFile = null;
    });
    this.router.navigate(['/listmenu']);
  }
}

