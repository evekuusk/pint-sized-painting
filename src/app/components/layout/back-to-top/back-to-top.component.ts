import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  goToTop(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#main-nav').offset().top
    }, 400);
  }

  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      var scrollTop = $(window).scrollTop();
      var backToTopPoint = 900
      if ($(window).outerWidth() < 1300) {
        backToTopPoint = 700
      } else if ($(window).outerWidth() < 800) {
        backToTopPoint = 500
      }
        if (scrollTop >= backToTopPoint) {
          $('#back-to-top').fadeIn('fast');
        } else {
          $('#back-to-top').fadeOut('fast');
        }
    }


  constructor() { }

  ngOnInit() {



  }

}
