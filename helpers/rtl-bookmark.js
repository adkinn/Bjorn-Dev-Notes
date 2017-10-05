var html = document.querySelector('html'),
	body = document.querySelector('body'),
	main = document.querySelector('.mainContainer'),
	elts = [];
	
	elts.push(html);
	elts.push(body); 
	elts.push(main); 
	
for (var i = 0; i < elts.length; i++) {
	if (elts[i].getAttribute('dir') === 'ltr') {
		elts[i].setAttribute('dir', 'rtl');
	} else {
		elts[i].setAttribute('dir', 'ltr');
	}
}