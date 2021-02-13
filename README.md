## Peliculandia

![Vista general](https://user-images.githubusercontent.com/43142322/107861303-ca303600-6e23-11eb-96e5-fd5afbfae321.png)

![vista detalle](https://user-images.githubusercontent.com/43142322/107861305-cd2b2680-6e23-11eb-9f0a-bc5987983592.png)

### Pre-Requisito 
* Tener instalado Node

### Instalación

1. Clonar el repositorio
2. Ingresar en la terminal:
```
npm install
npm start
```


### Consigna
Crear un sitio sencillo de películas usando handlebars :handlebars: , similar a lo que estuvimos haciendo, que consista de 3 vistas:
​
- "home", página inicial (landing page) que solo tiene un mensaje de bienvenida.
- "movie-list" que muestre una lista de películas, con una imagen chiquita de la tapa y su título y año entre paréntesis. El texto de título + año es un link para ver el detalle de la película (dispara un request GET a /movie/:id, donde "id" es el id de esa película). La lista se muestra ordenada tal como esté en el objeto de datos.
- "movie-detail" que muestra detalles de una película
​
Algunas consideraciones:
​
1. Los datos surgen de un objeto de datos que puede estar en memoria o en un archivo, como prefieran, con la siguiente estructura (procuren agregar al menos 6 o 7 películas más):
```javascript
[
  {
    id: 1,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    cover: "lotr_i.jpg"
    director: "Peter Jackson",
    topCast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Orlando Bloom", "Christopher Lee", "Cate Blanchett", "Hugo Weaving"]
    IMDB: "https://www.imdb.com/title/tt0120737/"
  },
  {
    id: 2,
    title: "V for Vendetta",
    year: 2005,
    cover: "v-for-vendetta.jpg",
    director: "James McTeigue",
    topCast: ["Natalie Portman", "Hugo Weaving", "John Hurt"],
    IMDB: ""
  },
  {
    id: 3,
    title: "Joker",
    year: 2019,
    cover: "joker.jpg",
    director: "Todd Philips",
    topCast: ["Joanquin Phoenix", "Robert DeNiro", "Brett Cullen"],
    IMDB: "https://www.imdb.com/title/tt7286456"
  },
  {
    // etcétera...
  }
]
```
​
2. El layout contiene un menú (pueden ver algunas buenas ideas para menúes superiores sencillos en https://www.w3schools.com/css/css_navbar_horizontal.asp, por ejemplo), con dos items:
i. "Home": link a la vista "home"
ii. "Movie List": link a la vista "movie-list"
​
3. También contiene un footer que dice "Copyleft " y su nombre.
​
4. Corolario de 2 y 3: todas las vistas contienen ese header y ese footer.
​
5. La vista de detalles ("movie-detail") tiene que mostrar todos los datos. El link a IMDB debe ser clickeable y abrirse en una solapa nueva del navegador (atributo `target="_blank"`). Mostrar toda la lista de actores y actrices principales (puede variar la cantidad en cada película).
​
#### Consignas adicionales:
​
Una vez resuelto lo anterior, incorporar las siguientes consignas:
​
**A)** Agregar en la vista "movie-list" 2 botones o links (a gusto) arriba de la lista de películas que permitan ordenar por nombre y año respectivamente, de manera ascendente ("sort by name (asc)" y "sort by year (asc)" si queremos dejar todo en inglés). En ambos casos, el click debe generar un nuevo pedido al servidor (agregando ese pedido de orden como string param en la url), que retornará la misma vista pero renderizada con los datos en el orden pedido.
​
**B)** Al clickear en cualquiera de esos botones, la vista que se retorne debe incluir los botones de ordenamiento preparados para invertir el orden actual. Es decir, si se clickeó en "sort by name (asc)", cuando la vista venga ordenada por nombre ascendente, ese link dirá ("sort by name (desc)"), y en caso de clickearlo ordenará la lista de forma descendente (ofreciendo ahora volver a ordenar de forma ascendente). Análogamente sucederá lo mismo con el ordenamiento por año.
​
**C)** Hacer que la lista de películas se consulte asincrónicamente y que esté en un archivo .js separado incorporado con un require.
