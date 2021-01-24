import React from 'react'
import Filho from './Filho'


export default props =>
    <div>
        <Filho {...props}>João</Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome='Salve salve iodinha'>Pedro</Filho>

    </div>