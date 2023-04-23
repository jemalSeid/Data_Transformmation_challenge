//Question #1 
const numbers = [5, 9, 8, 2, 4];
const squares = numbers.map((number) => number ** 2);
console.log(squares);//output: [25,81,64,4,16]

//Question #2

const books = [
    { title: 'It Starts with Us', author: 'Colleen Hoover' },
    { title: 'The Last Thing He Told Me', author: 'Laura Dave' },
    { title: 'Simply Lies', author: 'David Baldacci' },
    { title: 'I Will Find You', author: 'Harlan Coben' },
    { title: 'Trust', author: 'Hernan Diaz' }
  ];
  
  const bookTitles = books.map(book => book.title);
  
  console.log(bookTitles); //output:['It Starts with Us', 'The Last Thing He Told Me', 'Simply Lies', 'I Will Find You', 'Trust']
  
  //Question #3

const numbers2 = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const evenNumbers= numbers2.filter(number => number % 2 === 0);

console.log(evenNumbers) //output: [6, 8, 10, 12, 14, 16, 18, 20]


//Question #4

const books2 = [
  { title: 'It Starts with Us', author: 'Colleen Hoover', pages:350 },
  { title: 'The Last Thing He Told Me', author: 'Laura Dave',pages:450 },
  { title: 'Simply Lies', author: 'David Baldacci',pages:200 },
  { title: 'I Will Find You', author: 'Harlan Coben', pages:130},
  { title: 'Trust', author: 'Hernan Diaz',pages:500 },
  { title: 'New Day', author: 'Herman Cho',pages:590 },
  { title: 'Three Days', author: 'Jemal Husen',pages:900 }
];

const NumberOfPages = books2.filter(book =>book.pages >300)
console.log(NumberOfPages)

//Question #5

const newNumbers = [1,2,3,4,5,6,7,8,9];
function myFunc(total, num) {
  return total + num;
}

const sum = newNumbers.reduce(myFunc);
console.log(sum)//output:45

//Question #6

const books3 = [
  { title: 'It Starts with Us', author: 'Colleen Hoover', pages:350 },
  { title: 'The Last Thing He Told Me', author: 'Laura Dave',pages:450 },
  { title: 'Simply Lies', author: 'David Baldacci',pages:200 },
  { title: 'I Will Find You', author: 'Harlan Coben', pages:130},
  { title: 'Trust', author: 'Hernan Diaz',pages:500 },
  { title: 'New Day', author: 'Herman Cho',pages:590 },
  { title: 'Three Days', author: 'Jemal Husen',pages:900 }
];

const summ = books3.reduce((acc, book) => acc + book.pages,0)
console.log(summ)//output:3120


