// importacao de elementos
import { Text, View } from 'react-native';
import { styles } from './styles'

// funcao padrao de criacao
// ao ser inicializada a aplicao, esta funcao é a primeira a ser chamada
export default function Home(){
  // componente / interface são iguais
  // no return, sao inseridos os elementos que vao ser exibidos em tela
  // os componentes em JSX sempre iniciam com primeira letra maiuscula e extensao precisa ser formato .tsx
  return(
    // obs: um componente não pode retornar mais de um elemento
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento</Text>
      <Text style={styles.eventDate}>
        Domingo, 10 de Dezembro de 2023</Text>
    </View>
  )
}