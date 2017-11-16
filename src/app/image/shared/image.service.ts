import { Injectable } from "@angular/core";

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    {"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/image1.jpg"},
    {"id": 2, "category": "boats", "caption": "Test Caption", "url": "assets/img/image2.jpg"},
    {"id": 3, "category": "boats", "caption": "Test Caption", "url": "assets/img/image3.jpg"},
    {"id": 4, "category": "New York", "caption": "Test Caption", "url": "assets/img/image4.jpg"},
    {"id": 5, "category": "New York", "caption": "Test Caption", "url": "assets/img/image5.jpg"},
    {"id": 6, "category": "New York", "caption": "Test Caption", "url": "assets/img/image6.jpg"},
    {"id": 7, "category": "New York", "caption": "Test Caption", "url": "assets/img/image7.jpg"},
    {"id": 8, "category": "Fun", "caption": "Test Caption", "url": "assets/img/image8.jpg"},
    {"id": 9, "category": "Fun", "caption": "Test Caption", "url": "assets/img/image9.jpg"},
    {"id": 10, "category": "Fun", "caption": "Test Caption", "url": "assets/img/image10.jpg"},
    {"id": 11, "category": "Tour", "caption": "Test Caption", "url": "assets/img/image11.jpg"},
    {"id": 12, "category": "Tour", "caption": "Test Caption", "url": "assets/img/image12.jpg"},
    {"id": 13, "category": "Tour", "caption": "Test Caption", "url": "assets/img/image13.jpg"},
    {"id": 14, "category": "Tour", "caption": "Test Caption", "url": "assets/img/image14.jpg"},
    {"id": 15, "category": "Tour", "caption": "Test Caption", "url": "assets/img/image15.jpg"}
    
]