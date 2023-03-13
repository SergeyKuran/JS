// // // // Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// // // // Метод checkPizza об'єкта pizzaPalace використовує this.
// // // // Метод order об'єкта pizzaPalace використовує this
// // // // Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// // // // Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// // // // Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// // // // Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// // // const pizzaPalace = {
// // //   pizzas: ["Supercheese", "Smoked", "Four meats"],
// // //   // Change code below this line
// // //   checkPizza(pizzaName) {
// // //     return this.pizzas.includes(pizzaName);
// // //   },
// // //   order(pizzaName) {
// // //     const isPizzaAvailable = this.checkPizza(pizzaName);

// // //     if (!isPizzaAvailable) {
// // //       return `Sorry, there is no pizza named «${pizzaName}»`;
// // //     }

// // //     return `Order accepted, preparing «${pizzaName}» pizza`;
// // //   },
// // //   // Change code above this line
// // // };


// // Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// // Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// // Оголошена змінна customer
// // Значення змінної customer - це об'єкт з властивостями і методами
// // Виклик customer.getDiscount() повертає поточне значення властивості discount
// // Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// // Виклик customer.getBalance() повертає поточне значення властивості balance.
// // Виклик customer.getOrders() повертає поточне значення властивості orders
// // Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// // Метод getBalance об'єкта customer використовує this
// // Метод getDiscount об'єкта customer використовує this
// // Метод setDiscount об'єкта customer використовує this
// // Метод getOrders об'єкта customer використовує this
// // Метод addOrder об'єкта customer використовує this


// // const customer = {
// //   username: "Mango",
// //   balance: 24000,
// //   discount: 0.1,
// //   orders: ["Burger", "Pizza", "Salad"],
// //   // Change code below this line
// //   getBalance() {
// //     return this.balance;
// //   },
// //   getDiscount() {
// //     return this.discount;
// //   },
// //   setDiscount(value) {
// //     this.discount = value;
// //   },
// //   getOrders() {
// //     return this.orders;
// //   },
// //   addOrder(cost, order) {
// //     this.balance -= cost - cost * this.discount;
// //     this.orders.push(order);
// //   },
// //   // Change code above this line
// // };

// // customer.setDiscount(0.15);
// // console.log(customer.getDiscount()); // 0.15
// // customer.addOrder(5000, "Steak");
// // console.log(customer.getBalance()); // 19750
// // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// // Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// // Оголошена змінна historyService
// // Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// // Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
// // Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders
// // Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// // Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// // Метод getOrdersLog об'єкта historyService використовує this
// // Метод getEmails об'єкта historyService використовує this
// // Метод getOrdersByEmail об'єкта historyService використовує this


// // const historyService = {
// //   orders: [
// //     { email: "jacob@hotmail.com", dish: "Burrito" },
// //     { email: "solomon@topmail.net", dish: "Burger" },
// //     { email: "artemis@coldmail.net", dish: "Pizza" },
// //     { email: "solomon@topmail.net", dish: "Apple pie" },
// //     { email: "jacob@hotmail.com", dish: "Taco" },
// //   ],

// //   getOrdersLog() {
// //     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// //   },
// //   getEmails() {
// //     const emails = this.orders.map(order => order.email);
// //     const uniqueEmails = new Set(emails);
// //     return [...uniqueEmails];
// //   },
// //   getOrdersByEmail(email) {
// //     return this.orders.filter(order => order.email === email);
// //   },

// // };


// // Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// // Оголошена змінна parent
// // Значення змінної parent - це об'єкт
// // Виклик parent.hasOwnProperty("surname") повертає true
// // Виклик parent.hasOwnProperty("heritage") повертає true
// // Оголошена змінна child
// // Значення змінної child - це об'єкт
// // Виклик child.hasOwnProperty("name") повертає true
// // Звернення до child.name повертає "Jason"
// // Виклик child.hasOwnProperty("age") повертає true
// // Звернення до child.age повертає 27
// // Виклик child.hasOwnProperty("surname") повертає false
// // Звернення до child.surname повертає "Moore"
// // Виклик child.hasOwnProperty("heritage") повертає false
// // Звернення до child.heritage повертає "Irish"
// // Виклик parent.isPrototypeOf(child) повертає true
// // Використовується метод Object.create()


// // const parent = {
// //   name: "Stacey",
// //   surname: "Moore",
// //   age: 54,
// //   heritage: "Irish",
// // };
// // // Change code below this line

// // const child = Object.create(parent);

// // // Change code above this line
// // child.name = "Jason";
// // child.age = 27;



// // Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// // Оголошена змінна ancestor
// // Значення змінної ancestor - це об'єкт.
// // Оголошена змінна parent
// // Значення змінної parent - це об'єкт.
// // Оголошена змінна child
// // Значення змінної child - це об'єкт.
// // Виклик ancestor.isPrototypeOf("parent") повертає true
// // Виклик parent.isPrototypeOf("child") повертає true
// // Виклик ancestor.hasOwnProperty("surname") повертає true
// // Звернення до ancestor.surname повертає "Dawson"
// // Виклик parent.hasOwnProperty("surname") повертає true
// // Звернення до parent.surname повертає "Moore"
// // Виклик child.hasOwnProperty("surname") повертає false
// // Звернення до child.surname повертає "Moore"
// // Виклик ancestor.hasOwnProperty("heritage") повертає true
// // Звернення до ancestor.heritage повертає "Irish"
// // Виклик parent.hasOwnProperty("heritage") повертає false
// // Звернення до parent.heritage повертає "Irish"
// // Виклик child.hasOwnProperty("heritage") повертає false
// // Звернення до child.heritage повертає "Irish"
// // Використовується метод Object.create()


// // const ancestor = {
// //   name: "Paul",
// //   age: 83,
// //   surname: "Dawson",
// //   heritage: "Irish",
// // };
// // // Change code below this line

// // const parent = Object.create(ancestor);
// // parent.name = "Stacey";
// // parent.surname = "Moore";
// // parent.age = 54;

// // const child = Object.create(parent);
// // child.name = "Jason";
// // child.age = 27;

// // // Change code above this line


// // Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// // Оголошений клас Car
// // Результат виклику new Car() - це порожній об'єкт

// // class Car{}


// // Додай класу Car метод constructor, який приймає три параметри:

// // brand - марка автомобіля.
// // model - модель автомобіля.
// // price - ціна автомобіля.
// // Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// // Оголошений клас Car
// // Клас Car має метод constructor
// // В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// // В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// // В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }


// // class Car {
// //   constructor(brand, model, price){
// //   this.brand = brand;
// //     this.model = model;
// //     this.price = price;
// //   }
// // };

// // console.log(new Car("Audi", "Q3", 36000));


// // Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// // Оголошений клас Car
// // Клас Car має метод constructor
// // В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// // В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// // В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }


// // class Car {
  
// //   constructor({brand, model, price}) {
// //     this.brand = brand;
// //     this.model = model;
// //     this.price = price;
// //   }

// // };
// // console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));



// // Додай класу Car два методи.

// // getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// // changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
// // В класі Car оголошений метод getPrice
// // Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// // В класі Car оголошений метод changePrice
// // Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// // class Car {
// //   constructor({ brand, model, price }) {
// //     this.brand = brand;
// //     this.model = model;
// //     this.price = price;
// //   }
// //   // Change code below this line
// // getPrice(){
// //   return this.price;
// // }
  
// // changePrice(newPrice){
// // return this.price = newPrice;
// // }

// //   // Change code above this line
// // }


// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// // Оголоси наступні методи класу:

// // getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// // addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// // removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// // Оголошений клас Storage
// // В класі Storage оголошений метод getItems
// // В класі Storage оголошений метод addItem
// // В класі Storage оголошений метод removeItem
// // Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// // Метод addItem змінює властивість items екземпляра класу, який його викликає
// // Метод removeItem змінює властивість items екземпляра класу, який його викликає
// // В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// // Об'єкт storage містить властивість items
// // Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// // Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]


// // class Storage{
// //    constructor(items) {
// //     this.items = items;
// //   }
// //   getItems(){
// //     return this.items;
// //   }
// //   addItem(newItem){
// //     this.items.push(newItem);
// //   }
// //     removeItem(itemToRemove) {
      
// //       this.items.splice(this.items.indexOf(itemToRemove),1);

// //   }
// // };

// // const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// // Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// // Оголоси наступні методи класу:

// // getValue() - повертає поточне значення властивості value.
// // padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// // padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// // padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.




// // Оголошений клас StringBuilder
// // В класі StringBuilder оголошений метод getValue
// // Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padEnd
// // Метод padEnd змінює властивість value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padStart
// // Метод padStart змінює властивість value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padBoth
// // Метод padBoth змінює властивість value екземпляра класу, який його викликає
// // В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// // Об'єкт builder містить властивість value
// // Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// // Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// // Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// // Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=
// class StringBuilder{
//   constructor(value) {
    
//     this.value = value;
    
//   }
  
//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padEnd(srt) {
//     this.value += srt;
//   }

//   padBoth(str) {
//     this.value = str + this.value;
//     this.value += str;
//   }

// }




// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// // console.log(1);
// // function addName(callback) {
// //   let name = prompt(`Please, enter your name`);
// //   let surname = prompt(`Please enter your surmane`);
// //   callback(name);
// //   callback(surname);
// // };

// // function names(name) {
// //   console.log(`Hello, ${name}!`);
// // };

// // function surName(surname) {
// // console.log(`Hello ${name}, ${surname}`);
// // };

// // // function allName(allName) {
// // // console.log(`Hello ${allName}, ${names}, ${surName}`);
// // // };

// // addName(surName)

// // function greetGuest(greeting) {
// //   console.log(`${greeting}, ${this.name}.`);
// // }

// // const mango = {
// //   name: "Sergey",
// // };
// // const poly = {
// //   name: "Kuran",
// // };

// // greetGuest.call( mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// // greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.


// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// mango.email = "mango@suail.com";

// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email);

// // class User{

//   name;
//   #email;

//   constructor(name, email){
//     this.name = name;
//     this.#email = email;
//   }
  
//     getEmail(){
//       return this.#email;
//     }

//     chahgeEmail(newEmail){
//       this.#email;
//     }
// }

// const mango = new User({
//   name: 'Sergey',
//   email: 'kuran.serg@gmail.com',
// });

// mango.chahgeEmail('12345321@gmail.com');
// console.log(mango.getEmail());


// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));


// class Car {
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if ((newPrice <= Car.MAX_PRICE)) {
//       this.#price = newPrice;
//     }
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price){
//     return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   }  // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User{ 
//   static AccessLevel = {
//   BASIC: "basic", 
//   SUPERUSER: "superuser"
//   }
// }


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(email, accessLevel) {
//   super(email)
//   this.accessLevel = accessLevel;
// }
  
  
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"



// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email){
//     this.blacklistedEmails.push(email);
    
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.some(el => el === email);
//   }
 
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const person = {
//   name: 'Mango',
// };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// };

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));


// document.parentNode
// document.childNodes


// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const lastChield = document.querySelector('.menu-item');
// lastChield.style.color = 'red';

// console.log(lastChield);

// const list = document.querySelector('ul');
// console.log(list.classList);
// list.classList.add('green')
// console.log(list);
// list.classList.add('orange');
// list.classList.add('tomato');
// console.log(list);
// list.classList.remove('red');
// list.classList.remove('green')
// list.classList.contains('red')
// list.classList.contains('blue')
// console.log(list);

// console.log(list.classList.contains("tomato"));
// console.log(list.classList.contains('red'));
// console.log(list.classList.contains('blue'));

// list.classList.forEach(el => console.log(el === 'tomato'))

// list.classList.toggle('id');

// console.log(list);

// list.classList.toggle('id');
// console.log(list);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach((el) =>  {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   })

//   return commonElements;

// }

// console.log(getCommonElements([1,3,4,5],[2,44, 3,333,4,33]));


//  Додаткове завдання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// class Toggle {
//   constructor({isOpen = on}) {
//     this.isOpen = isOpen;
//   }
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// const form = document.querySelector('.js-form');
// const signIn = document.querySelector('.js-in');
// const title = document.querySelector('.js-title');

// form.addEventListener('submit', onSubmit)
// signIn.addEventListener('submit', onSignIn)
// const users = [];

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// function onSubmit(evt) {
//     evt.preventDefault()
//     const {
//         name,
//         email
//     } = evt.currentTarget.elements

//     users.push(new User(name.value, email.value))
//     console.log(users);
// }

// function onSignIn(evt) {
//     evt.preventDefault();
//     const {
//         email
//     } = evt.currentTarget.elements;
//     const result = users.find(({
//         email: userEmail
//     }) => email.value === userEmail);
//     console.log(result);
//     if (result) {
//         title.textContent = result.name
//     }
// }

// const button = document.querySelector('.my-button');

// button.addEventListener('click', () => {
//   console.log('Button add clicked');
// })

// const button = document.querySelector('.my-button')

// const buttonFunc = (event) => {
//   console.log('event',event);
//   console.log('event.type',event.type);
//   console.log('event.currentTarget',event.currentTarget);
// };

// button.addEventListener('click', buttonFunc);

// // const button = document.querySelector(".my-button");

// // const handleClick = (event) => {
// //   console.log("event: ", event);
// //   console.log("event type: ", event.type);
// //   console.log("currentTarget: ", event.currentTarget);
// // };

// // button.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;
  const test = select.options;
for (const tests of test) {
  console.log(tests.value);
}
  console.log(select.value);
  console.log(select.selectedIndex);
  console.log(select.options);
  console.log(select.options[selectedOptionIndex].text);
  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

