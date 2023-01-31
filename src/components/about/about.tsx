import React from 'react'
import { Conteiner } from '../conteiner'
import { Text, Title } from '../title'
import { ConteinerAbout } from './S-about'

export default function about() {
  return (
    <ConteinerAbout>
        <Conteiner>
            <img src="#" alt="" />
        </Conteiner>
        <Conteiner>
            <Title>sobre a empresa</Title>
            <Text>horarios , endereco, etc</Text>
        </Conteiner>
    </ConteinerAbout>
  )
}
