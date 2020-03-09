import React from 'react';
import { Text } from 'react-native';
import Padrao from '../style/Padrao'


export default props => {
  return <Text style={Padrao.ex}> {props.texto} </Text>;
};
