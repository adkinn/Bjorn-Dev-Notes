var dirs = Array.from(document.querySelectorAll('[dir]'));
	
for (var i = 0; i < dirs.length; i++) {
	if (dirs[i].getAttribute('dir') === 'ltr') {
		dirs[i].setAttribute('dir', 'rtl');
	} else {
		dirs[i].setAttribute('dir', 'ltr');
	}
}