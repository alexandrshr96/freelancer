$(document).ready(function(){
  
        $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1000);
        });
        
        $(function() {
            $(window).scroll(function() {           
              if($(this).scrollTop() != 0) {           
                $('#toTop').fadeIn();           
              } else {           
                $('#toTop').fadeOut();          
              }           
            });           
            $('#toTop').click(function() {           
              $('body,html').animate({scrollTop:0},800);          
            });           
          });
    
        $('.how_it_works-slider').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 1
            }
          }
        ]
        });
      });

      $(document).ready(function(){
        $('.price-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 1
            }
          }
        ]
        });

        $('.client-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              prevArrow: '<button class="prev"></button>',
              nextArrow: '<button class="next"></button>',
              slidesToScroll: 1
            }
          }
        ]
        });

      });