// window.onload = function() {
  var product = document.getElementsByClassName('macbook')[0];
  var counterOrder = document.getElementsByClassName('counter-order')[0];
  var yourOrder = document.getElementsByClassName('your__order')[0];
  
   function buyOrder(x,y,z) {
      console.log(x);
      var orderDiv = "<div>" + z + ' ' + "<a class='minus' id='minus' onclick='minus("+ x +",this)'> - </a><input class='imputMy' id='myInput' value ='1' type='text'><a class='plus' onclick='plus("+ x +",this)'> + </a>" + y + ' ' + "<span>" + x + "</span>" + "<i class='fa fa-times close_icon' aria-hidden='true' onclick='delProduct(this)'></i>" + "</div>" + "<div>" + "</div>";
      yourOrder.innerHTML = yourOrder.innerHTML + orderDiv;
      counterOrder.classList.add('counterOrderShow');
      window.scrollTo(0,0);
   }
    
   //function minus product
  function minus(x, Mythis) { // Mythis параметр і через this витягуємо елемент а;
    //console.log(Mythis)
    //console.log(Mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
    var myInput = Mythis.nextElementSibling;
     //console.log(Mythis.nextElementSibling.value);
    // console.log(myInput.value);
    if(myInput.value == 1) {
      alert('please enter number more 1');
      return false; //повністю зупинка
    }
    myInput.value = +myInput.value - 1;
    var countMy = Number(myInput.value) * x;
    Mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = countMy; 
  }


    // function add product
  function plus(x, Mythis) { 
    var myInput = Mythis.previousElementSibling;
    if(myInput.value == 10) {
      alert('please enter number less 10');
      return false; //повністю зупинка
    }
    myInput.value = +myInput.value + 1;
    var countMy = Number(myInput.value) * x;
    Mythis.nextElementSibling.innerHTML = countMy; 
  }

  function delProduct(el) {
    console.log(document.body.children[0]); 
    el.parentNode.remove();
    console.log(el.parentNode)
    //написати логіку коли видалений останній елемент то видаляти весь блок
  }        



// }


//caunter - менше нуля ставав неактивним та приходило повыдомлення що введыть ьыльше нуля ы пысля закриття щоб не можна було ще раз нажати ...
//подробнее о bind(),call() и apply(),reduce()



