import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconHome from './assets/SVGs/Icons/IconHome';
import { vh,vw } from './functions/whresponsive';

const Sidebarhai = () => {
  return (
    <View style={styles.sidebar}>
      <View style={styles.nav}>
        <IconHome/>
        <IconHome/>
        <IconHome/>
        <IconHome/>
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    zIndex:1,
    position: 'absolute',
    top:0,
    left: 0,
    flex: 1,
    flexDirection: 'column',
    width: vw(7), // el ancho de la barra lateral
    height: vh(100), // el ato de la barra lateral
    padding: 10,
    borderRightWidth: vw(0.2),
    borderRightColor: '#ABACAE',
    backgroundColor: 'rgba(0, 4, 11, 0.50)',
  },
  nav: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});

export default Sidebarhai;
