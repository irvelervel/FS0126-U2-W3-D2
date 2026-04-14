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
}

const localStorageRead = function () {
  console.log('PREMUTO LEGGI LOCALSTORAGE')
}
