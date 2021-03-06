/*
reverse.js
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку
задом наперед, используя рекурсию.

Например:
import reverse from './reverse';
reverse('str'); // rts
reverse('hexlet'); // telxeh
Попробуйте решить эту задачу используя рекурсивный процесс. Для этого вам
понадобится функция substr.

Подсказки
Чтобы узнать длину строки, используйте функцию length из модуля strings:

import { length } from './strings';

length('welcome'); // 7
Чтобы получить подстроку из строки, используйте функцию substr из модуля strings:

import { substr } from './strings';

substr('foo', 1, 2); // 'oo';
*/

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const revers = (string) => {
  if (length(string) === 0) {
    return string;
  }
  return substr(string, length(string) - 1, 1) +
   revers(substr(string, 0, length(string) - 1));
};

export default revers;
// END
