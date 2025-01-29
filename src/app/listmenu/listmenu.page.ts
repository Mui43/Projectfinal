import { Component, OnInit } from '@angular/core';
import { DatabasekruapalaiService } from '../databasekruapalai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.page.html',
  styleUrls: ['./listmenu.page.scss'],
})
export class ListmenuPage implements OnInit {

  products:any=[];

  constructor(
    private dataapi: DatabasekruapalaiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.dataapi.showlistmenu().subscribe({
      next:(data:any) => {
        this.products = data;
        console.log('products',data);
      },
      error: (error:any) => {
        console.log('error',error);
      }
    })
  }

  deletepro(id:any) {
    if (confirm('Are you sure you want to delete this image?')) {
      this.dataapi.deleteproducts(id).subscribe(
        (response: any) => {
          if (response.status === 'success') {
            alert('Image deleted successfully!');
            this.show(); // Reload the list of images
          } else {
            alert('Failed to delete image: ' + response.message);
          }
        },
        (error) => {
          console.error(error);
          alert('An error occurred while deleting the image.');
        }
      );
    }
  }
  editProduct(product: any) {
    this.router.navigate(['/editlistmenu'], {
      state: { product: product }
    });
  }

  gotoaddmenu() {
    this.router.navigate(['addmenu']);
  }
}
