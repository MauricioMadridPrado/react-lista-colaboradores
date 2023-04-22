import Colaborador from '../Colaborador'

import('./Equipes.css')
const Equipes = (props) => {

    return (
        <section className='equipe' style={{backgroundColor:props.corDeFundo}} >
            <h2> 
                {props.equipe}
            </h2>
            <div className='equipeContainer'>
        {props.equipes.map( equipes => Equipes)}

            </div>
        </section>
    )
}
export default Equipes