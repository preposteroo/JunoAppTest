import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { SafeAreaView, TouchableOpacity, TextInput, onChangeText, text, Image} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
const Login = () => {
    return(
            <LinearGradient
            colors={['rgb(252,251,246)','rgb(249,224,196)','rgb(244,192,172)']}
            style = {{
                flex: 1,
                alignItems: 'center',
            }}>
            <View style = {styles.loginContainer}>
            <Image source={require('./juno.png')}
                    style={{width: 80, height: 40, marginTop: 10}} />
            <View style ={styles.welcomeContainer}>
            </View>
            <View style ={styles.profileContainer}>
                <View style = {styles.profileOutline}>
                    <View style = {styles.profilePicture}>
                    <Image 
                        source={require('./profile.png')}
                        style = {styles.profile} />
                    </View>
                </View>
            </View>
            <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Username'
                placeholderTextColor= 'white'
            />
             <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Password'
                placeholderTextColor= 'white'

            />
            </SafeAreaView>
           <SafeAreaView 
           style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
            }}>
            <TouchableOpacity 
            style={{ 
                backgroundColor: 'rgb(69,49,100)', 
                margin:20,
                padding: 10,  
                borderRadius: 25, 
                width: 250,
                height: 45,
                alignItems: 'center' 
                }}>
            <Text style={{ color: '#fff' }}>Login</Text>
            </TouchableOpacity>
            </SafeAreaView>
            </View>
            
            </LinearGradient>
    );
}
const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 40,
        flex: 1,
        alignItems: 'center',
    },
    profileContainer: {
       marginTop:70,
       alignItems: 'center', 
       justifyContent: 'center', 
       backgroundColor: 'rgb(249,224,196)',
       borderRadius: 100, 
       width:200,
       height:200,
    },
    profileOutline: {
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderRadius: 100, 
        width:165,
        height:165,
    },
    profilePicture: {
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgb(69,49,100)',
        borderRadius: 100, 
        width:158,
        height:158,
    },
    input: {
        backgroundColor: 'rgb(150,120,210)',
        borderWidth: 2,
        borderColor: 'rgb(150,120,210)',
        margin: 20,
        padding: 10,  
        borderRadius: 25, 
        width: 250,
        height: 45,
        alignItems: 'center' 
      },

    placeholder: {
        backgroundColor: 'white',
      },

    profile: {
        maxWidth: 150,
        resizeMode: 'contain',
    },


});
export default Login;