import React, { Component } from 'react';
import { StyleSheet, Text, View, Button , ScrollView, Image, TouchableOpacity} from 'react-native';
import BackButton from '../components/buttons/BackButton';
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

import { Header, Left, Body } from 'native-base';

export default class EventPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>

        <View style={styles.space}></View>
        <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
        <View style={{flex: 1,borderColor: 'white', justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
          <Image style={{width: 50,height: 41, borderRadius:27 }}
              source={require('../images/perfil.jpg')} />
          <Text style={{color:'white', fontSize: 20,fontWeight: '300'}}>  Perfil</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/feito1.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Devocional</Text>
        </View>

        <View style={styles.space}></View>  
        
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/feito1.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Notificações</Text>
        </View>
        
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/senha.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Alterar a Senha</Text>
        </View>
        
        <View style={styles.space}></View> 

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/oracao.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Pedido de Oração</Text>
        </View>
        
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/perfico.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Administrativo</Text>
        </View>
        
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/contato.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Fale Conosco</Text>
        </View>
        
        <View style={styles.space}></View>

        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/politica.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Termos e Politicas</Text>
        </View>
        
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        
        <View style={{flex: 1,justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row'}}>  
        <Image style={styles.icones}
            source={require('../images/sair.png')} />
        <Text style={{color:'white', fontSize: 20,fontWeight: '300' }}>  Sair</Text>
        </View>
        
        <View style={styles.space}></View>
      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3E3E3E',
  },
  space:{
    width: 17,
    height: 17,
  },
  icones: {
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 41,
  },
});
