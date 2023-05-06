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

/*
let date = parse("2023-05-06");
date.map(_ => _.toISOString()).forEach(_ => console.info('Date is', _));
*/

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

flatten(
  ask().map(parse))
  .map(date => date.toISOString())
  .forEach(_ => console.info('Date is', _))
