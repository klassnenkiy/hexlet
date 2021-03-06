/*
smallestDivisor.js
Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта
 функция должна находить наименьший делитель заданного числа.

Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть
 больше единицы, за исключением случая, когда аргументом является единица
(наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17
Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым,
так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он
вычисляет остаток от деления одного операнда на другой. Например, 11%5 это 1, а 10%2 это 0.

Так что если x%y это 0, то y делит x без остатка.
*/
const smallestDivisor = (number) => {
  // BEGIN (write your solution here)
  const iter = (num, divisor, min) => {
    if (divisor <= 1) {
      return min;
    } else if (num % divisor === 0) {
      return iter(num, divisor - 1, divisor);
    }
    return iter(num, divisor - 1, min);
  };
  return iter(number, number - 1, number);
  // END
};
export default smallestDivisor;
