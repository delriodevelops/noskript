/*CARACTERES
    Arrays con todos los caracteres y números disponibles para la contraseña.
*/

const MINUSCULAS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const MAYUSCULAS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const NUMEROS = ["1","2","3","4","5","6","7","8","9","0"];
const ESPECIALES = ["{","|","}","~",":",";","=","?","@","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/"];


/*ARRAY DE ARRAYS
    Array que contiene los arrays con los caracteres, este se invoca vacío y se va rellenando en función de lo que esté seleccionado en las checkbox.
*/

let arrayDeArrays = [];


/*DECLARACIONES DEL DOM
*/

let $tweaks = document.getElementById('tweaks');
    let $minusculas = document.getElementById('minusculas');
    let $mayusculas = document.getElementById('mayusculas');
    let $numeros = document.getElementById('numeros');
    let $especiales = document.getElementById('especiales');

let $psw__range = document.getElementById('psw__range');
let $longitud = $psw__range.value;

let $show__length = document.getElementById('show__length');

let $refresh = document.getElementById('refresh');

let $psw__length = document.getElementById('psw__length')

let $pass = document.getElementById('pass');

/*FUNCIÓN LONGITUD
    Función encargada de mostrar la longitud de la contraseña.
*/

function longitud() {
    $longitud = $psw__range.value
    $show__length.innerHTML = `${$longitud}`;
}
window.onload = longitud;




/*FUNCIÓN CREA CONTRASEÑA
    Esta función crea y escribe la contraseña. Para ello escogera un número random en el arrayDeArrays y este a su vez selecciona al azar una posición del array que haya tocado anteriormente.
    Para escribirlo, se crea la variable finalPass a la que se hará un loop que se repetira tantas veces como la longitud de la contraseña seleccionada. 
*/

function crearContraseña(e) {
    arrayDeArrays = [];

    if(!($minusculas.checked) && !($mayusculas.checked) && !($numeros.checked) && !($especiales.checked)) {
        e.target.checked = true;
        alert('Selecciona al menos una casilla.');
        
    }

    if($minusculas.checked) {
        arrayDeArrays.push(MINUSCULAS);
    }
    if($mayusculas.checked) {
        arrayDeArrays.push(MAYUSCULAS);
    }
    if($numeros.checked) {
        arrayDeArrays.push(NUMEROS);
    }
    if($especiales.checked) {
        arrayDeArrays.push(ESPECIALES);
    }

    let password=[];
    let i = 0;

    

    while(i!=$longitud) {
        let first = arrayDeArrays[Math.floor(Math.random()*arrayDeArrays.length)];
        let second = first[Math.floor(Math.random()*first.length)];
        password.push(second);
        
        i++;
        
    }
    
    $pass.innerHTML = password.join('');
    
}

$psw__length.addEventListener('mousemove',longitud);
$psw__length.addEventListener('click',longitud);

$psw__length.addEventListener('click',crearContraseña);
$refresh.addEventListener('click',crearContraseña);

window.onload = crearContraseña;


$minusculas.addEventListener('click',crearContraseña);
$mayusculas.addEventListener('click',crearContraseña);
$numeros.addEventListener('click',crearContraseña);
$especiales.addEventListener('click',crearContraseña);


