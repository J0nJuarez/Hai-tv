import React, { useEffect, useRef } from 'react';
import { Text, ImageBackground, StyleSheet, View, Pressable, TVEventHandler } from 'react-native';
import { vh, vw } from '../functions/whresponsive';

const Videoprin = () => {
  const Titulo = 'Titulo';
  const Categoria = 'Categoria';
  const duracion = '10:00';
  const imageUrl = 'null'; 



  return (
    <View style={styles.imgcontainer}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
        <View>
          <Text style={styles.tituloprin} adjustsFontSizeToFit numberOfLines={1}>{Titulo}</Text>
          <Pressable style={({pressed, focused}) => [
            styles.botonprin,
            pressed ? styles.pressedButton : {},
            focused ? styles.focusedButton : {},
          ]} onPress={() => console.log('pon la orden de que abra un video')}>
                      {({ pressed }) => (
                          <Text style={{...styles.botonTexto,  color: pressed ? '#1C83E6' : 'white'}}>▶</Text>
                      )}
          </Pressable>
        </View>
        <View>
          <Text style={styles.textocategoria} adjustsFontSizeToFit numberOfLines={1}>{Categoria}</Text>
          <Pressable style={({pressed, focused}) => [
            styles.botonprin,
            pressed ? styles.pressedButton : {},
            focused ? styles.focusedButton : {},
          ]} onPress={() => console.log('pon la orden de que abra un video')}>
                      {({ pressed }) => (
                          <Text style={{...styles.botonTexto,  color: pressed ? '#1C83E6' : 'white'}}>▶</Text>
                      )}
          </Pressable>
          <Text style={styles.textoduracion} adjustsFontSizeToFit numberOfLines={1}>{duracion}</Text>
        </View>  
      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#9E9E9E',
  },
  imgcontainer: {
    width: vw(100),
    height: vh(85),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -100 },
    shadowOpacity: 50,
    shadowRadius: 250,
  },
  tituloprin:{
    width:vw(60),
    color: '#FFF',
    textShadowOffset: { width: -4, height: 4 },
    textShadowRadius: 0.1,
    textShadowColor: '#005EB8',
    // fontFamily: 'Inter',
    fontSize: vw(14),
    fontStyle: 'normal',
    fontWeight: '500',
  } ,
  textocategoria:{
    backgroundColor: '#1C83E6',
    color: '#FFF',
    alignSelf: 'flex-start',
    padding:10,
    // fontFamily: 'Inter',
    fontSize: vw(6),
    fontStyle: 'normal',
    fontWeight: '500',
  } ,
  botonprin: {
    paddingVertical: 16,  
    width: vw(20),  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#1C83E6', 
  },
  botonTexto: {
    color: 'white',
    fontSize: vw(3), 
  },

  textoduracion:{
    color: '#ABACAE',
    alignSelf:'center',
    // fontFamily: 'Inter',
    fontSize: vw(2.5),
    fontStyle: 'normal',
    fontWeight: '200',
  } ,

  pressedButton: {
    //cuando esté presionado.
    backgroundColor: 'white',
  },

  focusedButton: {
    // cuando esté enfocado.
    backgroundColor: 'white',
  },
});

export default Videoprin;


