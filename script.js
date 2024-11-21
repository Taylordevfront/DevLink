function toggleMode() {
const html = document.documentElement

if(html.classList.contains('light')){
  html.classList.remove('light')
} else {
  html.classList.add('light');
}
/* existe outra opção:*/
/* html.classList.toggle('light')*/

// pegar a tag img
//condicao;se tiver light mode, adicionar, se não manter a img normal
//substituir a img
}
