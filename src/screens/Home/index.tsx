// importacao de elementos
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

import { Participant } from '../../components/Participant';

// funcao padrao de criacao
// ao ser inicializada a aplicao, esta funcao é a primeira a ser chamada
export default function Home(){
  // componente / interface são iguais
  // no return, sao inseridos os elementos que vao ser exibidos em tela
  // os componentes em JSX sempre iniciam com primeira letra maiuscula e extensao precisa ser formato .tsx

  function handleParticipantAdd(){
    console.log("Você clicou no botão adicionar!")
  }

  return(
    // obs: um componente não pode retornar mais de um elemento
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento</Text>

      <Text style={styles.eventDate}>
        Domingo, 10 de Dezembro de 2023</Text>

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor="#6B6B6B"
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Participant name="Leonardo"></Participant>
        <Participant name="Caroline"></Participant>
        <Participant name="Hórus"></Participant>

    </View>
  )
}