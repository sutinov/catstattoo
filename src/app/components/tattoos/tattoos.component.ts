import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { map } from 'rxjs/operators';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
//   img: string;
// }

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.scss'],
  animations: [
    trigger('routerAnimations', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TattoosComponent implements OnInit {
  items: GalleryItem[];

  imageData = data;

  @ViewChild('itemTemplate') itemTemplate;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  test(e) {
    console.log(e);
  }

  ngOnInit(): void {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/img/1.jpg',
    previewUrl: 'assets/img/1.jpg',
  },
  {
    srcUrl: '../../../assets/img/2.jpg',
    previewUrl: '../../../assets/img/2.jpg',
  },
  {
    srcUrl: '../../../assets/img/3.jpg',
    previewUrl: '../../../assets/img/3.jpg',
  },
  {
    srcUrl: '../../../assets/img/4.jpg',
    previewUrl: '../../../assets/img/4.jpg',
  },
  {
    srcUrl: '../../../assets/img/5.jpg',
    previewUrl: '../../../assets/img/5.jpg',
  },
  {
    srcUrl: '../../../assets/img/6.jpg',
    previewUrl: '../../../assets/img/6.jpg',
  },
  {
    srcUrl: '../../../assets/img/7.jpg',
    previewUrl: '../../../assets/img/7.jpg',
  },
  {
    srcUrl: '../../../assets/img/8.jpg',
    previewUrl: '../../../assets/img/8.jpg',
  },
  {
    srcUrl: '../../../assets/img/9.jpg',
    previewUrl: '../../../assets/img/9.jpg',
  },
  {
    srcUrl: '../../../assets/img/10.jpg',
    previewUrl: '../../../assets/img/10.jpg',
  },
  {
    srcUrl: '../../../assets/img/11.jpg',
    previewUrl: '../../../assets/img/11.jpg',
  },
];
