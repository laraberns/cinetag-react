import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const parametros = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(
                    `https://my-json-server.typicode.com/laraberns/cinetag-api/videos/${parametros.id}`
                );

                if (!response.ok) {
                    throw new Error("Vídeo não encontrado");
                }

                const dados = await response.json();
                setVideo(dados);
            } catch (error) {
                console.error(error);
                setVideo(null);
            }
        };

        fetchVideo();

        return () => setVideo(null);
    }, [parametros.id]);

    if (!video) {
        return <NaoEncontrada />;
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </section>
        </>
    );
}

export default Player;
