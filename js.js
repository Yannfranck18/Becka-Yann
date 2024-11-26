function affichenombre(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function Efface() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function Supdernombre() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculResultat() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Erreur';
    }
}
  
  