function isValid(date: Date): boolean {
  return Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime());
}

function parse(birthday: string): Date[] {
  let date = new Date(birthday);

  if (!isValid(date)) {
    return [];
  }
  return [date];
}

function ask() {
  let result = prompt("When is your birthday?");
  if (result === null) {
    return [];
  }
  return [result];
}

function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat.apply([], array);
}

/*
Some container 를 구현한다.
ask()
  .flatten(parse)
  .flatten(date => new Some(date.toISOString()))
  .flatten(date => new Some('Date is ' + date))
  .getOrError('Error parsing date for some reason');
*/

interface Option<T> {
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Option<U>): Option<U>;
  getOrElse(message: T): T;
}

class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Some<U>): Some<U> {
    return f(this.value);
  }
  getOrElse(): T {
    return this.value;
  }
}
class None implements Option<never> {
  flatMap(): None {
    return this;
  }
  getOrElse<U>(message: U): U{
    return message;
  }
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
  if (value == null) {
    return new None;
  }
  return new Some(value);
}
