### API Endpoints

#### Obtener todas las tareas
- **URL:** `/api/tasks`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las tareas.

#### Agregar una nueva tarea
- **URL:** `/api/tasks`
- **Método:** `POST`
- **Descripción:** Agrega una nueva tarea.
- **Body:**
  ```json
  {
    "title": "Nueva tarea"
  }

### Marcar una tarea como completada
- **URL:** `/api/tasks/:id`
- **Método:** `PUT`
- **Descripción:** Marca una tarea como completada (o desmarca si ya está completada).
- **Parámetros URL:**
  - `id`: ID de la tarea a actualizar.

### Eliminar una tarea
- **URL:** `/api/tasks/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina una tarea.
- **Parámetros URL:**
  - `id`: ID de la tarea a eliminar.
