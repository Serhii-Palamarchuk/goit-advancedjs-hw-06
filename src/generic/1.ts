/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

export { };


/* більш детальний варіант реалізації, але так як в завданні не було вказано, що функція має бути універсальною, то варто використовувати варіант вище

function getPromise<T>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<[string, number]>().then((data) => {
  console.log(data);
});

*/