import("./Colaborador.css")
const Colaborador = ({nome, imagem, cargo}) => {
    return (

        <div className="colaborador">
            <div className="imagemContainer">
            <img src={imagem} alt={nome} />
            </div>
            <div className="dados">
                <h3>Nome - {nome}</h3>
                <h4>Cargo - {cargo}</h4>
            </div>
        </div>
    )
}

export default Colaborador