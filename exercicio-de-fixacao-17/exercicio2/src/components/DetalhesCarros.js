import "./DetalhesCarros.css"

const DetalhesCarros = ({modelo, marca, cor}) => {    
    return(
        <div>
            <ul>
                <li className="li"><span className="negrito">Modelo:</span> {modelo}</li><br/>
                <li className="li"><span className="negrito">Marca:</span> {marca}</li><br/>
                <li className="li"><span className="negrito">Cor:</span> {cor}</li>
            </ul>
            <hr/>
        </div>
    );
} 

export default DetalhesCarros;