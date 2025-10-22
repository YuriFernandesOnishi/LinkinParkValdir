import { Logo, Livre, Ocupado, Btn2, Txt1, Txt2, Title, VagasContainer, ContainerV, Vaga, WraperV, VagaDeficiente, Deficiente } from "./styles";
import { useState } from 'react';
import styled from "styled-components/native";


export default function Editar(){
    return(
            <VagasContainer>
                <Logo source={require('../../assets/logo.jpg')} />
                <Title>VAGAS</Title>
                
                <Btn2>
                    <Txt2>Emissão de Relatório</Txt2>
                </Btn2>
            </VagasContainer>
    )
}

