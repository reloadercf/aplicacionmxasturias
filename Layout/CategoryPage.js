//import liraries
import React, { Component } from 'react';
import {Text,  StyleSheet,   } from 'react-native';
import { Container, Content} from 'native-base'
import HeaderPage from '../components/header/HeaderPage'

// create a component
class CategoryPage extends Component {
    render() {
        return (
            <Container>     
               <HeaderPage {...this.props}/>
               <Content contentContainerStyle={{
                   flex:1,
                   alignItems:"center",
                   justifyContent:'center'
               }}>
                   <Text>
                       CATEGORYPAGE
                   </Text>
               </Content>
           </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default CategoryPage;
