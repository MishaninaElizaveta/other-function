document.addEventListener('DOMContentLoaded', function () {

  /* Setect */

  const element = document.querySelector('select');

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
    placeholderValue: 'Материал',
    renderSelectedChoices: 'null',
    resetScrollPosition: false,
    removeItemButton: true,
  });



  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);


  /* Map */


  ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("myMap1", {
        center: [48.872185073737896, 2.354223999999991],
        zoom: 15,
        controls: []
      });

      var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {
        hintContent: 'Париж, X округ Парижа, улица дю Фобур Сен Дени  54'
      },
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/myMap1.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-3, -42],
        });

      myMap.geoObjects.add(myPlacemark);
    }


  /* Form */

  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  new JustValidate('.form', {
    colorWrong: '#FF5C00',
    rules: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()

          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },

      tooltip: {
        fadeOutTime: 5000
      }
    },

    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Введите 2 и более символов',
        maxLength: 'Запрещено вводить более 30 символов'
      },
      tel: {
        required: 'Вы не ввели телефон',
        function: 'Введите номер из 10 цифр'
      },
      email: {
        required: 'Вы не ввели e-mail',
        email: 'Введите корректный e-mail (введите символ "@")'
      }
    },
  })


})
