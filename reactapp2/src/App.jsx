import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condiciona'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

export default props => (
    <div className='App'>
        <h1>Fundamentos react</h1>
        <div className='Cards'>
            <Card titulo='Contador' color='#71784F'>
                <Contador></Contador>
            </Card>
            <Card titulo='Input' color='#B7CF3A'>
                <Input></Input>
            </Card>
            <Card titulo='Comunicação indireta' color='#000'>
                <Super></Super>
            </Card>
            <Card titulo='Comunicação direta' color='#1BA521'>
                <Pai sobrenome='Freitas'></Pai>
            </Card>
            <Card titulo='Componente com condicional 5' color='#E51C1C'>
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo='Componente com condicional 5' color='#6D3636'>
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo='Componente com repeticao 4' color='#4ABF6B'>
                <Repeticao></Repeticao>
            </Card>
            <Card titulo='Componente com filho 3' color='#3B93C6'>
                <ComFilhos>
                    <ul>
                        <li>Caraca mulek</li>
                        <li>Bola</li>
                        <li>Danielzão</li>
                        <li>The more brave</li>

                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo='Componente com parametro 2' color='#B83C9B'>
                <ComParametro titulo='Titulo'
                    subtitulo='esse é o subtitulo' />
            </Card>

            <Card titulo='Primeiro componente 1' color='#D233AE'>
                <Primeiro />
            </Card>
        </div>



    </div>
)