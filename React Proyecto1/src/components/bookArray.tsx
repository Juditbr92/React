import { Book } from "../config/types"


const bookArray: Book[] = [
    {
        id_book: 1, 
        id_user: 1,
        title: 'Dime quien soy',
        author: 'Julia Navarro', 
        photo: 'https://http2.mlstatic.com/D_NQ_NP_707573-MLM49187855321_022022-O.webp',
        type: 'Histórica',
        rating: 5, 
    },

    {
        id_book: 2, 
        id_user: 1,
        title: 'Patria',
        author: 'Fernando Aramburu', 
        photo: 'https://m.media-amazon.com/images/I/71P6414BRDL._AC_UF894,1000_QL80_.jpg',
        type: 'Histórica',
        rating: 5, 
    },

    {
        id_book: 3, 
        id_user: 1,
        title: 'Las Vulnerabilidades',
        author: 'Elvira Sastre', 
        photo: 'https://www.google.es/url?sa=i&url=https%3A%2F%2Fwww.planetadelibros.com%2Flibro-las-vulnerabilidades%2F390299&psig=AOvVaw2Tb1bfu0312dgpo0XRU_M-&ust=1723827406795000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDqwf7I94cDFQAAAAAdAAAAABAQ',
        type: 'Ficción',
        rating: 4, 
    },

    {
        id_book: 4, 
        id_user: 1,
        title: 'Harry Potter y la piedra filosofal',
        author: 'JK Rowling', 
        photo: 'https://www.google.es/url?sa=i&url=https%3A%2F%2Fharrypotter.fandom.com%2Fes%2Fwiki%2FHarry_Potter_y_la_piedra_filosofal&psig=AOvVaw0aZZ4KnPNJjYRwZu8XfhbG&ust=1723827531147000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi76LnJ94cDFQAAAAAdAAAAABAE',
        type: 'Ficción',
        rating: 4, 
    }
]

export default bookArray