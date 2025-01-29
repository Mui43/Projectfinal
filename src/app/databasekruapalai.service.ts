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
    return this.http.post('http://127.0.0.1/2-3/apiproject/insertmamu.php', data);
   }

   //แสดงข้อมูลคิว
  showmenu(){
    return this.http.get('http://127.0.0.1/2-3/apiproject/listmamu.php');
   }

   //ลบสมาชิก
  delMember(id:any){
    return this.http.delete('http://127.0.0.1/2-3/apiproject/deletemamu.php?id='+id);
  }

  //อัปเดตสถานะผู้ใช้
  updatestatus(upstatus:any){
    return this.http.put('http://127.0.0.1/2-3/apiproject/updatestatus.php',upstatus);
  }

  //ลงทะเบียนผู้ใช้
  registerUser(dataUser:any){
    return this.http.post('http://127.0.0.1/2-3/apiproject/register.php', dataUser);
   }

  //เข้าสู่ระบบ
  loginUser(datalog:any){
    return this.http.post('http://127.0.0.1/2-3/apiproject/login.php', datalog);
  }

  //ออกจากระบบ
  logoutUser(){
    return this.http.post('http://127.0.0.1/2-3/apiproject/logout.php',{});
  }

  //เพิ่มข้อมูลเมนู
  addmenulist(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post('http://127.0.0.1/2-3/apiproject/upload.php', formData);
  }

  //แสดงเมนูอาหาร
  showlistmenu() {
    return this.http.get('http://127.0.0.1/2-3/apiproject/read.php');
  }

  //ลบข้อมูลเมนู
  deleteproducts(id:number) {
    return this.http.delete('http://127.0.0.1/2-3/apiproject/deletelistmenu.php?id='+id);
  }

  //แก้ไขข้อมูลเมนู
  updateproducts(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post(`http://127.0.0.1/2-3/apiproject/edit.php`, formData); }

}
