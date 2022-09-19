import { useState } from "react";
import Swal from "sweetalert2";

const AppointmentsForm = ({ appointments, setAppointments }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const [formAppointment, setFormAppointment] = useState({
    _id: '',
    name: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''
  });
  const { name, owner, date, hour, symptom } = formAppointment;

  const handleSubmit = (e) => {
    e.preventDefault();
    formAppointment._id = crypto.randomUUID();
    setAppointments([
      ...appointments,
      formAppointment
    ]);
    setFormAppointment({
      _id: '',
      name: '',
      owner: '',
      date: '',
      hour: '',
      symptom: ''
    });
    Toast.fire({
      icon: 'success',
      title: '¡Haz realizado tu reserva! Nos pondremos en contacto contigo. Haz click en Confirmar si tus datos son correctos o Eliminar si deseas cancelar'
    });
  };

  const handleInput = (e) => {
    setFormAppointment({
      ...formAppointment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Datos"
          onInput={handleInput}
          value={name}
          required
        />
        <label htmlFor="floatingInput">Ingresa tus nombres y apellidos</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          name="owner"
          placeholder="Nombre del propietario"
          onInput={handleInput}
          value={owner}
          required
        />
        <label htmlFor="floatingInput">Ingresa tu correo electrónico</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="form-control"
          name="date"
          placeholder="Fecha"
          onInput={handleInput}
          value={date}
          required
        />
        <label htmlFor="floatingInput">Fecha</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="time"
          className="form-control"
          name="hour"
          placeholder="Hora"
          onInput={handleInput}
          value={hour}
          required
        />
        <label htmlFor="floatingInput">Hora</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          name="symptom"
          placeholder="Celular"
          onInput={handleInput}
          value={symptom}
          required
        />
        <label htmlFor="floatino nngInput">Teléfono de contacto</label>
      </div>
      <button
        type="submit"
        className="btn btn-info w-100 fw-bold"
      >
       Reservar
      </button>
    </form>
  );
};

export default AppointmentsForm;