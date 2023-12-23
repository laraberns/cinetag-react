import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"


function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                    <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase