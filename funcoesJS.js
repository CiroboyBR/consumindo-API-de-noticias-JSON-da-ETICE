var link = window.location.href
var tamanhoLink = 0;

for (let tamanho = link.length - 1; tamanho > 0; tamanho--) {
   if (link[tamanho] == '/') {
      tamanhoLink = tamanho;
      break
   }
}


function getNoticias(qtdPorPaginas, pagina) {
   $.ajax({
      method: "GET",
      url: "https://www.etice.ce.gov.br/wp-json/wp/v2/posts/",
      dataType: 'json',
      data: {
         'orderby': 'date',
         'per_page': qtdPorPaginas,
         'page': pagina,
      } // Dados a serem enviados
   }).done(function (retorno) {

      //console.log(retorno);
      for (let i = 0; retorno[i] != null; i++) {
         document.write('<br><hr> NOTICIA ' + i + '<hr><br>')
         document.write('ID: ' + retorno[i].id + '<br>')
         document.write('TITULO: ' + retorno[i].title.rendered + '<br>')
         document.write('DATA: ' + retorno[i].date + '<br>')
         document.write('LINK: ' + '<a href='+ retorno[i].link +'>'+ retorno[i].link  +'</a>' + '<br>')
         document.write('CONTEUDO: ' + retorno[i].content.rendered + '<br>')
      }
      return true;
   });
}


