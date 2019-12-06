import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from '../styles/colors'
import DescriptionDateCell from '../components/cell/DescriptionDateCell'
import Axios from 'axios';
import 'moment';
import 'moment/locale/pt-br';
import moment from 'moment-timezone';
moment().locale('pt-br');
LocaleConfig.locales['fr'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul.', 'Ago', 'Set.', 'Oct.', 'Nov.', 'Dez.'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab', 'Dom']
};
LocaleConfig.defaultLocale = 'fr';

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCurrent: [],
      daysEvent: null,
      loadingEvent: false,
      descriptionDays: []
    };
  }

  componentWillMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      dateCurrent:
        year + '-' + month + '-' + date
    });

    this.getEventDay()
  }

  getEventDay = () => {
    this.setState({ loadingEvent: true })
    Axios.get("http://cristoematos.com.br/apiatos/calendar").then((calendar) => {
      let data = calendar.data.data
      let item;
      let objDynamic = {}
      if (data) {
        for (let contador = 0; contador < data.length; contador++) {
          item = data[contador]
          let objModel = {
            days: item.days,
            title: item.title,
            img_background: item.img_background,
            horary: item.horary,
            color: item.backgroundColor
          }
          this.state.descriptionDays.push(objModel)
          for (let days = 0; days < item.date.length; days++) {
            item.date[days]
            objDynamic[item.date[days]] = {
              customStyles: {
                container: {
                  backgroundColor: item.backgroundColor,
                  elevation: 2
                },
                text: {
                  color: item.textColor,
                },
              }
            }
          }
        }
        this.setState({ daysEvent: objDynamic, loadingEvent: false })
      }

    }).catch((err) => {
      console.log("errr =>", err)
    })
    this.setState({ loadingEvent: false })
  }




  render() {

    const datacarousel = [{ key: "a" }, { key: "b" }, { key: "c" }];

    let { dateCurrent, descriptionDays } = this.state
    return (
      <View style={styles.root}>

        <View style={styles.header}>
          <Image style={styles.containerlogo}
            source={require('../images/logo.png')} />
          <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
            <Image style={styles.perfil}
              source={require('../images/perfil.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Calendar
            style={styles.calendar}
            onDayPress={this.onDayPress}
            hideExtraDays
            displayLoadingIndicator={this.state.loadingEvent}
            minDate={new Date()}
            markingType={'custom'}
            markedDates={
              this.state.daysEvent
            }
            hideArrows={false}

          />

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 15 }}
            data={descriptionDays}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <DescriptionDateCell item={item} index={index} />}
          />
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.root,
    paddingHorizontal: 16,
    paddingBottom: 10
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5
  },
  viewDetailDate: {
    paddingVertical: 5,
    marginHorizontal: 19,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'white',
    alignItems: "center"
  },
  checkColor: {
    backgroundColor: colors.blue,
    borderRadius: 15,
    width: 30,
    marginRight: 10,
    height: 30
  },
  textDescription: {
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: "#202020"
  },
//new
containerlogo: {
  justifyContent: "center",
  alignItems: "flex-start",
  width: 50,
  height: 41,
},
perfil: {
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: 50,
  height: 41,
  borderRadius: 27,
}, 

header: {
  marginTop: 16,
  paddingHorizontal: 16,
  height: 60,
  justifyContent: 'space-between',
  alignItems: "center",
  flexDirection: 'row',
  paddingHorizontal:5

},
});