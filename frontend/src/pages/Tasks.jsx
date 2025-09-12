import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./../styles/Tasks.css";

const Tasks = () => {
  const [formData, setFormData] = useState({
    tarea_titulo: "",
    tarea_descripcion: "",
    tarea_fechaLimite: "",
    tarea_hora: "",
    estado_id: "",
    prioridad_id: "",
    usuario_id:localStorage.getItem("user_id"),
    tipo_id: "",
  });

  // Manejo de cambios
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/tareas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Tarea registrada con éxito ✅");
        setFormData({
          tarea_titulo: "",
          tarea_descripcion: "",
          tarea_fechaLimite: "",
          tarea_hora: "",
          estado_id: "",
          prioridad_id: "",
          usuario_id:"",
          tipo_id: "",
        });
      } else {
        alert("Error al registrar la tarea ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor ❌");
    }
  };

  return   localStorage.getItem("user_id") === null ?  (
    <div>
      no autenticado
    </div>
  ):
    (
        <div className="dashboard-container">
      {/* Sidebar igual que en Dashboard */}
      <Sidebar />
      
      <div className="dashboard-main">
        {/* Header igual que en Dashboard */}
        <Header />
        
        <div className="dashboard-content">
          <h2>Gestión de Tareas</h2>

          <div className="tasks-container">
            {/* Formulario */}
            <form className="task-form" onSubmit={handleSubmit}>
              <h2>Registrar Nueva Tarea</h2>
              <input
                type="text"
                name="tarea_titulo"
                value={formData.tarea_titulo}
                onChange={handleChange}
                placeholder="Título de la tarea"
                required
              />

              <textarea
                name="tarea_descripcion"
                value={formData.tarea_descripcion}
                onChange={handleChange}
                placeholder="Descripción de la tarea"
                required
              />

              <label>Fecha Límite:</label>
              <input
                type="date"
                name="tarea_fechaLimite"
                value={formData.tarea_fechaLimite}
                onChange={handleChange}
                required
              />

              <label>Hora:</label>
              <input
                type="time"
                name="tarea_hora"
                value={formData.tarea_hora}
                onChange={handleChange}
                required
              />

              <label>Estado:</label>
              <select
                name="estado_id"
                value={formData.estado_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un estado</option>
                <option value="1">Pendiente</option>
                <option value="2">En Progreso</option>
                <option value="3">Completado</option>
                <option value="4">Cancelada</option>
              </select>

              <label>Prioridad:</label>
              <select
                name="prioridad_id"
                value={formData.prioridad_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione prioridad</option>
                <option value="1">Baja</option>
                <option value="2">Media</option>
                <option value="3">Alta</option>
                <option value="4">Crítica</option>
              </select>

              <label>Tipo:</label>
              <select
                name="tipo_id"
                value={formData.tipo_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione tipo</option>
                <option value="1">Academico</option>
                <option value="2">Personal</option>
                <option value="3">Recordatorio</option>
              </select>

              <button type="submit">Guardar Tarea</button>
            </form>

            {/* Aquí podrás poner lista de tareas en el futuro */}
            <div className="tasks-list">
              <h3>📌 Lista de Tareas</h3>
              <p>Aquí se mostrarán las tareas guardadas...</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    )

    
  
};

export default Tasks;
