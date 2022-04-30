import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContador(contador + 1)
      let aux = [{key: contador.toString(), value: lembrete}, ...lembretes]
      setLembrete('')
      return aux
    })

  }

  return (
    <View
    style={styles.telaPrincipalView}>
      <View>
        {/* Usuario vai inserir lembretes aqui */}
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          disabled={lembrete.length === 0}
          title='Adicionar lembrete'
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList 
        data={lembretes}
        renderItem={l => (
          <View style={styles.itemNaLista}>
            <Text>{l.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  lembreteTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 12
  },
  itemNaLista: {
    marginTop: 8,
    padding:12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8
  }

});

{/* <ScrollView>
        {
          lembretes.map(l => (
            <View key={l} style={styles.itemNaLista}>
              <Text>{l}</Text>
            </View>
          ))
        }
</ScrollView> */}
