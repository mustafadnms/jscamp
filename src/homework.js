function findPrime(...numbers) {
    let result = []

    numbers.forEach(number => {
        if (primeNumber(number)) {
            result.push("Asal : " + number)
        }else{
            result.push("Asal Değil: " + number)
            
        }
    });
    return result
}

function primeNumber(number) {
    if(number < 2){
        return false
    }else{
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
        return true
    }

}
console.log(findPrime(1,12,2,24,25,29))

////////////////////////////////////

function friendNumber(number1, number2) {
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            total2 = total2 + i
        }
    }

    if (number1 == total2 && number2 == total1) {
        console.log("Bu sayılar arkadaş sayılardır")
    }else{
        console.log("Bu sayılar arkadaş sayı değildir")
    }
}
friendNumber(220,284)

//////////////////////////////////////

function perfectNumber() {
    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total = total + j
            }
        }

        if (i == total) {
            console.log(i + " Mükemmel Sayıdır")
        }
    }
}
perfectNumber()

///////////////////////////////////////

function primeNumber2() {
    for (let i = 2; i < 1000; i++) {
        if (primeNumber(i) == true) {
            console.log(i + " Asal Sayıdır")
        }
 
    }
}
primeNumber2()