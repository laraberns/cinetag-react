// hooks/useFavoritoContext.js
import { useContext } from 'react';
import { FavoritosContext } from '../contextos/Favoritos';

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        } else {
            novaLista = novaLista.filter((item) => item.id !== novoFavorito.id);
            return setFavorito(novaLista);
        }
    }

    return {
        favorito,
        adicionarFavorito,
    };
}
