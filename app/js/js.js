// Polyfill for IE11 missing NodeList.forEach 
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

// scroll up 
// window.addEventListener('scroll', function(){
//     var scrollBtn = document.querySelector('#btn__scroll'),
//     scrollUp = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollUp >= 100){
//         scrollBtn.style.display = 'block';
//         scrollBtn.classList.add('btn__scroll');
//     } else if(scrollUp < 100){
//         scrollBtn.style.display = '';
//         scrollBtn.classList.remove('btn__scroll');
//     }

//     scrollBtn.addEventListener('click', function ScrolltoTop(){
//         if(scrollUp > 0){
//             window.scrollTo(0,0);
//         } 
//     });

// });

// =============== show more

// var parentPopular = document.querySelector('.popular__block');
// if(parentPopular){
//    var childrenPopular = parentPopular.getElementsByTagName('a'),
//    btnClick = document.querySelectorAll('.btn_click');

//    for(var i = 6; i < childrenPopular.length; i++){
//       childrenPopular[i].style.display = "none";
//   }

//   btnClick.forEach(function(el){

//       el.addEventListener('click', function(){
//          for(var i = 6; i < childrenPopular.length; i++){

//             if(childrenPopular[i].style.display == "none"){
//               childrenPopular[i].style.display = "block";
//               this.innerHTML = 'show less';
//           } else {
//            childrenPopular[i].style.display = "none";
//            this.innerHTML = 'show more';
//                 }

//         }

//     });
//   });
// };

// slider подключается при определенном разрешении экрана
// function myFunction(x) {

//     if (x.matches) { 
//         var sliderTab = document.getElementById('slidertab'),
//         input = sliderTab.querySelectorAll('input'),
//         label = sliderTab.querySelectorAll('label');

//             //удаление не нужных узлов с контейнера

//             input.forEach(function(el){
//                 el.remove();
//             });

//             label.forEach(function(item){
//                 item.remove();
//             });

//         // slider добавление класса слайдера
//         sliderTab.classList.add('slider__tab', 'owl-carousel', 'owl-theme');
//     } else {
//         sliderTab.classList.remove('slider__tab', 'owl-carousel', 'owl-theme');
//     }
// }

// работа функции 
// var x = window.matchMedia("(max-width: 769px)");
// myFunction(x) 
// x.addListener(myFunction);

// $('.slider__tab').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });

// ============ popup отправки формы, успешная отправка информации или нет
// var btnSubmit = document.querySelector('.btn__submit'),
// successBlock = document.querySelector('#successfully'),
// popupSuccess = document.querySelector('.popup__successfully'),
// popupError = document.querySelector('.popup__error'),
// btnClose = document.querySelectorAll('.btn__close');


//jquery validator input checkbox - every group another
// $(function(){
//     var checkBoxMessengers = $('.checkbox__messengers :checkbox[required]');
//     checkBoxMessengers.change(function(){
//         if(checkBoxMessengers.is(':checked')) {
//             checkBoxMessengers.removeAttr('required');
//         } else {
//             checkBoxMessengers.attr('required', 'required');
//         }
//     });
// });

// $(function(){
//     var checkBoxTransaction = $('.checkbox__transaction :checkbox[required]');
//     checkBoxTransaction.change(function(){
//         if(checkBoxTransaction.is(':checked')) {
//             checkBoxTransaction.removeAttr('required');
//         } else {
//             checkBoxTransaction.attr('required', 'required');
//         }
    

// // jquery validator popup
// $(function () {
//     $('#formcont').submit(function (e) {;
//         $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
//         $('.overflow').show();
//         $('.popup__successfully').show();
//         // $('.popup__successfully').css('display', 'flex').show(); - if need display:flex;
//         e.preventDefault()
//     }); 
//     $('button.btn__close').click(function () {
//         $(this).parent().fadeOut(100);
//         $('.overflow').remove('.overflow');
//         $('#formcont input').not(':button, :submit').val('');
//         $('#formcont textarea').not(':button, :submit').val('');
//         return false;
//     });
//     $('.overflow').click(function () {
//         $('.menu__ham').hide();
//         $('#formcont input').not(':button, :submit').val('');
//         $('#formcont textarea').not(':button, :submit').val('');
//         return false;
//     });
// });

// // при клике на ревью фото, открывается попап с большей версией фото 
// // и при мобильной версии попап перестает выскакивать 

// var popupLocation = document.querySelector('.popup__location');

// if(popupLocation){
//     var popupBlock = document.querySelector('.popup'),
//     closeBlock = document.querySelectorAll('.close'),
//     fotoReviews = document.querySelectorAll('.gallery__photo_little'),
//     overFlow = document.querySelector('.overly_fix'),
//     bodyScroll = document.body;

