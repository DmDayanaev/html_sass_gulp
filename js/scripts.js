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



while (login !== "guest") {
	var login = prompt("Введите логин");
	if (login == "guest") {
		alert ("Добро пожаловать гость");
	} else if (login == "admin"||login == "user") {
		var pas = prompt("Введите пароль");
		switch(pas) {
			case "123":
			case "777":
			case "333":	alert ("Добро пожаловать"); 
			
			login = "guest"; // вот здесь не придумал как выйте из цикла - только так, может еще как-то можно?
			
			break;
			default: alert ("Пароль не верный");
		}
	} else {
		alert ("Пользователя " +login+ " нет в системе");
	}	
}
