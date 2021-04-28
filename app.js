if (localStorage.getItem('theme')=='dark') {
    setTheme(true);
}

function setTheme(isDark) {
    if(isDark) {
        document.body.setAttribute('id', 'dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.setAttribute('id', '');
        localStorage.removeItem('theme');
    }
}