export type Tarea = {
    id: string;
    titulo: string;
    descripcion: string;
    fechaRegistro: string;
    fechaActualizacion: string;
}

export const inicializarTareas : Tarea[] = [
    {
        id: '1',
        titulo: 'Tarea de base de datos',
        descripcion: 'Entregar la tarea de base de datos',
        fechaRegistro: '2025-06-28',
        fechaActualizacion: '2025-07-01'
    },
    {
        id: '2',
        titulo: 'Tarea de bosquejo de aplicacion',
        descripcion: 'Entregar la tarea de bosquejo de aplicacion',
        fechaRegistro: '2025-07-01',
        fechaActualizacion: '2025-07-08'
    },
    {
        id: '3',
        titulo: 'Tarea login',
        descripcion: 'Entregar la tarea de aplicacion de login',
        fechaRegistro: '2025-07-08',
        fechaActualizacion: '2025-07-10'
    }
];