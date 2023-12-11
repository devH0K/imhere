// importacao de elementos
import { Text, View } from 'react-native';

// funcao padrao de criacao
// ao ser inicializada a aplicao, esta funcao é a primeira a ser chamada
export default function App(){
  // componente / interface são iguais
  // no return, sao inseridos os elementos que vao ser exibidos em tela
  // os componentes em JSX sempre iniciam com primeira letra maiuscula e extensao precisa ser formato .tsx
  return(
    // obs: um componente não pode retornar mais de um elemento
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Nome do Evento</Text>
      <Text style={{
        color: '#6B6B6B',
        fontSize: 16,
      }}>
        Domingo, 10 de Dezembro de 2023</Text>
    </View>
  )
}