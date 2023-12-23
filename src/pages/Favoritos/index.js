import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { useFavoritoContext } from "hooks/useFavoritoContext"

function Favoritos() {

    const { favorito } = useFavoritoContext()

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(favorito => {
                    return (
                        <Card
                            {...favorito}
                            key={favorito.id}
                        />
                    )
                })}

            </section>
        </>
    )
}

export default Favoritos