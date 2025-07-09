import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Tarea } from '../data';

type Props = {
    inicializarTarea?: Tarea;
    onGuardar: (tarea: Omit<Tarea, 'id'>) => void;
    onCancelar: () => void;
};

export default function TaskForm({inicializarTarea, onGuardar, onCancelar}: Props) {
    const [titulo, setTitulo] = useState(inicializarTarea?.titulo || '');
    const [descripcion, setDescripcion] = useState(inicializarTarea?.descripcion || '');
    const [fechaRegistro, setFechaRegistro] = useState(inicializarTarea?.fechaRegistro || '');
    const [fechaActualizacion, setFechaActualizacion] = useState(inicializarTarea?.fechaActualizacion || '');



    const handleSubmit = () => {
        if(!titulo.trim()) return;
        onGuardar({titulo, descripcion, fechaRegistro, fechaActualizacion});
    }
    return(
        <View style={styles.form}>
            <TextInput
            placeholder="Escribe un titulo"
            value={titulo}
            onChangeText={setTitulo}
            style={styles.input} />
            <TextInput 
            placeholder="Escribe una descripcion"
            value={descripcion}
            onChangeText={setDescripcion}
            style={styles.input}/>
            <TextInput 
            placeholder="Coloca la fecha de registro"
            value={fechaRegistro}
            onChangeText={setFechaRegistro}
            style={styles.input}
            />
            <TextInput 
            placeholder="Coloca la fecha de actualizacion"
            value={fechaActualizacion}
            onChangeText={setFechaActualizacion}
            style={styles.input}
            />

            <Button title="Guardar" onPress={handleSubmit}/>
            <Button title="Cancelar" onPress={onCancelar} color="red"/>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 15
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 8
    }
});