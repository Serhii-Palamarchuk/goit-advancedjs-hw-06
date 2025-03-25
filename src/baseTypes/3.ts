let some:unknown;
some = 'Text';
let str: string;

// Оскільки some має тип unknown, TypeScript не дозволяє напряму присвоювати
// його значення змінній типу string без перевірки чи явного приведення типу
// можна ще через type assertion - str = some as string; але потрібно бути впевненим, що some має тип string
if (typeof some === 'string') {
  str = some;
}

export {};