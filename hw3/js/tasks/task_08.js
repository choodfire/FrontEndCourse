/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */
function formatDuration (seconds) {
    if (seconds === 0) {
        return 'now'
    }
    var years   = units(seconds, 31536000, "year"),
        days    = units(years.remainder, 86400, "day"),
        hours   = units(days.remainder, 3600, "hour"),
        minutes = units(hours.remainder, 60, "minute"),
        secs    = units(minutes.remainder, 1, "second");
    var arr = [years, days, hours, minutes, secs];
    arr = arr.filter(function(item){
      return !!item.value;
    });

    var result = arr[0].str;
    if ( arr.length === 1){return result;}

    for ( var i = 1; i < arr.length - 1; i++ ){
      result = result + ", " + arr[i].str;
    }
    result = result + " and " + arr[arr.length-1].str;
    return result;
  }  

  var units = function(numerator, divisor, unit){
    var result = {};
    result.value = Math.floor(numerator / divisor);
    result.remainder = numerator - result.value * divisor;
    if (result.value === 0){return result;}

    result.str  = ""+result.value+" "+unit;
    if (result.value > 1) result.str = result.str + "s";
    return result;
}



















































































































module.exports = formatDuration