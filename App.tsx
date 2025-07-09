import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,Button } from 'react-native';
import { Tarea, inicializarTareas } from './data';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [tareas, setTareas] = useState<Tarea[]>(inicializarTareas);
  const [editarTarea, setEditarTarea] = useState<Tarea | null>();
  const [agregar, setAgregar] = useState(false);

  const handlerAgregar = () => {
    setAgregar(true)
  };

  const hanldeGuardar = (taskData: Omit<Tarea, 'id'>) => {
    console.log(taskData);
    if(editarTarea){
      //editar tarea
      setTareas(tareas.map((t) => t.id === editarTarea.id ? {...t, ...taskData} : t));
      setEditarTarea(null);
    } else {
      //agregar nueva tarea
      const nextId = tareas.length > 0 ? Math.max(...tareas.map(t => parseInt(t.id))) + 1 : 1;
      const nuevaTarea: Tarea = {
        id: String(nextId),
        ...taskData
      };
      setTareas([...tareas, nuevaTarea])
    }
    setAgregar(false);
  };
  
  const handlerEditar = (tarea: Tarea) => {
    setEditarTarea(tarea);
    setAgregar(true);
  };

  const handleEliminar = (id: string) => {
    setTareas(tareas.filter((t) => t,id !== id));
  };

  const handleCancelar = () => {
    setAgregar(false);
    setEditarTarea(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Agregar Tareas" onPress={handlerAgregar} />
      {agregar && (
        <TaskForm 
        inicializarTarea={editarTarea ?? undefined}
        onGuardar={hanldeGuardar}
        onCancelar={handleCancelar}
        />
      )}
      <FlatList
      data={tareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem 
        tarea={item}
        onEditar={() => handlerEditar(item)}
        onEliminar={() => handleEliminar}
        />
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  }
});
