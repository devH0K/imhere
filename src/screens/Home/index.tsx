// importacao de elementos
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'
import React, { useState } from 'react';

import { Participant } from '../../components/Participant';

// funcao padrao de criacao
// ao ser inicializada a aplicao, esta funcao é a primeira a ser chamada
export default function Home(){

  const [participants, setParticipants] = useState(['Leonardo']);

  // componente / interface são iguais
  // no return, sao inseridos os elementos que vao ser exibidos em tela
  // os componentes em JSX sempre iniciam com primeira letra maiuscula e extensao precisa ser formato .tsx

  // funcao para adicionar participantes
  function handleParticipantAdd(){
    if(participants.includes("Teste")){
      return Alert.alert("Alerta", "Participante já informado!");
    }

    setParticipants(prevState => [...prevState,'Carol'])

  }

  // funcao para remover participante
  function handleParticipantRemove(name: string ){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
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