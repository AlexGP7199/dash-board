import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderGaleryComponent } from '../../components/sliderGalery/sliderGalery.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [
    CommonModule,
    SliderGaleryComponent
  ],
  template: `



  <h2 class="text-5xl pt-10 font-bold flex justify-center" > Awesome Galery</h2>
  <div class="container mx-auto px-4 py-2">
  <div class=" pt-8 pb-8">
  <form class="max-w-md mx-auto">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<app-slider-galery class="mt-8"></app-slider-galery>

  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      *ngFor="let image of filteredImages()"
      class="relative group overflow-hidden rounded-lg shadow-lg"
    >
      <img
        [src]="image.url"
        [alt]="image.title"
        class="w-full h-60 object-cover transform group-hover:scale-110 transition duration-300"
        (click)="openModal(image)"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
      >
        <h3 class="text-white text-lg font-semibold">{{ image.title }}</h3>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    *ngIf="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    (click)="closeModal()"
  >
    <div
      class="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full"
      (click)="$event.stopPropagation()"
    >
      <img
        [src]="selectedImage.url"
        [alt]="selectedImage.title"
        class="w-full h-auto"
      />
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">{{ selectedImage.title }}</h2>
        <p class="text-gray-700">{{ selectedImage.description }}</p>
      </div>
      <div class="flex justify-end p-4">
        <button
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          (click)="closeModal()"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</div>



  `,
  styleUrl: './Galery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class GaleryComponent {

  ngOnInit() {
    initFlowbite();
  }

  searchQuery: string = '';
  selectedImage: any

  images: any[] = [
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      category: 'Naturaleza',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      title: 'Imagen 2',
      description: 'Descripción de la imagen 2',
      category: 'Arquitectura',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      category: 'Naturaleza',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      title: 'Imagen 2',
      description: 'Descripción de la imagen 2',
      category: 'Arquitectura',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      category: 'Naturaleza',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      title: 'Imagen 2',
      description: 'Descripción de la imagen 2',
      category: 'Arquitectura',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      category: 'Naturaleza',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      title: 'Imagen 2',
      description: 'Descripción de la imagen 2',
      category: 'Arquitectura',
    },
    // Añade más imágenes según sea necesario
  ];

  filteredImages(): any[] {
    if (!this.searchQuery) {
      return this.images;
    }
    return this.images.filter((image) =>
      image.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  openModal(image: any): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }


 }
