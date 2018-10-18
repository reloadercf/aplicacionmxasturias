import React, {Component} from 'react';
import {Text, View, Container, Header, Body,Icon, Content, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {StyleSheet, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'

import HomePage from './Layout/HomePage'
//import DetailPage from './Layout/DetailPage'
import DirectorioPage from './Layout/DirectorioPage'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
          <MyApp/>
      </StyleProvider>
    );
  }
}
const CustomDrawerComponent=(props) =>(
  <Container>
    <Header style={styles.LogoDrawer}>
      <Body>
        <Image style={styles.drawerImage}  source={require('./assets/img/logo.png')}  />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)


const MyApp=createDrawerNavigator(
  {
   
    Inicio:{
      screen:HomePage
    },
    Directorio:{
      screen:DirectorioPage
    }



  },{
    initialRouteName: 'Inicio',
    contentComponent: CustomDrawerComponent,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRote: 'DrawerToggle'

  }
    
  )




styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  LogoDrawer:{
    height:60,
    backgroundColor:"#ffff"
  },
  drawerImage:{
    height:60,
    width:250,
  },


})