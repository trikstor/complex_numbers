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

function cp_plusmass(num, values){
  if(num == values.length){
    values[values.length] = 0;
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

// Модуль комплексного числа, если n=2.
function cn_module(num, n, values){
  var mod = math.sqrt(values[num][0] + values[num][1], n);
  return mod;
}

// Угол при представлении комплексного числа в тригонометрической форме.
function cn_angle(num, values){
  var angle = math.tg(values[num][0] / values[num][1]);
  return angle;
}

// Сложение комплексных чисел num1 на num2 и запись результата деления в res_num, sign - знак арифметической операции.
function cn_arith(sign, num1, num2 ,res_num, values){
  var re1 = values[num1][0];
  var re2 = values[num2][0];
  var im1 = values[num1][1];
  var im2 = values[num2][1];
  
  if(sign == '+'){
    values[res_num][0] = re1+re2;
    values[res_num][1] = im1+im2;
  }
  if(sign == '-'){
    values[res_num][0] = re1-re2;
    values[res_num][1] = im1-im2;
  }
  
  return values;
}

// Возведение комплексного числа в степень, num - число, возводимое в степень, n - степень числа, res_num - индекс для результата.
function cn_pow(num, n, res_num, values){
  var re = values[num1][0];
  var im = values[num1][1];
  
  var val1 = math.pow(cp_module(re, im, 2), n)*(math.cos(cn_angle(re, im)*n)));
  var val2 = math.pow(cp_module(re, im, 2), n)*(math.sin(cn_angle(re, im)*n)));
  
  values[res_num][0] = val1;
  values[res_num][1] = val2;
  
  return value;
}

// Корень из комплексного числа, задается результирующий массив - nvalues, степень корня - i.
function cn_sqrt(num, i, values, nvalues){
  var re = values[num1][0];
  var im = values[num1][1];
  
  for(int k = 0; k < i; k++){
    var val1 = cp_module(re, im, i+2)*(math.cos(cn_angle(re, im) + 2*i*k)/i));
    var val2 = cp_module(re, im, i+2)*(math.sin(cn_angle(re, im) + 2*i*k)/i));
    
    nvalues[k][0] = val1;
    nvalues[k][1] = val2;
  }
  return nvalues;
}

// Найти противоположное значение комплексного числа.
function cn_reverse(num, res_val, values){
  values[res_val][0] = values[num][0];
  values[res_val][1] = - values[num][1];
  
  return values;
}
