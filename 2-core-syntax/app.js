var userInput;
userInput = 5;
userInput = "Mike";
var userName;
if (typeof userInput === "string") {
    userName = userInput;
}
var generatorError = function (message, code) {
    throw { message: message, errorCode: code };
};
generatorError("an error occurred!", 500);
