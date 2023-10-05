// Labtest question 1

const MIXED_ARRAY = ["PIZZA", 10, true, 25, false, "Wings"];

let lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 0) {
            let result = arr.filter((item) => {
                return typeof item === "string";
            });
            resolve(result.map((item) => item.toLowerCase()));
        } else {
            reject("The array is empty");
        }
    });
}

lowerCaseWords(MIXED_ARRAY)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
    