//     function funClicFoto(){
//         popupBlock.style.display = "block";
//         overFlow.style.display = 'block';
//         bodyScroll.classList.add('body__scroll');
//     };


//     function mediaFunction(x) {
//   if (x.matches) { 
//     fotoReviews.forEach(function(el){
//         el.removeEventListener('click', funClicFoto);
//     })
// } else {
//     fotoReviews.forEach(function(el){
//         el.addEventListener('click',funClicFoto)
//     })
// }
// }

// var x = window.matchMedia("(max-width: 769px)")
// mediaFunction(x) 
// x.addListener(mediaFunction) 


// closeBlock.forEach(function(el){
//     el.addEventListener('click', function(){
//         popupBlock.style.display = "none";
//         overFlow.style.display = 'none';
//         bodyScroll.classList.remove('body__scroll');
//     })
// })

// overFlow.addEventListener('click', function(){
//     popupBlock.style.display = "none";
//     this.style.display = 'none';
//     bodyScroll.classList.remove('body__scroll');
// })

//     // большая фотографи-маленькая фотография

//     var photos = [
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     'img/dominicana_01_large.png',
//     ];

//     var fullPhoto = document.querySelectorAll('.full-photo');

//     var addFotoReviewClickHandler = function (fotoReview, photo) {
//       fotoReview.addEventListener('click', function () {
//         fullPhoto.forEach(function(it){
//             it.src = photo;
//         })
        
//     });
//   };

//   for (var i = 0; i < fotoReviews.length; i++) {
//       addFotoReviewClickHandler(fotoReviews[i], photos[i]);
//   }

// };

// height columns 

// function maxColHeight() {
//   var maxH = 0;
//   var elem = document.getElementsByClassName('tab__item');
//   for(var i = 0; i < elem.length; i++) {
//     if(maxH < elem[i].offsetHeight) {
//       maxH = elem[i].offsetHeight;
//     }
//   }
//   for(var i = 0; i < elem.length; i++) {
//     elem[i].style.height = maxH + "px";  
//   }
// }
// document.addEventListener("DOMContentLoaded", maxColHeight);



// test 

// var moreBlock = document.querySelector('.more'),
// 	blockLink = document.querySelector('.info'),
// 	link = blockLink.querySelectorAll('li'),
// 	i;

// if(moreBlock){
// 	for(i = 3; i < link.length; i++){
// 		link[i].style.display = 'none';
// 	}

// 	moreBlock.addEventListener('click', function(){
// 		for(i = 3; i < link.length; i++){
// 			if(link.length == 0){
// 				moreBlock.style.display = 'none';
// 			}
// 			link[i].style.display = 'list-item';
// 		}

// 	})
// }














// var blockTimer = document.querySelector('.block__timer'),
//     numbers = blockTimer.querySelectorAll('.number'),
//     arr = [],
//     str;
// var countdown = localStorage["currentTime"];

// console.log(countdown);

// var numbers = Array.prototype.slice.call(numbers);

// arr = numbers.map(function(el){
//     return el.innerHTML;
// });

// str = Number(arr.join(''));

// var timerId = setInterval(function tick() {

//     if(str--){
//         var a = String(str);
//     }

//     arr = a.split('');

//     for(var i = 0; i < numbers.length; i++){

//             for(var i = 0; i < arr.length; i++){
               

//                 if(arr.length < numbers.length){
//                     numbers[i].innerHTML =  arr[i];
//                    numbers[numbers.length - 1].innerHTML = '';
                    

//                 } else {
//                     numbers[i].innerHTML =  arr[i];
//                 }


//             }
//         }

// }, 1000);

// setTimeout( function() { clearInterval(timerId);}, 86400000);

// let arr = [
//   {
//     name: 'Петя',
//     age: 5
//   },
//   {
//     name: 'Лёля',
//     age: 2
//   },
//   {
//     name: 'Сима',
//     age: 3
//   }
// ];


// let getSortedArray = function(arr, age) {
  
//   for (let i = 0; i < arr.length; i++){
//     console.log(arr[i].age);
//   }

// }

// console.log(getSortedArray(arr, age));

// test

let svgProgress = document.querySelectorAll('.svg__progress');

if(svgProgress){

  function moveProgress(){
    svgProgress.forEach(function(el){
      let stroke = el.querySelector('.circle'),
      text = el.querySelector('tspan').innerHTML;

      stroke.setAttribute('stroke-dasharray', text * 10  + ', 100');
    });
  }
  moveProgress();
}


