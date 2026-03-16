function Inputs({resultado, calculoIMC, setAltura, setPeso, peso, altura}) {

    return (
        <>
            <input className="mx-3" onBlur={(e) => setAltura(parseFloat(e.target.value))} type="number" placeholder='Altura (CMs)' />
            <input className="mx-3" onBlur={(e) => setPeso(parseFloat(e.target.value))} type="number" placeholder='Peso (KGs)' />
            <button onClick={calculoIMC} className='btn btn-primary'>Calcular</button>
            <p className='bg-dark text-white rounded border border-2'>Seu resultado: {resultado}</p>
        </>
    )
}


export default Inputs;