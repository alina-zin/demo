import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [euros, setEuros] = useState('');
  const [pounds, setPounds] = useState(0);

  function change(text) {
    setEuros(text);
    const  result = euros.replace(',','.') * 0.9;
    setPounds(result);
  }

/*   function calculate() {
    const  result = euros.replace(',','.') * 0.9;
    setPounds(result);
  } */

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      {/* <TextInput style={styles.field} value={euros}
        onChangeText={text => setEuros(text)} keyboard-type='decimal-pad'></TextInput> */}
      <TextInput style={styles.field} value={euros}
        onChangeText={text => change(text)} keyboard-type='decimal-pad'></TextInput>
        <Text style={styles.field}>Pounds</Text>
        <Text style={styles.field}>{pounds.toFixed(2)}</Text>
        {/* <Button onPress={calculate} title="Calculate"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10
  },

  field: {
    marginBottom: 10
  }
});
