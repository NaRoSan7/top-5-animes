import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Linking } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top 5 Animes do Nathan</Text>

        <FlatList
          data={arrayAni}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.imgBorder}>
                <Image
                  style={styles.img}
                  source={item.capa}
                  onPress={() => {
                    Linking.openURL('https://reactnative.dev');
                  }}
                />
              </View>

              <Text style={styles.plataforma}>
                <Text style={styles.subTitulo}>Nome: </Text>
                <Text style={styles.text}>{item.nome}</Text>
                {'\n'}
                <Text style={styles.subTitulo}>Ano: </Text>
                <Text style={styles.text}>{item.ano}</Text>
                {'\n'}
                <Text style={styles.subTitulo}>Genêro: </Text>
                <Text style={styles.text}>{item.genero}</Text>
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1B1B',
    padding: 8,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#9904df',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  img: {
    borderRadius: 30,
    width: 290,
    height: 430,
  },

  imgBorder: {
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
  },

  subTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9904df',
    paddingLeft: 20,
  },

  text: {
    color: '#F2F3F4',
  },
});

const arrayAni = [
  {
    nome: 'Akame Ga Kill',
    ano: '2014',
    genero: 'Ucronia, Echhi, Ação',
    capa: require('./assets/akamegakill2.jpg'),
  },

  {
    nome: 'Naruto Shippuden',
    ano: '2007',
    genero: 'Ação, Shonen , Aventura',
    capa: require('./assets/naruto.jpg'),
  },

  {
    nome: 'One Piece',
    ano: '1999',
    genero: 'Comédia, Ação, Aventura',
    capa: require('./assets/OnePiece.jpg'),
  },

  {
    nome: 'Kaguya-Sama Love Is War',
    ano: '2015',
    genero: 'Comédia, Romance, Drama',
    capa: require('./assets/kaguyasama.jpg'),
  },

  {
    nome: 'One Punch Man',
    ano: '2015',
    genero: 'Ação, Comédia, Aventura',
    capa: require('./assets/OPM.jpg'),
  },
];
