import { use, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/index.jsx'
import Inputs from './components/Inputs/index.jsx'
import Table from './components/Table/index.jsx'
export default App



function App() {
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [resultado, setResultado] = useState('')
    const [resultadoTabela, setResultadoTabela] = useState('')

    function calculoIMC() {
        const calculo = peso / (altura * altura)
        setResultado(calculo.toFixed(2))
        if (calculo < 18.5) {
            setResultadoTabela('magreza')
        }
        else if (calculo <= 25) {
            setResultadoTabela('normal')
        }
        else if (calculo <= 30) {
            setResultadoTabela('sobrepeso')
        }
        else if (calculo <= 40) {
            setResultadoTabela('obesidade')
        }
        else if (calculo >= 40) {
            setResultadoTabela('obesidade-ex')
        }
        else {
            (calculo = 0)
            setResultadoTabela('')
        }
    }


    return (
        <>
            <div className="container d-flex text-center justify-content-center">
                <div className="text-center border rounded">
                    <Header />
                    <Inputs resultado={resultado} altura={altura} peso={peso} calculoIMC={calculoIMC} setAltura={setAltura} setPeso={setPeso} />
                    <Table resultadoTabela={resultadoTabela} />
                </div>
            </div>
        </>
    )
}


