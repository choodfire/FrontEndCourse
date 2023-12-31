/*
* Классическая задача, которую можно встретить на собеседованиях самого разного уровня.
*  Стоит напомнить, что последовательность Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих.
*  Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
*
* Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности,
*  причем n — число, которое передается в качестве аргумента функции.
*
* Эта задача включает прохождение по циклу такое количество раз,
*  которое указано в аргументе, с возвратом значения на соответствующей позиции. Этот способ постановки задачи требует использования циклов.
*  Вы можете использовать рекурсию
* */

function fibonacci(num) {
    let n1 = 0
    let n2 = 1
    for (let i = 0; i < num; i++) {
        let old_n1 = n1
        n1 = n2
        n2 = old_n1 + n2
    }

    
    return n1
}













































module.exports = fibonacci