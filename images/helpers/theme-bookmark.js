var list = document.querySelector('html').classList;

if (list.contains('theme_night')) { 
    list.remove('theme_night'); 
} else { 
    list.add('theme_night') 
}