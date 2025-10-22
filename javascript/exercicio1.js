let biblioteca = [
livro = {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    genero: "Ficção"
},
livro = {
    titulo: "Farenheit 451",
    autor: "Ray Bradbury",
    ano: 1953,
    genero: "Ficção"
},
livro = {
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    ano: 1932,
    genero: "Ficção"
},
livro = {
    titulo: "A Riqueza das Nações",
    autor: "Adam Smith",
    ano: 1776,
    genero: "Economia/Filosofia"
},
livro = {
    titulo: "Suma Teológica",
    autor: "São Tomás de Aquino",
    ano: 1273,
    genero: "Teologia"
},
livro = {
    titulo: "Da República",
    autor: "Cícero",
    ano: 54,
    genero: "Filosofia"
},
]

biblioteca.push(livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1940,
    genero: "Ficção"
})


biblioteca.forEach(livro => {
    console.log(`Livro: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}, Gênero: ${livro.genero}`)
})

biblioteca.filter(livro => livro.genero === "Ficção").forEach(livro => {
    console.log(`\nLivro de Ficção: ${livro.titulo}, Autor: ${livro.autor}`)
})

