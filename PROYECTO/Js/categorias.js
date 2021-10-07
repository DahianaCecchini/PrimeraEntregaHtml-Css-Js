const categoriesPizzas = document.getElementById('pizzas')
let categories = ['MUZZA', 'SIMPLES', 'GOURMET', 'SUPER GUSTOS']
categories.forEach(categoria => {
    categoriesPizzas.innerHTML += `<li><a href="#">${categoria}</a></li>`
})

const categoriesChicas = document.getElementById('pizzasChicas')
categories.forEach(categoria => {
    categoriesChicas.innerHTML += `<li><a href="#">${categoria}</a></li>`
})

const categoriesEmpanadas = document.getElementById('empanadas')
let categoria = ['CARNE CEBOLLA Y MORRON', 'JAMON Y QUESO', 'QUESO Y ACEITUNAS', 'QUESO Y CEBOLLA', 'CAPRESSE', 'VERDURA']
categoria.forEach(category => {
    categoriesEmpanadas.innerHTML += `<li><a href="#">${category}</a></li>`
})

const categoriesPapas = document.getElementById('papas')
let categoryPapas = ['GRANDES', 'PEQUEÑAS', 'CHEDDAR', 'GRAMAJO']
categoryPapas.forEach(category => {
    categoriesPapas.innerHTML += `<li><a href="#">${category}</a></li>`
})

const categoriesBebidas = document.getElementById('bebidas')
let categoryBebida = ['COCA COLA', 'LATA', 'LITRO', 'STELLA', 'HEINEKEN']
categoryBebida.forEach(categoria => {
    categoriesBebidas.innerHTML += `<li><a href="#">${categoria}</a></li>`
})

const categoriesExtras = document.getElementById('extras')
let categoryExtra = ['ALIOLI', 'GUSTO EXTRA', 'MAS']
categoryExtra.forEach(category => {
    categoriesExtras.innerHTML += `<li><a href="#">${category}</a></li>`
})