import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('product', {
      id: 1,
      name: 'Test Product',
      description: 'Test description',
      price: 10000,
      rating: 4.5,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/301',
        'https://via.placeholder.com/302'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase likes', () => {
    component.likeProduct();
    expect(component.product().likes).toBe(1);
  });
});
