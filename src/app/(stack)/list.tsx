import { Link } from 'expo-router';
import React, { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Modal,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
} from 'react-native'
  
export default function List() {

    // Modal 
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Listar</Text>

            <Link href="/new" asChild>
                <TouchableOpacity style={{ backgroundColor: "#8fec78", borderRadius: 3, width: 150, height: 30, marginLeft: 190, paddingHorizontal: 9 }}>
                    <Text style={{ color: "#333", fontSize: 16, marginTop: 5 }}>Novo Condomínio</Text>
                </TouchableOpacity>
            </Link>

            <Modal visible={modalVisible} transparent={false} animationType="fade" onRequestClose={() => setModalVisible(!modalVisible)}>
                <View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: "#33FF", height: 35, width: 35, marginLeft: 350, borderRadius: 7, marginTop: 100 }}>
                        <Text style={{ alignSelf: 'center', marginTop: 3, fontSize: 18, color: "#F0F0F0" }}>x</Text>
                    </Pressable>

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

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ backgroundColor: '#fea611', width: 125, height: 25, borderRadius: 5, paddingHorizontal: 10, marginTop: 10, marginLeft: 70, marginRight: 5, alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "#F0F0F0", textAlign: 'center' }}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#fc1306', width: 125, height: 25, borderRadius: 5, paddingHorizontal: 10, marginTop: 10, marginLeft: -0, alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "#F0F0F0", textAlign: 'center' }}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View>
                <Pressable style={styles.Item} onPress={() => setModalVisible(true) }>
                    <Text style={styles.ItemText}> Alpha Ville, Endereco: Rua 8, Quadra 4, Lote 1</Text>
                </Pressable>

                <Pressable style={styles.Item} onPress={() => setModalVisible(true) }>
                    <Text style={styles.ItemText}> Alpha Ville 2, Endereco: Rua 8, Quadra 4, Lote 1</Text>
                </Pressable>
            </View>
        </View>
    )
}
  
const styles = StyleSheet.create({
    label:{
        color: "#333",
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 5
    },
    input:{
        backgroundColor: "#333",
        height: 40,
        width:250,
        alignSelf: 'center',
        borderRadius: 7,
        color: "#FFF",
        paddingHorizontal: 10
    },
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
    Item:{
        width: 325,
        height: 40,
        backgroundColor: "#33FF",
        paddingHorizontal: 5,
        justifyContent: 'center',
        borderRadius: 7,
        fontSize: 18,
        marginTop: 10
    },
    ItemText:{
        color: "#F0F0F0",
        alignSelf: 'center',
        fontSize: 14
    }
});