import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('products', [
      {
        id: 1,
        name: 'Test Product',
        description: 'Test description',
        price: 10000,
        rating: 4.5,
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/300'],
        link: 'https://kaspi.kz',
        likes: 0,
        categoryId: 1
      }
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive products input', () => {
    expect(component.products().length).toBe(1);
  });
});
