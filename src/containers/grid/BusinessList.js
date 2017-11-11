//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableHighlight, } from 'react-native';

// create a component
class BusinessList extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollContainer}>

                <View style = {styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style = {styles.box}><Image source={require('../../images/tech.jpg')} /></View>
                    </TouchableHighlight>
                    <View style = {styles.box}><Image source={require('../../images/garderobe.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/femije.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/jete.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/libra.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/ushqim.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/femije.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/jete.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/libra.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/ushqim.png')} /></View>            
                    <View style = {styles.box}><Image source={require('../../images/femije.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/jete.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/libra.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/ushqim.png')} /></View>  
                    <View style = {styles.box}><Image source={require('../../images/femije.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/jete.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/libra.png')} /></View>
                    <View style = {styles.box}><Image source={require('../../images/ushqim.png')} /></View>  
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    scrollContainer:{
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },
    box: {
        margin: 2,
        width: Dimensions.get('window').width / 4 -6,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
   
});

//make this component available to the app
export default BusinessList;
 