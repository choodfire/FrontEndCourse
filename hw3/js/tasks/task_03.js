/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount += 1
        }
    }

    return vowelsCount
}












































module.exports = getVowelsCount