const contactForm = document.getElementById('contact-form');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitBtn = document.getElementById('submit-btn');

/** test F.
1-rempli tout un form
2-Envoi
3-vérifie si le retour back end bien stocké
ICI on va juste vérifier que le username s'affiche ds URL*/

const contactFormTest = () => {
	username.value = 'Paul';
	title.value = 'lorem ipsum';
	content.value = 'Esse qui qui consequat veniam elit qui do est culpa.';
	//evite une boucle:Si form pas encore envoyé alors click pr envoi/Si il ne trouve pas ds url 1 form validé
	if (!window.location.search) {
		submitBtn.click();
	}
	//Const contenant l'URL
	const queryParams = new URLSearchParams(window.location.search);
	//Si la longueur de username est > 0 return true
	if (queryParams.get('username').length > 0) {
		return true;
	}
	return false;
};

//J'affiche le résult du test
contactFormTest() ? console.info('Contact form test ok') : console.error('Contact form test failed');
