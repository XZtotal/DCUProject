function mostrarInterfaz(){
    var menu = document.getElementsByClassName('menu')[0];
    var logo = document.getElementsByClassName('league-spartan-info')[0]
    var fondo = document.getElementById('loading')
    menu.style.display="flex"
    logo.style.color="#5BAD96"
    fondo.style.backgroundColor="white"
}
setTimeout(mostrarInterfaz, 3000)