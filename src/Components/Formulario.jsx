import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color: #66A2FE;
    border:none;
    width:100%;
    border-radius: 10px;
    color: #FFF;
    transition:background-color .3s ease;

    &hover{
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = () => {

    const Monedas = [
        {codigo: 'USD', nombre: 'Dolar USA'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
    ];

    //utilizar useMoneda
    const[moneda, SelectMonedas] = useMoneda('Elige tu moneda','',Monedas);
    return ( 
        <form>

            <SelectMonedas/>
            <Boton
                type="submit"
                value="calcular"
            />
        </form>
     );
}
 
export default Formulario;