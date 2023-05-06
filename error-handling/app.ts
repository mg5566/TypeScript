import { DateIsInTheFutureError, InvalidDateFormatError, parse } from "./parse_date";

<<<<<<< HEAD
/*
=======
>>>>>>> 3a57e00744a7db21294e922cc3e7de0a1a3ed61c
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
<<<<<<< HEAD
*/

let result = parse('12345');
/*
if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
}
else if (result instanceof DateIsInTheFutureError) {
  console.error(result.message)
}
*/
if (result instanceof Error) {
  console.error(result.message);
} else {
  console.info('Date is', result.toISOString());
}
=======
>>>>>>> 3a57e00744a7db21294e922cc3e7de0a1a3ed61c
