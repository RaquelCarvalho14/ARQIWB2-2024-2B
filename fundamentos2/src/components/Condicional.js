const Condicional = () => {
    const x = false;

    const nome = "Ana"

    return(
        <div>
            {x && <p>Imprime somaente se x for true.</p>}
            {!x && <p>Imprime somaente se x for false.</p>}
            {
                nome === "Ana" ? (<div>Nome é Ana</div>) : (<div>Nome não encontrado</div>)
            }
        </div>
    );
}

export default Condicional;