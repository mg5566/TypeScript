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

export function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const date = new Date(birthday)
    if (!isValid(date)) {
        return new InvalidDateFormatError();
    }
    if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError();
    }
    return date
}
