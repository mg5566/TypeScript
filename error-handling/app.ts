import { DateIsInTheFutureError, InvalidDateFormatError, parse } from "./parse_date";

try {
  let date = parse('12345');

  console.info('Date is', date.toISOString());
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError){
    console.error(e.message);
  } else {
    throw e;
  }
}
