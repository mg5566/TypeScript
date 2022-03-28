let userInput: unknown;
userInput = 5;
userInput = "Mike";

let userName: string;
if (typeof userInput === "string") {
  userName = userInput;
}

const generatorError = (message: string, code: number): never => {
  throw { message: message, errorCode: code }
}

generatorError("an error occurred!", 500);
