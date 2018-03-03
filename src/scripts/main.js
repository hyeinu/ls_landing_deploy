import $ from 'jquery';
import 'bootstrap';
import WebFont from 'webfontloader';
import Slick from 'slick-carousel';

let App = {

    init() {

        this.initWebFonts();
        this.initSocialMediaFeedCarousel();
        this.initTestimonialsCarousel();
    },

    initWebFonts() {
        WebFont.load({
            google: {
                families: ['Source Sans Pro:400,700'],
            },
            custom: {
                families: ['FontAwesome'],
                urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'],
            }
        });
    },

    initSocialMediaFeedCarousel() {
        $('.social-media-feed').slick({
            rows: 0,
            autoplay: true,
            arrows: false,
        });
    },

    initTestimonialsCarousel() {
        $('.testimonials').slick({
            rows: 0,
            autoplay: true,
            arrows: false,
        });
    },
};

$('document').ready(App.init());