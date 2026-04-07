import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list.component/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  selectedCategoryId: number | null = null;

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Accessories' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 256GB',
      description: 'A modern smartphone with strong performance, a bright display, and a reliable camera system for daily use.',
      price: 429990,
      rating: 4.8,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_apple_iphone_15_256gb_black_mtp63_274377_1.jpg',
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_apple_iphone_15_256gb_black_mtp63_274377_1.jpg',
        'https://static.tildacdn.com/stor3266-3266-4136-a630-336533386430/70384156.png',
        'https://s.yimg.com/ny/api/res/1.2/EJRM8Kcs2xLAaBzsi1iD8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://s.yimg.com/os/creatr-uploaded-images/2023-09/2eaa28d0-5985-11ee-bffe-2f1914f1b198'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-nanosim-esim-chernyi-113137897/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Apple iPhone 15 Pro 128GB',
      description: 'A premium smartphone with fast performance, a high-quality camera, and a durable modern design.',
      price: 529990,
      rating: 3.9,
      image: 'https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished.png?v=1755515069&width=1445',
      images: [
        'https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished.png?v=1755515069&width=1445',
        'https://5.imimg.com/data5/SELLER/Default/2024/1/376375181/XC/GV/WT/203384211/refurbished-boat-earphones.jpg',
        'https://optim.tildacdn.pro/tild6239-3562-4638-b636-313332623165/-/resize/824x/-/format/webp/noroot.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-nanosim-esim-seryi-113138184/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'A flagship smartphone with a large display, premium build quality, and excellent performance for demanding tasks.',
      price: 649990,
      rating: 4.4,
      image: 'https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished_Gray.png?v=1755515103&width=416',
      images: [
        'https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished_Gray.png?v=1755515103&width=416',
        'https://cdn.mos.cms.futurecdn.net/hgaVb9brq7aUN8S3mmWQwQ.jpg',
        'https://assets.content.technologyadvice.com/638301306990061297_807d64a259.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-nanosim-esim-seryi-113138420/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 256GB',
      description: 'A high-end Android smartphone with a premium display, smooth performance, and a clean modern interface.',
      price: 389990,
      rating: 2.7,
      image: 'https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha',
      images: [
        'https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha',
        'https://images.samsung.com/id/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true',
        'https://helios-i.mashable.com/imagery/articles/02Va1OgEPT0IMmPml6m250v/hero-image.fill.size_1248x702.v1705516319.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra 256GB',
      description: 'A premium Android flagship with a large screen, powerful hardware, and advanced camera capabilities.',
      price: 589990,
      rating: 4.8,
      image: 'https://www.tech-tiger.co.uk/cdn/shop/files/samsung-galaxy-s24-ultra-5g-1754221.png?v=1769449520',
      images: [
        'https://www.tech-tiger.co.uk/cdn/shop/files/samsung-galaxy-s24-ultra-5g-1754221.png?v=1769449520',
        'https://www.lbtechreviews.com/wp-content/uploads/2024/02/SamsungGalaxyS24Ultra_TOP-1080x608.jpeg',
        'https://sm.pcmag.com/t/pcmag_me/review/s/samsung-ga/samsung-galaxy-s24-ultra_66pv.1200.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-podarok-116004797/',
      likes: 0,
      categoryId: 1
    },

    {
      id: 6,
      name: 'MacBook Air 13 M2 2022',
      description: 'A lightweight laptop with long battery life and strong performance for studying, work, and coding.',
      price: 599990,
      rating: 4.9,
      image: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_3337_0_1_fpsgoL.webp',
      images: [
        'https://object.pscloud.io/cms/cms/Photo/img_0_62_3337_0_1_fpsgoL.webp',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'MacBook Air 13 M3 2024',
      description: 'A fast and portable laptop with a sharp display and efficient performance for daily productivity.',
      price: 679990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p09/29101834.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p09/29101834.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h18/85669726912542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf7/85669727174686.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'MacBook Air 15 M3 2024',
      description: 'A larger, premium laptop with solid battery life and a comfortable screen for multitasking.',
      price: 899990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h23/86171267694622.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h23/86171267694622.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hc6/86171267727390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h99/hb1/86490877952030.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-16-gb-ssd-512-gb-macos-mxd43-119975059/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'ASUS VivoBook',
      description: 'A practical laptop for study and office work with a modern design and balanced performance.',
      price: 329990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p80/77609965.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p80/77609965.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p80/77609967.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pca/p80/77609969.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=ASUS%20VivoBook',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Lenovo IdeaPad',
      description: 'A reliable laptop for students with a comfortable keyboard, simple design, and stable daily performance.',
      price: 309990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p72/47566813.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p72/47566813.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p72/47566814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe6/p72/47566817.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20IdeaPad',
      likes: 0,
      categoryId: 2
    },

    {
      id: 11,
      name: 'AirPods Pro 2nd generation',
      description: 'Wireless earbuds with strong noise cancellation, premium sound, and comfortable everyday use.',
      price: 129990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/h7a/64511116378142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/hce/64511118704670.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'AirPods Pro MagSafe',
      description: 'Popular premium earbuds with active noise cancellation and a compact charging case.',
      price: 119990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/hb5/64136921219102.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/hb5/64136921219102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/h26/64136923578398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/he9/64136925511710.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-with-magsafe-charging-case-belyi-102891649/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Sony WH-1000XM5',
      description: 'Over-ear headphones with premium comfort, strong sound quality, and excellent noise cancellation.',
      price: 219990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Sony%20WH-1000XM5',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'JBL Tune 770NC',
      description: 'Comfortable wireless headphones with long battery life and a balanced sound for everyday use.',
      price: 69990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hfb/82302375985182.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h43/hfb/82302375985182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h48/82302376509470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/hd7/82302377033758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=JBL%20Tune%20770NC',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Compact wireless earbuds with clean sound, comfortable fit, and convenient mobile integration.',
      price: 89990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p0f/115244421.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p0f/115244421.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p19/p0f/115244424.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p0c/115244431.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Galaxy%20Buds2%20Pro',
      likes: 0,
      categoryId: 3
    },

    {
      id: 16,
      name: 'Apple Watch Series 9',
      description: 'A stylish smartwatch with fitness tracking, notifications, and useful everyday features.',
      price: 219990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h0b/83874224865310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h87/83874224930846.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Apple%20Watch%20Series%209',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'JBL Flip 6',
      description: 'A portable Bluetooth speaker with strong sound and simple controls for indoor and outdoor listening.',
      price: 69990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1a/86377643474974.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1a/86377643474974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h87/86377643507742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h71/86377643540510.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=JBL%20Flip%206',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Power Bank',
      description: 'A practical portable battery for charging devices on the go with a compact and simple design.',
      price: 14990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/63928980275230.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/63928980275230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h51/63928983191582.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Power%20Bank',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Logitech MX Master 3S',
      description: 'A premium wireless mouse with ergonomic design and smooth performance for work and study.',
      price: 59990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h51/64417186480158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/ha1/64417188675614.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Logitech%20MX%20Master%203S',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Kindle Paperwhite',
      description: 'A compact e-book reader with long battery life and a display that is comfortable for reading.',
      price: 89990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p19/9505829.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p07/p19/9505829.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/pbc/9505830.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/pb5/9505832.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Kindle%20Paperwhite',
      likes: 0,
      categoryId: 4
    }
  ];

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) {
      return [];
    }

    return this.products.filter(
      (product) => product.categoryId === this.selectedCategoryId
    );
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}