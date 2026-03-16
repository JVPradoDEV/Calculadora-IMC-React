function Table({ resultadoTabela }) {

    return(
        <>
            <table className='border mx-auto'>
                <thead className='border'>
                    <tr className='border'>
                        <td colSpan={3}>
                            <h3>Tabela de interpretação do IMC</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-primary border'>
                        <td>RESULTADO</td>
                        <td>CLASSIFICAÇÃO</td>
                        <td>OBESIDADE(Grau)</td>
                    </tr>
                    <tr className={resultadoTabela === 'magreza' ? 'bg-success text-white' : ''}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr className={resultadoTabela === 'normal' ? 'bg-success text-white' : ''}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr className={resultadoTabela === 'sobrepeso' ? 'bg-success text-white' : ''}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>1</td>
                    </tr>
                    <tr className={resultadoTabela === 'obesidade' ? 'bg-success text-white' : ''}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>2</td>
                    </tr>
                    <tr className={resultadoTabela === 'obesidade-ex' ? 'bg-success text-white' : ''}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Excessiva</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table