import("./ListaSuspensa.css")

const ListaSuspensa = (props) => {



    return (
        <section className="listaSuspensa">

            <label>{props.rotulo}</label>
            <select
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}>

                <option></option>
                {props.equipes.map(equipe => {
                    return <option key={equipe}>{equipe}</option>})}

            </select>
        </section>
    )

}
export default ListaSuspensa