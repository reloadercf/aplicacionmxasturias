//import liraries
import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Icon, Button, Header} from 'native-base'
// create a component

class HeaderPage extends Component {
    render() {
        return (
            <Header style={styles.header}>
                       <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="ios-menu" style={styles.icon}/>
                        </Button>
                        <Button transparent active={true}  onPress={() => this.props.navigation.navigate('Inicio')} >
                            <Icon active={true} name="home" style={styles.icon} />
                            <Text>Inicio</Text>
                        </Button>
                        <Button transparent active={true}   onPress={() => this.props.navigation.navigate('Directorio')}>
                            <Icon active={true} name="apps" style={styles.icon} />
                            <Text>Directorio</Text>
                        </Button>
              
               </Header>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#ffff"
    },
    icon:{
        fontSize:20,
        color:"black"
    }
});

//make this component available to the app
export default HeaderPage;
