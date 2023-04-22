import { useState } from "react"
import Botao from "../Botao"
import CampoDeTexto from "../CampoDeTexto"
import ListaSuspensa from "../ListaSuspensa"

import("./Formulario.css")

const Formulario = (props) => {

    const equipes = [
        'Auxiliar',
        'Produção',
        'Logistica',
        'Manutenção',
        'Gestão'
    ]

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('');
    const [equipe, setEquipe] = useState('')

    const aoEnviar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            equipe
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={aoEnviar}>
                <CampoDeTexto
                    obrigatorio={true}
                    tipo="nome"
                    mensagem="Digite seu nome aqui"
                    aoDigitado={setNome}
                    value={nome => setNome(nome)}
                />

                <CampoDeTexto
                    obrigatorio={true}
                    tipo="imagem"
                    mensagem="Insira o link da sua imagem"
                    aoDigitado={setImagem}
                    value={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    equipes={equipes}
                    obrigatorio={true}
                    rotulo="Selecione o equipe do colaborador"
                    aoAlterado={setEquipe}
                    value ={equipe => setEquipe(equipe)}
                />
                <Botao />
            </form>
        </section>
    )
}

export default Formulario