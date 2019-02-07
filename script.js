const a = "witaj";
const b = " Chomiczku :-)!";

// zadanie 1

{
    console.log(`${a} ${b}`)
}
{
    console.log(...a, ...b); // dlaczego wstawia spacje pomiędzy literami
}

// zadanie 2

const multiply =  (a=1, b=1) => {
    return a*b;
}
console.log(multiply(4,3));

//zadanie 3

const average = (...args) => {
    console.log('args',args);
	let sum=0;
	args.forEach(arg  => {
        console.log('arg',arg)
        console.log('sum',sum)
        sum = sum + arg;
        console.log('sum + arg', sum)
    });
    console.log('długość tablicy args to jest liczba argumentów', args.length)
	return (`Średnia podanych liczb wynosi: ${sum/args.length}`);
};

console.log(average(2,3,5,10));


// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie 5

const personalData = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, ,lastName] = personalData;
console.log(`The firstName is: ${firstName} and lastName is: ${lastName}`);