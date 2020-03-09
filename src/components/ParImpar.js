import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../style/Padrao';


function parOuImpar(num) {
  if(num % 2 == 0) {
    return <Text style={Padrao.ex}> PAR! </Text>
  } else {
    return <Text style={Padrao.ex}> IMPAR! </Text>
  }
}

export default props => 
  <View>
      { parOuImpar(props.numero) }
    {
      // props.numero % 2 == 0
      // ? <Text style={Padrao.ex}> PAR! </Text>
      // : <Text style={Padrao.ex}> IMPAR! </Text>
    }
  </View>
