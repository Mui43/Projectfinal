import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabasekruapalaiService {

  //ประกาศตัวแปรแบบ อาเรย์ เพื่อรับค่า/show ข้อมูล
  data_dateilmamu: any=[];

  constructor(public http:HttpClient) {

  }

  //เพิ่มคิว
  addmenu(data:any){
    console.log("ค่ามาจากแอป" , data);
    return this.http.post('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/insertmamu.php', data);
   }

   //แสดงข้อมูลคิว
  showmenu(){
    return this.http.get('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/listmamu.php');
   }

  showlistme(){
    return this.http.get('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/read.php');
   }

   //ลบสมาชิก
  delMember(id:any){
    return this.http.delete('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/deletemamu.php?id='+id);
  }

  //อัปเดตสถานะผู้ใช้
  updatestatus(upstatus:any){
    return this.http.put('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/updatestatus.php',upstatus);
  }

  //ลงทะเบียนผู้ใช้
  registerUser(dataUser:any){
    return this.http.post('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/register.php', dataUser);
   }

  //เข้าสู่ระบบ
  loginUser(datalog:any){
    return this.http.post('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/login.php', datalog);
  }

  //ออกจากระบบ
  logoutUser(){
    return this.http.post('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/logout.php',{});
  }

  //เพิ่มข้อมูลเมนู
  addmenulist(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/upload.php', formData);
  }

  //แสดงเมนูอาหาร
  showlistmenu() {
    return this.http.get('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/read.php');
  }

  //ลบข้อมูลเมนู
  deleteproducts(id:number) {
    return this.http.delete('http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/deletelistmenu.php?id='+id);
  }

  //แก้ไขข้อมูลเมนู
  updateproducts(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post(`http://68vc23-ce9c8a197939f94a.ithost.pongsawadi.ac.th/edit.php`, formData); }

}
