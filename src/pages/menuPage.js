import React, { Component } from 'react';
import { StyleSheet, Text, View, Button , ScrollView, Image, TouchableOpacity} from 'react-native';
import BackButton from '../components/buttons/BackButton';
import { Router } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

import { Header, Left, Body } from 'native-base';

export default class MenuPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (

      <ScrollView style={{backgroundColor:'#3E3E3E'}}> 

      <View style={styles.container}>

        <View style={styles.space}></View>
        <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
        <View style={styles.header}>  
          <Image style={styles.imagePerfil}
              source={require('../images/perfil.jpg')} />
          <Text style={styles.titleHeader}>  Perfil</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.devocional()} style={styles.button}>  
            <View style={styles.viewsMenu}>  
                <Image style={styles.icones}
                    source={require('../images/feito1.png')} />
                <Text style={styles.titlesMenu}>  Devocional</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.space}></View>  
        
        <TouchableOpacity onPress={() => Actions.notification()} style={styles.button}> 
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/feito1.png')} />
        <Text style={styles.titlesMenu}>  Notificações</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.alter_page()} style={styles.button}> 
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/senha.png')} />
        <Text style={styles.titlesMenu}>  Alterar a Senha</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.space}></View> 

        <TouchableOpacity onPress={() => Actions.pray()} style={styles.button}> 
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/oracao.png')} />
        <Text style={styles.titlesMenu}>  Pedido de Oração</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>

        <TouchableOpacity onPress={() => Actions.administrator()} style={styles.button}> 
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/perfico.png')} />
        <Text style={styles.titlesMenu}>  Administrativo</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>

        <TouchableOpacity onPress={() => Actions.contact()} style={styles.button}>  
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/contato.png')} />
        <Text style={styles.titlesMenu}>  Contatos</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.term_politics()} style={styles.button}>  
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/politica.png')} />
        <Text style={styles.titlesMenu}>  Termos e Politicas</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
        
        <TouchableOpacity onPress={() => Actions.login()} style={styles.button}> 
        <View style={styles.viewsMenu}>  
        <Image style={styles.icones}
            source={require('../images/sair.png')} />
        <Text style={styles.titlesMenu}>  Sair</Text>
        </View>
        </TouchableOpacity>
        
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
  header: {
    flex: 1,
    borderColor: 'white', 
    justifyContent: 'flex-start', 
    alignItems: "center", 
    flexDirection: 'row',
  },
  titleHeader: {
    color:'white', 
    fontSize: 20,
    fontWeight: '300',
  },
  titlesMenu: {
    color:'white', 
    fontSize: 20,
    fontWeight: '300',
  },
  viewsMenu: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: "center", 
    flexDirection: 'row',
  },
  imagePerfil: {
    width: 50,
    height: 41, 
    borderRadius:27, 
  }
});
