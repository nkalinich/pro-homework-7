// С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
// С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
// С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
// Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.
// debugger;

sports = [
['skier','⛷'], 
['snowboarder','🏂'], 
['apple','🍎'], 
['hockey','🏒'], 
['ice skate','⛸'], 
['swimmer','🏊'], 
['surfer','🏄‍'], 
['watermelon','🍉'], 
['lemon','🍋'], 
['rowboat','🚣'], 
['bicyclist','🚴‍']
];

winter = sports.slice(0, 5);

summer = sports.slice(5, sports.length);

fruits_1 = winter.splice(2, 1);
fruits_2 = summer.splice(2, 2);
fruits = fruits_1.concat(fruits_2);


console.log("*** Winter sports ***");

for(i = 0; i < winter.length; i++) {
    console.log(winter[i].join(": "));
};

console.log(" ");
console.log("*** Summer sports ***");

for(i = 0; i < summer.length; i++) {
    console.log(summer[i].join(": "));
};

console.log(" ");
console.log("*** Fruits ***");

for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(": "));
};