const DetalhesUsuario = ({nome, idade, profissao}) => {
    const idadeParaCnh = 18;
        
    return(
        <div>
            <ul>
                <li><b>Nome:</b> {nome}</li><br/>
                <li><b>Idade:</b> {idade}</li><br/>
                <li><b>Profissao:</b> {profissao}</li>
            </ul>
            {idade >= idadeParaCnh ?
            (<h4>Pessoa apta a tirar a carteira de habilitação</h4>):
            (<h4>Pessoa INPTA a tirar a carteira de habilitação</h4>)}
            <hr/>
        </div>
    );
} 

export default DetalhesUsuario;