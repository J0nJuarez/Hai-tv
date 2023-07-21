import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';
import { vh, vw } from '../functions/whresponsive';

const Videoprin = () => {
  const Titulo = 'Titulo';
  const Categoria = 'Categoria';
  const duracion = 'duracion';
  const imageUrl = 'null'; 
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
      <Text>{Titulo}</Text>
      <Text>{Categoria}</Text>
      <Text>{duracion}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    height: vw(100) * 16/9 - vh(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Videoprin;


