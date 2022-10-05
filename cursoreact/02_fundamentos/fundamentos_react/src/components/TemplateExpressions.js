import React from 'react'

const TemplateExpressions = () => {
    const data = {
        name: 'Nohan',
        age: 20,
        job: 'programmer boy',
    }

    return (

        <div>
            {/* Template Expressions são formas de executar javascriop dentro do JSX direto, é uma forma de interpolar dados. */}
            <h1>Olá {data.name}, tudo tranquilo?! </h1>
            <p>Você atua como: {data.job}</p>
            <p>{10 + 10}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    )
}

export default TemplateExpressions;