// localStorage e sessionStorage hanno logiche interne differenti ma il loro utilizzo attraverso JS
// è praticamente analogo: gli oggetti con cui lavorerete si chiamano localStorage e sessionStorage
// e i metodi che espongono sono:
// - setItem(key, value) -> MEMORIZZA un valore
// - getItem(key) -> RECUPERA un valore
// - removeItem(key) -> ELIMINA un dato grazie alla chiave
// - clear() -> ELIMINA TUTTA LA TABELLA PER IL DOMINIO

const localStorageSave = function () {
  // questa funzione verrà lanciata alla pressione del pulsante "SALVA IN LOCALSTORAGE"
  console.log('PREMUTO SALVA IN LOCALSTORAGE!')
  localStorage.setItem('theme', 'dark')
  localStorage.setItem('username', 'Stefano')
  localStorage.setItem('numeroPreferito', 1000)
  localStorage.setItem('canDrive', true)
  localStorage.setItem('oggetto', { antonio: true })
  localStorage.setItem('array', ['antonio', 'roberto'])
  // questo dimostra quanto JS sia inetto nel "convertire" array/oggetti in stringhe...
  // il risultato della conversione delle righe 16-17 è inutilizzabile: [object Object] oppure stringhe invece di array :(
  // però c'è un MODO CORRETTO per salvare entità complesse (arr/ogg) in local/sessionStorage, utilizzando una conversione in JSON
  localStorage.setItem('OGGETTOVERO', JSON.stringify({ antonio: true })) // trasforma CORRETTAMENTE in stringa!
  localStorage.setItem('ARRAYVERO', JSON.stringify(['antonio', 'roberto'])) // trasforma CORRETTAMENTE in stringa!
  // quindi alla fine della fiera: se dovete salvare dati PRIMITIVI (stringhe, nums, bools ecc.) potete salvarli direttamente come valori
  // ma quando avete entità dati COMPLESSE (arr/ogg) -> JSON.stringify(arr/ogg)
}

const localStorageRead = function () {
  console.log('PREMUTO LEGGI LOCALSTORAGE')
  const theme = localStorage.getItem('theme')
  const boh = localStorage.getItem('martina') // null
  const oggettoVero = localStorage.getItem('OGGETTOVERO') // ???
  console.log('VALORE DI THEME', theme) // "dark"
  console.log('VALORE DI OGGETTOVERO', oggettoVero) // {"antonio":true} -> questa è una STRINGA JSON, non è l'oggetto originale!
  // però niente paura, da quella stringa è facilissimo tornare all'oggetto... dobbiamo solamente fare l'operazione INVERSA dello stringify
  // che si chiama parse()
  const oggettoOriginale = JSON.parse(oggettoVero)
  //   {
  //     antonio: true
  //   }
  console.log('OGGETTO ORIGINALE DOPO JSON.PARSE()', oggettoOriginale)
  //   console.log(JSON.parse('{robertovuoleromperelecose}')) // ERRORE
  // localStorage.clear() // NUKE -> ELIMINA TUTTA LA TABELLA, si fa quasi mai!
  localStorage.removeItem('oggetto') // elimino l'object Object dal localStorage
}
