// custom error type
export class InvalidDateFormatError extends RangeError {
    constructor() {
        super("Invalid date format!")
    }
}
export class DateIsInTheFutureError extends RangeError {
    constructor() {
        super("Date can't be in the future!")
    }
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime())
};

<<<<<<< HEAD
export function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const date = new Date(birthday)
    if (!isValid(date)) {
        return new InvalidDateFormatError();
    }
    if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError();
=======
/**
 * @throw {InvalidDateFormatError} 미친 사용자가 생일을 모름
 * @throw {DateIsInTheFutureError} 정신나간 타임로드
 */
export function parse(birthday: string): Date {
    const date = new Date(birthday)
    if (!isValid(date)) {
        throw new InvalidDateFormatError();
    }
    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError();
>>>>>>> 3a57e00744a7db21294e922cc3e7de0a1a3ed61c
    }
    return date
}
