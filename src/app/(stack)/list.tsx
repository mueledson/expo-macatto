import React, { useState } from 'react'

import {
    View,
    Text,
    Modal,
    StyleSheet,
    FlatList
} from 'react-native'
  
  
export default function List() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Listar</Text>
            <Modal visible={modalVisible}>
                
            </Modal>
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
}
});