import { Logo, Livre, Ocupado, Btn2, Txt1, Txt2, Title, VagasContainer, ContainerV, Vaga, WraperV, VagaDeficiente, Deficiente } from "./styles";
import { useState, Modal } from 'react';
import styled from "styled-components/native";
import ModalEditar from "./modalEditar";


export default function Vagas(){

    const [ open, setOpen ] = useState(false)
    return(
            <VagasContainer>
                <Logo source={require('../../assets/logo.jpg')} />
                <Title>VAGAS</Title>
                <ContainerV>
                    <WraperV>
                        <VagaDeficiente onPress={()=> setOpen(!open)}>
                            <Deficiente source={require('../../assets/deficiente.png')}/>
                        </VagaDeficiente>
                        <Vaga onPress={()=> setOpen(!open)}>
                            <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)}>
                            <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)}>
                            <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)}>
                            <Livre source={require('../../assets/carro_verde-Photoroom.png')} />
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)}>
                             <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)}>
                            <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                             <Ocupado source={require('../../assets/carro_vermelho_sem_fundo.png')} />
                        </Vaga>
                    </WraperV>
                    <ModalEditar visible={open} onClose={() => setOpen(false)} />
                </ContainerV>
                <Btn2>
                    <Txt2>Emissão de Relatório</Txt2>
                </Btn2>
            </VagasContainer>
    )
}


