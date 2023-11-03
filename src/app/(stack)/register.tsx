import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
  
import React from 'react'

import { Link } from 'expo-router';
  
export default function Register() {

    return (
        <View style={styles.Container}>
        <Text style={styles.Title}>Cadastre-se</Text>
        
        <View style={styles.Form}>

            <TextInput style={styles.Input} placeholder='Digite seu Nome'  placeholderTextColor="#F0F0F0"/>
            <TextInput style={styles.Input} placeholder='Digite sua Senha' secureTextEntry={true} placeholderTextColor="#F0F0F0"/>

            <Link href="/list" asChild>
                <TouchableOpacity style={styles.Btn}>
                    <Text style={styles.BtnText}>Cadastre-se</Text>
                </TouchableOpacity>
            </Link>

            <View style={styles.LogarContainer}>
                <Text style={styles.Logar}>Já possui conta ?</Text>

                <Link href="/" asChild>
                    <TouchableOpacity style={styles.BtnLogar}>
                    <Text style={styles.BtnLogarText}>Logar</Text>
                    </TouchableOpacity>
                </Link>
            </View>

        </View>

        </View>
    )
}
  
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222'
    },
    Title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#F0F0F0'
    },
    Form:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    Input:{
        width: '90%',
        height: 40,
        backgroundColor: "#333",
        color: "#F0F0F0",
        marginBottom: 10,
        borderRadius: 7,
        paddingHorizontal: 5
    },
    Btn:{
        width: '90%',
        height: 40,
        backgroundColor: "#3d8620",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },
    BtnText:{
        color: "#F0F0F0"
    },

    LogarContainer:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Logar:{
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
        color: "#F0F0F0",
        marginRight: 10,
        fontWeight: 'bold'
    },
    BtnLogar:{
        width: '30%',
        height: 30,
        backgroundColor: "#33FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        paddingHorizontal: 5
    },
        BtnLogarText:{
        color: "#F0F0F0",
        textAlign: 'center',
        fontWeight: 'bold'
    }
});