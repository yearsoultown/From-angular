import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card.component/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  delete = output<number>();

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }
}