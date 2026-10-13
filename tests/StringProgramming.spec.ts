import { test, expect } from "@playwright/test";

test("Reverse string", async ({ page }) => {
    let str: string = "Hello"; 6
    let rev: String = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }

    console.log("Reverse string is :", rev);
})

test("Reverse a string", async ({ page }) => {

    let str: string = "hello";

    let rev: string = "";

    for (let i = str.length - 1; i >= 0; i--) {

        rev = rev + str[i];
    }

    console.log(rev)


})


test("Pallindrom string", async ({ page }) => {

    let pall: string = "level";
    let outPall: string = "";

    for (let i = pall.length - 1; i >= 0; i--) {

        outPall = outPall + pall[i];
    }

    if (pall == outPall) {
        console.log(pall, "is the pallindrom string");
    } else {
        console.log(pall, "is not a pallindrom string");
    }
})


test("palli string", async ({ page }) => {


    let palli: string = "level";
    let outPall: string = "";

    for (let i = palli.length - 1; i >= 0; i--) {

        outPall = outPall + palli[i]
    }

    if (palli == outPall) {

        console.log(palli, "is the Pallindrom  string")
    } else {

        console.log(palli, "is the not the Pallindrom  string")

    }
})


test("Pallindrom string11", async ({ page }) => {

    let pallindrom: string = "madam";

    let rev: string = "";

    for (let i = pallindrom.length - 1; i >= 0; i--) {

        rev = rev + pallindrom[i];
    }

    console.log(rev)
})

test("Reverse a string Mahshhsh", async ({ page }) => {

    let strRev: string = "Ajinkya";

    let rev: string = "";

    for (let i = strRev.length - 1; i >= 0; i--) {

        rev = rev + strRev[i];
    }

    console.log(rev);
})


test("Check Pallindrom string", async ({ page }) => {

    let pallistring: string = "madam1";
    let palliOutput: string = "";

    for (let i = pallistring.length - 1; i >= 0; i--) {

        palliOutput = palliOutput + pallistring[i];
    }

    if (pallistring == palliOutput) {

        console.log(pallistring, "is a Pallindrom string");
    } else {

        console.log(pallistring, "is a not Pallindrom string");
    }

});


test("count vowels from a string", async ({ page }) => {

    let str: string = "automation";
    let count: number = 0;

    for (let i = 0; i <= str.length - 1; i++) {

        if (str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u") {

            count++;
        }

    }
    console.log("Count Vowels in the string is:", count);

})

test("count consonants in the string is", async ({ page }) => {

    let str: string = "automation";

    let count: number = 0;

    for (let i = 0; i <= str.length - 1; i++) {
        if (!"aeiou".includes(str[i])) {

            count++;
        }
    }

    console.log("consonants in the string is:", count);
})

test("Find duplicates in the string is", async ({ page }) => {

    let str: string = "programming";
    let dup: string = ""

    for (let i = 0; i <= str.length - 1; i++) {

        for (let j = i + 1; j <= str.length - 1; j++) {

            if (str[i] === str[j]) {

                console.log("Duplicates in the string is:", str[i]);
                dup = dup + str[i];
                break;
            }
        }
    }

    console.log("Dupliace string is:", dup);
})

test("Count vowels from the given string", async ({ page }) => {

    let count: number = 0;

    let str: string = "automation";

    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] === 'a' || str[i] === 'e' || str[i] === "i" || str[i] === "o" || str[i] === "u") {

            count++;
        }
    }

    console.log("Total number of consonents in the string is:", count);
})

test("Count vowels in the string", async ({ page }) => {

    let str3: string = "welcome";
    let count: number = 0;

    for (let i = str3.length - 1; i >= 0; i--) {

        if (str3[i] == "a" || str3[i] == "e" || str3[i] == "i" || str3[i] == "o" || str3[i] == "u") {

            count++;
        }
    }

    console.log("Vowels in the string is:", count)
})

test("consonents in the string is", async ({ page }) => {

    let str: string = "automation";
    let count: number = 0;
    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] >= "a" &&
            str[i] <= "z" &&
            !"aeiou".includes(str[i])
        ) {
            count++;
        }

        console.log("Consonents in the string is:", count);
    }

})

test("Duplicate Characters", async ({ page }) => {

    let str: string = "programming";

    for (let i = 0; i <= str.length - 1; i++) {

        for (let j = i + 1; j <= str.length - 1; j++) {

            if (str[i] === str[j]) {

                console.log("Duplicate characters in the string is:", str[i]);
                break;
            }
        }
    }
})


test("Duplicate characters in the string is", async ({ page }) => {

    let str1: string = "automation";

    for (let i = 0; i <= str1.length - 1; i++) {

        for (let j = i + 1; j <= str1.length - 1; j++) {

            if (str1[i] === str1[j]) {

                console.log("Duplicate characters in the steing is:", str1[i]);
                break;
            }
        }
    }
})

test("Removed Duplicate characters in the string is", async ({ page }) => {

    let str: string = "programming";
    let result: string = "";

    for (let i = 0; i <= str.length - 1; i++) {

        if (!result.includes(str[i])) {

            result = result + str[i];
        }
    }

    console.log(result);

})

test("count vowels in the string is", async ({ page }) => {
    let str: string = "automated";
    let count: number = 0;

    for (let i = 0; i <= str.length - 1; i++) {

        if ("aeiou".includes(str[i])) {

            count++;
        }
    }

    console.log("count vowels from the string is:", count);
})

test("count consonents in the string is", async ({ page }) => {
    let str: string = "automated";
    let count: number = 0;

    for (let i = 0; i <= str.length - 1; i++) {

        if (!"aeiou".includes(str[i])) {

            count++;
        }
    }

    console.log("count consonents from the string is:", count);
})

test("Removed duplicate Characters", async ({ page }) => {

    let str: string = "programming";
    let result: string = "";

    for (let i = 0; i <= str.length - 1; i++) {

        if (!result.includes(str[i])) {


            result = result + str[i];
        }
    }

    console.log(result);
})

test("First Non Repeated Characters", async ({ page }) => {

    let str: string = "swiss";
    let count: number = 0;

    for (let i = 0; i <= str.length - 1; i++) {

        for (let j = 0; j <= str.length - 1; j++) {

            if (str[i] === str[j]) {

                count++;
            }
        }

        if (count === 1) {

            console.log("First non-repeated character:", str[i]);
            break;
        }
    }
})


test("Reverse words in the string", async ({ page }) => {

    let str: string = "Hello world QA";

    let words: string[] = str.split(" ");

    console.log(words);  // [ 'Hello', 'world', 'QA' ]

    let result: string = "";

    for (let word of words) {

        let reverse: string = "";

        for (let i = word.length - 1; i >= 0; i--) {

            reverse = reverse + word[i];
        }

        result = result + reverse + " ";

    }

    console.log(result);

})


test("Reverse string duplicate", async ({ page }) => {

    let str: string = "sentense should be proper";

    let result: string = "";

    let words: string[] = str.split(" ");

    console.log(words) //[ 'sentense', 'should', 'be', 'proper' ]

    for (let word of words) {

        let reverse: string = "";

        for (let i = word.length - 1; i >= 0; i--) {

            reverse = reverse + word[i];
        }

        result = result + reverse + " ";
    }

    console.log(result);

})