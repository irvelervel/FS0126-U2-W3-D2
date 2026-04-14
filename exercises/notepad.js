const KEY = 'memory'

const save = function () {
  // recupererà il contenuto della textarea
  const textarea = document.getElementById('notepad-content') // <textarea></textarea>
  const notepadValue = textarea.value // es. 'Che bella giornata!'
  // lo inserirà in una chiave nel localStorage
  localStorage.setItem(KEY, notepadValue) // salvo nella voce "memory" del localStorage (un valore a scelta!)
}
const load = function () {
  // controlla se esiste una memoria precedentemente salvata
  const previousContent = localStorage.getItem(KEY) // recupero dalla voce "memory" del localStorage

  if (previousContent) {
    // se si, la rimette come contenuto della textarea
    // una volta verificato che previousContent, recuperato dal localStorage, NON È NULL
    const textarea = document.getElementById('notepad-content') // <textarea></textarea>
    textarea.value = previousContent
  } else {
    // se no, mostra un messaggino d'errore
    alert('non esiste un contenuto precedentemente salvato!')
  }
}

const reset = function () {
  // svuota la textarea
  const textarea = document.getElementById('notepad-content') // <textarea></textarea>
  textarea.value = '' // svuoto il DOM
  // elimina la chiave "memory dal localStorage"
  localStorage.removeItem(KEY) // KEY è sempre 'memory'
}

// FALSY -> undefined, null, '', 0, -0, NaN
// TRUTHY -> tutto il resto
