// let kolvo;
// let lvl;
// let playerName;

// while (true) {
//   console.log(`Привет, привет! Я - Кактус! Отличный ведущий игры "Правда или действие"!`);
//   while (true) {
//     kolvo = Number(prompt(`Итак! Сколько участников будет играть? (Максимум - 10 человек)`));

//     if (isNaN(kolvo) || kolvo < 2 || kolvo > 10) {
//       console.log(`Ой... Давай попробуем ещё раз!`);
//       asa = 0; // Повторяем ввод, если данные неверны
//       continue;
//     }
//     break;
//   }
//   while (true) {
//     lvl = Number(prompt(`На каком уровне сложности хотите играть? 1 - Легкий, 2 - Средний, 3 - Сложный`));

//     if (isNaN(lvl) || lvl < 1 || lvl > 3) {
//       console.log(`Упс! Такого уровня сложности у нас нет(`); // Повторяем ввод, если данные неверны
//       continue;
//     }
//     break;
//   }

//   // Массив для хранения имён игроков
//   let players = [];
//   // Запрашиваем имена игроков
//   for (let i = 0; i < kolvo; i++) {
//     playerName = prompt(`Как зовут игрока под номером ${i + 1}?`);
//     if (!playerName.trim()) {
//       console.log(`Повтори пожалуйста, как мне обращаться к игроку ${i + 1}? `);
//       i--;
//       continue;
//     }

//     players.push(playerName); // Добавляем имя в массив
//     console.log(`Добро пожаловать в игру, ${playerName}!`);
//   }
//   let summePleyers = players.length + 1;
//   console.log(`Игра начинается! Участвуют: ${players.join(", ")}. Всего ${summePleyers} участников!`);
//   console.log(`Выбранный уровень сложности: ${lvl}`);
//   break;
// }

users = ["Ваня", "Иштван"];
users.push("Оля");

console.log(users);

users[1] = "Ruk";
console.log(users);

console.log(users.shift());
console.log(users);

users.unshift("Маша", "Паша");
console.log(users);

console.log(users.splice(0, 1));

console.log(users.join(","));

let str = "2,5,17,46";
kopiUsers = str.split(",");

console.log(kopiUsers);
