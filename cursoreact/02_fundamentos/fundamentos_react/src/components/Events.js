const Events = () => {
    // nos eventos sempre temos o 'event' que geralmente é abreviado por 'e' e são os dados do evento que podemos usar.

    const handleMyEvent = (e) => {

        console.log(e);
        console.log('ativou :)')
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Ou renderizando isso...</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Duvidei clicar!</button>
            </div>

            <div>
                {/* Em alguns casos podemos usar funções inLine, ou direto no JSX, quando elas são maias simples */}
                <button onClick={() => console.log('clicou mesmo')}>Duvidei clicar aqui também!</button>
                {/* Nesse caso não é recomendado usar eventos onLine. Vai funcionar mas é melhor criar uma função especifica e mais organizada */}
                <button onClick={() => {
                    if(true) {
                        console.log('Eita que coisa feia...')
                    }
                }} >Não clica em mim :(</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;