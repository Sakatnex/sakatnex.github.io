let name = document.querySelector('#name');
let login = document.querySelector('#login');
let mail = document.querySelector('#mail');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let rpassword = document.querySelector('#rpassword');
let button = document.querySelector('#button');
let google = document.querySelector('#google');

let users = {};

function User(name, login, mail, password, rpassword, phone) {
	this.name = name;
	this.login = login;
	this.mail = mail;
	this.phone = phone;
	this.password = password;
	this.rpassword = rpassword
}

function createId(users) {
	return Object.keys(users).length;
}

button.addEventListener('click', () => {
	const nameUser = name.value;
	const loginUser = login.value;
	const mailUser = mail.value;
	const phoneUser = phone.value;
	const passwordUser = password.value;
	const rpasswordUser = rpassword.value;

	if (nameUser == "",  loginUser == "", mailUser == "", phoneUser == "", passwordUser == "", rpasswordUser == "" || passwordUser != rpasswordUser || mailUser.includes("@") == false)
	{
		alert(`Не все поля заполнены или заполнены неправильно!`)
	}
	else 
	{
		const user = new User(nameUser, loginUser, mailUser, phoneUser, passwordUser, rpasswordUser);

		const userId = 'User' + createId(users);
		users[userId] = user;

		console.log(users);

		alert(`${nameUser} (или же ${loginUser}), вы успешно прошли регистрацию!`)

	}
})

google.addEventListener('click', () => {
	alert(`Это не настоящая кнопка входа через Google!`)
})
