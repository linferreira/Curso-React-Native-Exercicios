import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './src/components/Simples';
import ParImpar from './src/components/ParImpar';
import { Inverter, MegaSena } from './src/components/Multi';
import Contador from './src/components/Contador';
import ValidarProps from './src/components/ValidarProps';
import Eventos from './src/components/Eventos';
import ComunicacaoDireta from './src/components/ComunicacaoDireta';
import ComunicacaoIndireta from './src/components/ComunicacaoIndireta';
import ListaFlex from './src/components/ListaFlex';
import Flex from './src/components/Flex'


export default createDrawerNavigator({
  Flex: {
    screen: Flex,
  },
  ListaFlex: {
    screen:ListaFlex ,
    navigationOpitions: { title: 'Lista (Flex Box)' }

  },
  ComunicacaoIndireta: {
    screen: ComunicacaoIndireta,
    navigationOpitions: { title: 'Comunicacao Indireta' }
  },
  ComunicacaoDireta: {
    screen: () => <ComunicacaoDireta nome="Joao" sobrenome="Silva" />,
    navigationOpitions: { title: 'Comunicacao Direta' }
  },
  Eventos: {
    screen: Eventos
  },
  ValidarProps: {
    screen: () => <ValidarProps ano={8} />
  },
  Contador: {
    screen: () => <Contador numero={8} />,
    navigationOpitions: { title: 'Contador' }
  },
  MegaSena: {
    screen: () => <MegaSena numeros={8} />,
    navigationOpitions: { title: 'Mega Sena' }
  },
  Inverter: {
    screen: () => <Inverter texto='AAAAAAAAAOOOOEEEEEEEEE'/>,
    navigationOpitions: { title: 'Inverter' }
  },
  ParImpar: {
    screen: () => <ParImpar numero={30} />,
    navigationOpitions: { title: 'Par & Impar'}
  },
  Simples: {
    screen: () => <Simples texto='Flexivel' />,
    navigationOpitions: { title: 'Simples'}
  }
}, { drawerWidth: 300 } )
 