'use strict'


const plusButton = document.querySelector('.gallery__button');
const plusBlock = document.querySelector('.gallery__contentThree');

plusButton.addEventListener('click', () => {
	if (plusBlock.classList.contains('none')) {
		plusBlock.classList.remove('none');
		plusBlock.classList.add('block');
		plusButton.textContent = 'Скрыть';
	} else {
		plusBlock.classList.remove('block');
		plusBlock.classList.add('none');
		plusButton.textContent = 'Загрузить еще';
	}
})

const modalWindow = document.querySelector('.modal');
document.addEventListener('click', event => {
	if (event.target.getAttribute('id') == 'open-modal') {
		document.querySelector('.modal__title').textContent = 'Оставьте заявку на консультацию';
		document.querySelector('.modal__text').textContent = 'Мы перезвоним вам в ближайшее время';
		document.querySelector('.message__button').textContent = 'Запросить звонок'
		modalWindow.classList.add('open');
		if (event.target.getAttribute('class') == 'navigation__button button') {
			document.querySelector('.modal__title').textContent = 'Оставьтe заявку на консультацию';
			document.querySelector('.message__button').textContent = 'Заказать звонок';
		} else if (event.target.getAttribute('class') == 'offer__button button') {
			document.querySelector('.modal__title').textContent = 'Заполните форму и получите информацию';
			document.querySelector('.modal__text').textContent = 'Мы вышлем ее в ближайшее время';
			document.querySelector('.message__button').textContent = 'Получить планировки и цену';
		} else if (event.target.getAttribute('class') == 'about__button button') {
			document.querySelector('.modal__title').textContent = 'Заполните форму и получите презентацию';
			document.querySelector('.modal__text').textContent = 'Мы вышлем ее в ближайшее время';
			document.querySelector('.message__button').textContent = 'Скачать презентацию';
		} else if (event.target.getAttribute('class') == 'infrastructure__button button') {
			document.querySelector('.modal__title').textContent = 'Заполните форму и свяжитесь с отделом продаж';
			document.querySelector('.modal__text').textContent = 'С вами свяжутся в скором времени';
			document.querySelector('.message__button').textContent = 'Связаться с отделом продаж';
		} else if (event.target.getAttribute('class') == 'triple__button button') {
			document.querySelector('.modal__title').textContent = 'Заполните форму и узнайте стоимость';
			document.querySelector('.modal__text').textContent = 'Мы свяжемся с вами в ближайшее время';
			document.querySelector('.message__button').textContent = 'Узнать стоимость';
		} else if (event.target.getAttribute('class') == 'subOffer__button button') {
			document.querySelector('.modal__title').textContent = 'Заполните форму и получите презентацию';
			document.querySelector('.modal__text').textContent = 'Мы вышлем ее в ближайшее время';
			document.querySelector('.message__button').textContent = 'Скачать презентацию';
		}
		else if (event.target.getAttribute('class') == 'mortgage__button button') {
			document.querySelector('.modal__title').textContent = 'Укажите свой номер и мы расчитаем ипотеку';
			document.querySelector('.modal__text').textContent = 'Сделаем это как можно быстрее';
			document.querySelector('.message__button').textContent = 'Расчитать ипотеку';
		} else if (event.target.getAttribute('class') == 'footer__button button') {
			document.querySelector('.modal__title').textContent = 'Оставьте заявку на консультацию';
			document.querySelector('.modal__text').textContent = 'Ответим как можно скорее';
			document.querySelector('.message__button').textContent = 'Получить консультацию';
		}


	}
	if (event.target.getAttribute('id') == 'close-modal') {
		modalWindow.classList.remove('open');
	}
})

document.addEventListener('keydown', event => {
	if (event.key == 'Escape') {
		modalWindow.classList.remove('open');
	}
})

document.addEventListener('click', event => {
	if (event.target.getAttribute('class') == 'modal__box') {
		modalWindow.classList.remove('open');
	}
})

const modalWindowTwo = document.querySelector('.twoModal');
document.addEventListener('click', event => {
	if (event.target.getAttribute('id') == 'twoModalClick' || event.target.getAttribute('id') == 'twoModalClickText') {
		modalWindowTwo.classList.add('open');
		document.querySelector('.twoModalClick__text').style.display = 'none';
	}

})

document.addEventListener('keydown', event => {
	if (event.key == 'Escape') {
		modalWindowTwo.classList.remove('open');
		document.querySelector('.twoModalClick__text').style.display = 'block';
	}
})

document.addEventListener('click', event => {
	if (event.target.getAttribute('class') == 'twoModal__box') {
		modalWindowTwo.classList.remove('open');
		document.querySelector('.twoModalClick__text').style.display = 'block';
	}
})
document.addEventListener('click', event => {
	if (event.target.getAttribute('id') == 'close-modal') {
		modalWindowTwo.classList.remove('open');
		document.querySelector('.twoModalClick__text').style.display = 'block';
	}
})


const mainForm = document.querySelector('.message');
mainForm.addEventListener("submit", formSend);
async function formSend(e) {
	e.preventDefault();

	let error = formValidate(mainForm);

	let formData = new FormData(mainForm);

	if (error == 0) {
		mainForm.classList.add('_sending');
		let response = await fetch('/sendmail.php', {
			method: 'POST',
			body: formData,
		})
		if (response.ok) {
			let result = await response.json();
			window.location.href = '/thanks.html'

			mainForm.reset();


		} else {
			alert("Ошибка");

		}
	} else {
		console.log(error);
	}
}

