import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { Tarea } from '../data';

type Props = {
    tarea: Tarea;
    onEditar: () => void;
    onEliminar: () => void;
};

export default function TaskItem({ tarea, onEditar, onEliminar}: Props){
    return(
           <View style={styles.containerItem}>
                  <View>
                    <Text style={styles.titleitem}>{tarea.titulo}</Text>
                    <Text>{tarea.descripcion}</Text>
                    <Text>Fecha de registro: {tarea.fechaRegistro}</Text>
                    <Text>Fecha de actualizacion: {tarea.fechaActualizacion}</Text>
                  </View>
                  <View style={styles.buttonsItem}>
                    <Button title='Editar' onPress={(onEditar)}/>
                    <Button title='Eliminar' color='red' onPress={(onEliminar)}/>
                  </View>
                </View>
    );
};

const styles = StyleSheet.create({
  containerItem: {
    padding: 10,
    backgroundColor: '#eef',
    borderRadius: 8,
    marginBottom: 10
  },
  titleitem: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  buttonsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  }
});