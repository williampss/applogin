import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

 
export default function Welcome() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
        <View style={styles.containerLogo}>
            < Animatable.Image
             animation="flipInY"
             source={require('../../assests/bolaPokemon.png')}
             style={{width: '100%'}}
             resizeMethod="contain"
            />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.tittle} > Torne-se um grande treinador</Text>
          <Text style={styles.text} >Faça o seu login para começar sua jornada</Text>

          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
          >
            <Text style={styles.buttonText} >Acessar</Text>
          </TouchableOpacity>
        
        </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#dd1818'

    },

    containerLogo:{
      flex:2,
      backgroundColor: '#dd1818',
      justifyContent: 'center',
      alignItems: 'center'
    },

    containerForm:{
      flex:1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
    },
    tittle:{
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
    },
    text:{
      color: 'a1a1a1'
    },
    button:{
      position: 'absolute',
      backgroundColor: '#fdc830',
      borderRadius: 50,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText:{
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'
    }

})