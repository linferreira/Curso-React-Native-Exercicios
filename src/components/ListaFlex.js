import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
  { id: 1, nome: "Joao", nota: 1.9 },
  { id: 2, nome: "Maria", nota: 1.9 },
  { id: 3, nome: "Ana", nota: 9 },
  { id: 4, nome: "Pedro", nota: 6.9 },
  { id: 5, nome: "Daniel", nota: 8.9 },
  { id: 6, nome: "Paulo", nota: 3.9 },
  { id: 7, nome: "Amanda", nota: 8.9 },
  { id: 8, nome: "Jessica", nota: 5.7 },
  { id: 9, nome: "Carla", nota: 9 },
  { id: 10, nome: "Samanta", nota: 7.9 },
  { id: 11, nome: "Sofia", nota: 6.9 },
  { id: 12, nome: "Flavia", nota: 8.9 },
  { id: 13, nome: "Yara", nota: 9.9 },
  { id: 14, nome: "Barb", nota: 10 },
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#ddd',
  borderWidth: 0.5,
  borderColor: '#222',

  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

export const Aluno = props =>
  <View style={itemEstilo}> 
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}> Nota: {props.nota} </Text>
  </View>

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />
  }

  return (
    <ScrollView>
      <FlatList 
        data={alunos} renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  )

}