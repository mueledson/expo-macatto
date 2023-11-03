import React from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import { Link } from 'expo-router';

export default function New() {
  return (
    <View style={styles.Container}>
        <Text style={styles.Title}>Cadastre um Condominio</Text>
        <View>
            <Text style={styles.label}>Condominio</Text>
            <TextInput style={styles.input} value='Alpha Ville'/>

            <Text style={styles.label}>Cidade</Text>
            <TextInput style={styles.input} value='Goiânia' />

            <Text style={styles.label}>Endereço</Text>
            <TextInput style={styles.input} value=' Rua 8, Quadra 4, Lote 1' />

            <Text style={styles.label}>Contato</Text>
            <TextInput style={styles.input} value='José 1888' />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}  value='jose@gmail.com' />

            <Text style={styles.label}>Condominio</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Condominio</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Condominio</Text>
            <TextInput style={styles.input} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>

            <Link href="/list" asChild>
                <TouchableOpacity style={{ backgroundColor: '#33FF', width: 150, height: 40, borderRadius: 5, paddingHorizontal: 10, marginTop: 10, marginRight: 5, alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: "#F0F0F0", textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Cadastrar</Text>
                </TouchableOpacity>
            </Link>

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
    label:{
        color: "#F0F0F0",
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 5
    },
    input:{
        backgroundColor: "#F0F0F0",
        height: 40,
        width:250,
        alignSelf: 'center',
        borderRadius: 7,
        color: "#333",
        paddingHorizontal: 10
    },
});