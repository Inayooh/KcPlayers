import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Joueurs } from './joueurs';
import { JOUEURS } from './mock-joueurs-list';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'KcPlayers';

  joueurs: Joueurs[] = JOUEURS;

  slickCarouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  
  constructor() { }

  ngAfterViewInit() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n: number) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      slides[n].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
  }
}


