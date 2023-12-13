// importacao de elementos
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'
import React, { useState } from 'react';

import { Participant } from '../../components/Participant';

// funcao padrao de criacao
// ao ser inicializada a aplicao, esta funcao é a primeira a ser chamada
export default function Home(){

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const date: Date = new Date(); // Obtem e inicializa variavel referente a Data

  var day=date.getDate(); // Retorna o dia
  var month=date.getMonth(); // Retorna o mês
  var year=date.getFullYear(); // Retorna o ano

  // componente / interface são iguais
  // no return, sao inseridos os elementos que vao ser exibidos em tela
  // os componentes em JSX sempre iniciam com primeira letra maiuscula e extensao precisa ser formato .tsx

  // funcao para adicionar participantes
  function handleParticipantAdd(){
    // tentativa de validacao para campo nome participante, verificando se esta null ou undefined ou já foi informado
    if(participants.includes(participantName) || !participantName.trim() || participantName.startsWith(' ') || !participantName.trim()){
      Alert.alert("Alerta", "Participante já foi informado ou é inválido!");
      setParticipantName('');
    } else {
      setParticipants(prevState => [...prevState, participantName]);
      // limpa campo nome do participante
      setParticipantName('');
    }
  }

  // funcao para remover participante
  function handleParticipantRemove(name: string ){

    Alert.alert("Alerta", `Você realmente deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    // obs: um componente não pode retornar mais de um elemento
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento</Text>

      <Text style={styles.eventDate}>
        Data do Evento: {day}/{month}/{year}
      </Text>

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor="#6B6B6B"
                onChangeText={setParticipantName}
                value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}>
          </Participant>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Sem participantes presentes no evento!
          </Text>
        )}
      />

    </View>
  )
}