const Challenge = () => {

    let valorA = 20
    let valorB = 35

    const handleSoma = () => {
        console.log(valorA + valorB)  
    }


    return (

        <div>
            <p>Valor A vale: {valorA} e valor B vale: {valorB}</p>
            <button onClick={handleSoma}>Somar</button>
            
        </div>
    )
}

export default Challenge;