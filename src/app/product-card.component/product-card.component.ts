import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  delete = output<number>();

  selectedImage = '';
  currentImageIndex = 0;

  ngOnInit(): void {
    const images = this.product().images;

    if (images.length > 0) {
      this.selectedImage = images[0];
      this.currentImageIndex = 0;
    } else {
      this.selectedImage = this.product().image;
    }
  }

  getStars(rating: number): string {
    const fullStars = Math.round(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  }

  likeProduct(): void {
    this.product().likes += 1;
  }

  deleteProduct(): void {
    this.delete.emit(this.product().id);
  }

  changeImage(image: string): void {
    this.selectedImage = image;
    this.currentImageIndex = this.product().images.indexOf(image);
  }

  prevImage(): void {
    const images = this.product().images;
    if (images.length === 0) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex - 1 + images.length) % images.length;
    this.selectedImage = images[this.currentImageIndex];
  }

  nextImage(): void {
    const images = this.product().images;
    if (images.length === 0) {
      return;
    }

    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
    this.selectedImage = images[this.currentImageIndex];
  }

  shareOnWhatsApp(): void {
    const message = `Check out this product: ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}
