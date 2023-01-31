import Card from "../card/card"
import { Title } from "../title"
import {Main} from "./S-main" 

export default function main() {
  return (
        <Main>
            <Title className="title">Cardapio</Title>
            <Card text="titulo" desc="esse texto e uma descricao"/>
            <Card text="titulo" desc="esse texto e uma descricao"/>
            <Card text="titulo" desc="esse texto e uma descricao"/>
            <Card text="titulo" desc="esse texto e uma descricao"/>
            <Card text="titulo" desc="esse texto e uma descricao"/>
            <Card text="titulo" desc="esse texto e uma descricao"/>
        </Main>
  )
}