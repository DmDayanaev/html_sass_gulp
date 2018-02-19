var age = prompt("Сколько вам лет?");
if (age >= 18) {
	var confirm = confirm("Готовы ли Вы посетить сайт?");
		if (confirm) {
			alert ("Вам "+ age + " лет.");
		} else {
			alert ("До свидание.");
			window.location.href = "https://google.com";
		}
} else {
			alert ("Тебе еще рано.");
			window.location.href = "https://google.com";
		}

/* Добавить на страницу модальное окно проверки логина, если логин совпадет с одним из списка - admin, user то предложить ввести пароль если пароль совпадет с одним из списка - 123, 777, 333, то вывести сообщение - Добро пожаловать {имя пользователя}!

если пароль введен неверно то выводить сообщение - Пароль неверный

если в поле логина ввести guest то выводить ‘Добро пожаловать гость!’ и не спрашивать пароль

в случае если введено любое другое значение, выводить сообщение ‘Пользователя {введенный текст логина} нет в системе’ */

while (login !== "guest") {
	var login = prompt("Введите логин");
	if (login == "guest") {
		alert ("Добро пожаловать гость");
	} else if (login == "admin"||login == "user") {
		var pas = prompt("Введите пароль");
		switch(pas) {
			case "123":
			case "777":
			case "333":	alert ("Добро пожаловать " +login); 
			
			login = "guest"; // вот здесь не придумал как выйте из цикла - только так, может еще как-то можно?
			
			break;
			default: alert ("Пароль не верный");
		}
	} else {
		alert ("Пользователя " +login+ " нет в системе");
	}	
}

/*var login = prompt("Введите логин");

function checkPassword() {
	var pas = prompt("Введите пароль");
	switch(pas) {
			case "123":
			case "777":
			case "333":	alert ("Добро пожаловать " +login"); 
			break;
			default: alert ("Пароль не верный");
		}
}

switch(login) {
    case 'admin':
    case 'user':
         checkPassword();
		 break;
	case 'guest': alert ("Добро пожаловать гость"); break;
	default: alert ("Пользователя " +login+ " нет в системе");

}*/
