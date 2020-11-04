import React from 'react'
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color:#FFF;
`;

const Info = styled.p`
    font-size:18px;

    span{
        font-weight:bold;
    }
`;

const Precio = styled.p`
    font-size:30px;
`;



const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null

    console.log(resultado)
    return (
        <ResultadoDiv>
            <Precio>El precio es:<span>{resultado.PRICE}</span> </Precio>
        </ResultadoDiv>

      );
}
 
export default Cotizacion;