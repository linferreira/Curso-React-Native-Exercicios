import React from 'react'
import { View, Text } from 'react-native'

const fonte = {style: { fontSize:30 }}

export const Filho = props => 
  <View>
    <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
  </View>

export const Pai = props =>
  <View>
    <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
    {props.children}
  </View>

export const Avo = props =>
  <View>
    <Text {...fonte}>Avo: {props.nome} {props.sobrenome}</Text>
    <Pai nome="Daniel" sobrenome={props.children}>
      <Filho nome="Cecilia" />
      <Filho nome="Clarice" />
      <Filho nome="Miguel" />
    </Pai>
    <Pai {...props} nome="Pedro">
      <Filho nome="Rafael" />
      <Filho nome="Rebeca" />
    </Pai>
  </View>

export default Avo