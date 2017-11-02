// window.onload = function() {
  var product = document.getElementsByClassName('macbook')[0];
  var counterOrder = document.getElementsByClassName('counter-order')[0];
  var yourOrder = document.getElementsByClassName('your__order')[0];
  var mainAllCount = 0; //змінна куди заносяться загальна кількість продуктів
  var myChanges = 0;//змінна куди заносяться всі додавання та видалення основних продуктів(великих)
  var changeDiv = document.getElementsByClassName('myallCount')[0]; //загальна змінна куди будуть виводитись загальна сума віднімання та додовання в html
   
  function buyOrder(x,y,z) {
    //console.log(x);
    var orderDiv = "<div>" + z + ' ' + "<a class='minus' id='minus' onclick='minus("+ x +",this)'> - </a><input class='imputMy' id='myInput' value ='1' type='text'><a class='plus' onclick='plus("+ x +",this)'> + </a>" + y + ' ' + "<span>" + x + "</span>" + "<i class='fa fa-times close_icon' aria-hidden='true' onclick='delProduct(this)'></i>" + '<span>' + '</span>' + "</div>";
    mainAllCount = mainAllCount + 1;//плюс один загальний товар
    yourOrder.innerHTML = yourOrder.innerHTML + orderDiv;
    counterOrder.classList.add('counterOrderShow');
    window.scrollTo(0,0);
    myChanges = myChanges + x;//додає ціну при кліку на кнопку оформить заказ
    changeDiv.innerHTML = myChanges;//виводить в хтмл
    console.log(myChanges);
  } 
    
   //function minus product
  function minus(x, Mythis) { // Mythis параметр і через this витягуємо елемент а;
    //console.log(Mythis)
    //console.log(Mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
    var myInput = Mythis.nextElementSibling;// знаходить елемент а(-)
     //console.log(Mythis.nextElementSibling.value);
    // console.log(myInput.value);
    if(myInput.value == 1) {
      alert('please enter number more 1');
      return false; //повністю зупинка
    }
    myInput.value = +myInput.value - 1;//зменшує щоччик по кліку мінус
    var countMy = Number(myInput.value) * x;//зменшує ціну продукту
    Mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = countMy; //вивід в хтмл
    myChanges = myChanges - x;//зменшення загальної ціни
    changeDiv.innerHTML = myChanges;//запис в хтмл
  }


    // function add product
  function plus(x, Mythis) { 
    var myInput = Mythis.previousElementSibling;// знаходить елемент а(+)
    if(myInput.value == 10) {
      alert('please enter number less 10');
      return false; //повністю зупинка
    }
    myInput.value = +myInput.value + 1;//збільшує щоччик при кліку на кнопку плюс
    var countMy = Number(myInput.value) * x;//збільшує ціну за продукт при кліку
    Mythis.nextElementSibling.innerHTML = countMy; //виводить в хтмл
    //var addAllCount = Number(myInput.value) * x;//
    myChanges = myChanges + x;//збільшує загальну кількість ціни по кліку на щоччик
    changeDiv.innerHTML = myChanges;//виводить зашальну ціну по кліку на щоччик
     
  }

  function delProduct(el) {

    //console.log(el.previousElementSibling.innerHTML);
    el.parentNode.remove(); //видалення поточного діва продукту
    mainAllCount = mainAllCount - 1; //перемінна куди заноситься загально весь товар і тут при кожному закритті іконки буде віднімати товар
    myChanges = myChanges - el.previousElementSibling.innerHTML;
    // var changeDiv = document.getElementsByClassName('myallCount')[0]; 
    changeDiv.innerHTML = myChanges;//додавання нашої суми в html
    if(mainAllCount == 0) { //якщо не залишилось товарів, то видаляти останній блок
      counterOrder.classList.remove('counterOrderShow');
    }
    //написати логіку коли видалений останній елемент то видаляти весь блок
  }        



// }


//caunter - менше нуля ставав неактивним та приходило повыдомлення що введыть ьыльше нуля ы пысля закриття щоб не можна було ще раз нажати ...
//подробнее о bind(),call() и apply(),reduce()



