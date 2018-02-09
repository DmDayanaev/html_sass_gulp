var age = prompt("Сколько вам лет?", 16);
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