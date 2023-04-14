// 1. Implement a capitalise function
const capitalise = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalise("hEllo"));
console.log(capitalise("avGeroU"));


//2. Implement a swapcase function
const swapcase = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(swapcase("JournAl"));
console.log(swapcase("lAfOSSEaCADEMY"));


//3a. Implement 2 reverse functions, using a for statement
const reverse1 = str => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}

console.log(reverse1("olleh"));
console.log(reverse1("tpircSavaJ"));


//3b. Implement 2 reverse functions, using a for in statement
const reverse2 = str => {
    let result = '';
    for (let i in str) {
        result = str[i] + result;
    }
    return result;
}

console.log(reverse2("olleh"));
console.log(reverse2("tpircSavaJ"));


//4. Implement an upcase function using Array.prototype.forEach()
const upcase = arr => {
    const result = [];
    arr.forEach(char => {
        result.push(char.toUpperCase());
    });
    return result;
}

console.log(upcase(["a", "b", "c", "d"]));


//5. Implement downcase using Array.prototype.map()
const downcase = arr => {
    return arr.map(char => char.toLowerCase());
}

console.log(downcase(["A", "B", "C", "D"]));


//6. Implement evens using Array.prototype.filter()
const evens = arr => {
    return arr.filter(num => num % 2 === 0);
}

console.log(evens([1, 2, 3, 45, 79, 8]));

//7. Implement howIndex using Array.prototype.indexOf()
const howIndex = arr => {
    return arr.indexOf('how');
}

console.log(howIndex(['hello', 'how', 'are', 'you']));


//8. Implement a third reverse function using Array.prototype.join() and String.prototype.split() (not necessarily in that order)

const reverse3 = str => {
    return str.split('').reverse().join('');
}

console.log(reverse3("olleh"));
console.log(reverse3("tpircSavaJ"));


//9. Implement max and shortestString using Array.prototype.reduce()
const max = arr => {
    return arr.reduce((maxValue, currentValue) => {
        return currentValue > maxValue ? currentValue : maxValue;
    }, arr[0]);
}

const shortestString = arr => {
    return arr.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, arr[0]);
}

console.log(max([1, 297, -73, 99, 10]));
console.log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']));


//10. Implement a sort function without using Array.prototype.sort()
const sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const result = ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'May', 'November', 'October', 'September'];

console.log(sort(months));
console.log(sort(months).toString() === result.toString())


//11. Implement sortedNames Using Array.prototype.sort()
const sortedNames = arr => {
    return arr.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};

console.log(sortedNames(["Ree", "romeo", "emile", "sergi"]));


//12. Implement countLetters that will print
const countLetters = sentence => {
    const letters = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');
    return letters.reduce((acc, letter) => {
        if (acc[letter]) {
            acc[letter]++;
        } else {
            acc[letter] = 1;
        }
        return acc;
    }, {});
}

console.log(countLetters("Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks"));    
