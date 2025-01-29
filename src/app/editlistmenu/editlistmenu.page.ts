import { Component, OnInit } from '@angular/core';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editlistmenu',
  templateUrl: './editlistmenu.page.html',
  styleUrls: ['./editlistmenu.page.scss'],
})
export class EditlistmenuPage implements OnInit {

  product: { id: string; name: string, price: string, image: File | null } = { id: '', name: '', price: '', image: null };
  originalProduct: { id: string; name: string, price: string } = { id: '', name: '', price: '' };

  constructor(
    private dataapi: DatabasekruapalaiService,
    private router: Router,
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { product: any };
    if (state && state.product) {
      this.product = { ...state.product };
      this.originalProduct = { id: state.product.id, name: state.product.name, price: state.product.price };
    }
  }

  onFileChange(event: any) {
    this.product.image = event.target.files[0];
  }

  updateProduct() {
    const formData = new FormData();
    formData.append('id', this.product.id);
    if (this.product.name) {
      formData.append('name', this.product.name);
    }
    if (this.product.price) {
      formData.append('price', this.product.price);
    }

    if (this.product.image && this.product.image instanceof File) {
      formData.append('image', this.product.image, this.product.image.name);
    } else {
      console.warn('Image is not a valid File object:', this.product.image);
    }

    this.dataapi.updateproducts(formData).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          alert('ข้อมูลสินค้าถูกอัปเดตแล้ว');
          this.router.navigate(['/listmenu']);
        } else {
          alert('ข้อมูลสินค้าถูกอัปเดตแล้ว');
          this.router.navigate(['/listmenu']);
        }
      },
      (error) => {
        console.error(error);
        alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูล');
      }
    );
  }

  cancelEdit() {
    this.router.navigate(['/listmenu']);
  }

}
