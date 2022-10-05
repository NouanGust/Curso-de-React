import {useState} from 'react'

const ManageData = () => {

    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(32);

    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() =>{ someData = 15 } }>Mudar variável</button>

            <p>Valor: {number}</p>
            <button onClick={() => setNumber(42) }>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData