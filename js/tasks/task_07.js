/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {
    results = []
    debugger
    for (let i = 0; i < str.length; i++) {
        if (results.length != 0 && results[results.length - 1][1] == str[i]) {
            let prev_length = results[results.length - 1][0]
            results.pop()
            results.push([prev_length + 1, str[i]])
        }
        else {
          results.push([1, str[i]])
        }
    }

    return results
}
runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW')
console.log('tet');












































































module.exports = runLengthEncoding