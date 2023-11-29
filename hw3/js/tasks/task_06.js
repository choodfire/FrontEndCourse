/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
    results = new Map(Object.entries(results));
    actual_results = []

    let sorted_results = new Map([...results.entries()].sort((a, b) => b[1] - a[1]));

    sorted_results.forEach(function(key, index) {
      if (key > 59) {
          actual_results.push(index)
      }
    })

    return actual_results
}











































































module.exports = myLanguages

