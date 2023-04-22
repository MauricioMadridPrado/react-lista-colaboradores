

import('./CampoDeTexto.css')

const CampoDeTexto = (props) => {



    const aoDigitar = (evento) => {
        props.aoDigitado(evento.target.value)
    }

    return (
        <div className='campoDeTexto'>
            <label>{props.tipo}</label>

            <input
                value={props.valor}
                onChange={aoDigitar}
                required={props.obrigatorio}
                key={props.tipo} type='text'
                name={props.tipo} id={props.tipo}
                placeholder={props.mensagem} />
        </div>)

}
export default CampoDeTexto