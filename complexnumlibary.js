// Создание массива для хранения quantity комплексных чисел.
function cn_start(quantity){
  var values = new array();
  
  for(var i = 0; i < quantity; i++){
    values[i] = new array();
    
    for(var j = 0; j < quantity; j++){
      values[i][j] = 0;
     }
   }
   return values;
}

// Создание комплексного числа с индефикатором num и действительной частью re и мнимой частью im.
function cn_new(num, re, im, values){
  values[num][0] = re;
  values[num][1] = im;
return values;
}
// Печать в консоль комплексного числа с индефикатором num.
function cn_log(num, values){
  console.log("val",count," = (", values[num][0], " + i", values[num][1], ")\n");
}

// Деление комплексных чисел num1 на num2 и запись результата деления в res_num.
function cn_divide(num1, num2, res_num, values){
  var re1 = values[num1][0];
  var re2 = values[num2][0];
  var im1 = values[num1][1];
  var im2 = values[num2][1];
  
  values[res_num][0] = (re1*re2 - im1*im2)/(math.pow(im1, 2) + math.pow(im2, 2));
  values[res_num][1] = (im1*re2 - re1*im2)/(math.pow(im1, 2) + math.pow(im2, 2));
  
  return values;
}

// Умножение комплексных чисел num1 на num2 и запись результата деления в res_num.
function cn_multipli(num1, num2 ,res_num, values){
  var re1 = values[num1][0];
  var re2 = values[num2][0];
  var im1 = values[num1][1];
  var im2 = values[num2][1];
  
  values[res_num][0] = re1*re2 - im1*im2;
  values[res_num][1] = re1*im2 + im1*re2;
  
  return values;
}

// Печать числа в тригонометрической форме в элемент с id, требуются библиотеки Jquery и Flot.
function cn_print(num, id, values){
  $(function () {
    var re = values[num][0];
    var im = values[num][1];
    var d1 = [[0,0], [re, im]];
    
    $.plot($("#"+id), [d1]);
  });
}