const mainFormTwo = document.querySelector('.messageTwo');
mainFormTwo.addEventListener('submit', async function (e) {
	e.preventDefault();
	let error = formValidateTwo(mainFormTwo);


	let formDataTwo = new FormData(mainFormTwo);

	if (error == 0) {

		let responseTwo = await fetch('/send.php', {
			method: 'POST',
			body: formDataTwo,
		})
		if (responseTwo.ok) {
			let resultTwo = await responseTwo.json();
			window.location.href = '/thanks.html'

			mainFormTwo.reset();


		} else {
			alert("Ошибка");

		}
	} else {
		console.log(error);
	}
})

const mainFormThree = document.querySelector('.messageThree');
mainFormThree.addEventListener('submit', async function (e) {
	e.preventDefault();

	let error = formValidateThree(mainFormThree);

	let formDataThree = new FormData(mainFormThree);

	if (error == 0) {

		let responseThree = await fetch('/sendTwo.php', {
			method: 'POST',
			body: formDataThree,
		})
		if (responseThree.ok) {
			let resultThree = await responseThree.json();
			window.location.href = '/thanks.html'

			mainFormThree.reset();


		} else {
			alert("Ошибка");

		}
	} else {
		console.log(error);
	}
})

const mainFormFour = document.querySelector('.mesageFour');
mainFormFour.addEventListener('submit', async function (e) {
	e.preventDefault();

	let error = formValidateFour(mainFormFour);

	let formDataFour = new FormData(mainFormFour);

	if (error == 0) {

		let responseFour = await fetch('/sendThree.php', {
			method: 'POST',
			body: formDataFour,
		})
		if (responseFour.ok) {
			let resultFour = await responseFour.json();
			window.location.href = '/thanks.html'

			mainFormFour.reset();


		} else {
			alert("Ошибка");

		}
	} else {
		console.log(error);
	}
})



function formValidate(mainForm) {
	let error = 0;
	let formReq = document.querySelectorAll('._req');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);


		if (input.classList.contains('_number')) {
			if (numberValidation(input)) {
				formAddError(input);
				error++;
			}
		} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
			formAddError(input);


			error++;
		} else {
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
	}
	return error;
}

function formValidateTwo(mainFormTwo) {
	let error = 0;
	let formReq = document.querySelectorAll('._reqTwo');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);


		if (input.classList.contains('_number')) {
			if (numberValidation(input)) {
				formAddError(input);
				error++;
			}

		} else {
		}
	}
	return error;
}
function formValidateThree(mainFormThree) {
	let error = 0;
	let formReq = document.querySelectorAll('._reqThree');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);


		if (input.classList.contains('_number')) {
			if (numberValidation(input)) {
				formAddError(input);
				error++;
			}

		} else {
		}
	}
	return error;
}


function formValidateFour(mainFormFour) {
	let error = 0;
	let formReq = document.querySelectorAll('._reqFour');
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);


		if (input.classList.contains('_number')) {
			if (numberValidation(input)) {
				formAddError(input);
				error++;
			}

		} else {
		}
	}
	return error;
}

function numberValidation(input) {
	return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);

}

function formAddError(input) {

	input.classList.add("_error-label");
}

function formRemoveError(input) {
	input.classList.remove("_error-label");
}




document.addEventListener('click', event => {
	if (event.target.getAttribute('id') == 'questionOne-img') {
		document.querySelector('.questionOne').style.display = 'none';
		document.querySelector('.questionTwo').style.display = 'block';
		document.querySelector('.questionTwo').style.opacity = '1'
	} else if (event.target.getAttribute('id') == 'questionTwo-img') {
		document.querySelector('.questionTwo').style.display = 'none';
		document.querySelector('.questionThree').style.display = 'block';
	} else if (event.target.getAttribute('id') == 'questionThree-img') {
		document.querySelector('.questionThree').style.display = 'none';
		document.querySelector('.modal__title').textContent = 'Укажите свой номер, чтобы получить предложение'
		document.querySelector('.modal__text').textContent = 'Оно будет готово в скором времени';
		document.querySelector('.message__button').textContent = 'Получить предложение'
		modalWindow.classList.add('open');
		document.querySelector('.questionOne').style.display = 'block';
	}
})



const buttonPrev = document.querySelector('.quiz__buttonTwo');
buttonPrev.addEventListener('click', event => {
	if (document.querySelector('.questionTwo').style.display == 'block') {
		document.querySelector('.questionTwo').style.display = 'none';
		document.querySelector('.questionOne').style.display = 'block';
	} else if (document.querySelector('.questionThree').style.display == 'block') {
		document.querySelector('.questionThree').style.display = 'none';
		document.querySelector('.questionOne').style.display = 'none';
		document.querySelector('.questionTwo').style.display = 'block';
	}

})


$(document).ready(function () {
	$("#phone").mask("8(999) 999-9999");
	$("#phone2").mask("8(999) 999-9999");
	$("#phone3").mask("8(999) 999-9999");
	$('.triple-slider').slick({
		infinity: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="slider-btn-prev"><img src="./img/icons/arrow-double-start-svgrepo-com.svg" alt="arrow-left" class="arrow-leftfor-slider"></button>',
		nextArrow: '<button class="slider-btn-next"><img src="./img/icons/arrow-double-end-svgrepo-com.svg" alt="arrow-right" class="arrow-rightfor-slider"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 450,
				settings: "unslick"
			},

		],
	});
});


lightGallery(document.querySelector('.gallery__contentOne'));
lightGallery(document.querySelector('.gallery__contentTwo'));
lightGallery(document.querySelector('.gallery__contentThree'));