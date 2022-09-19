import Swal from "sweetalert2";

const AppointmentsItem = ({ appointment, deleteAppointment }) => {
  const { _id, name, owner, date, hour, symptom } = appointment;

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger mx-1',
        cancelButton: 'btn btn-success mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrá revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, cancelar reserva!',
      cancelButtonText: '¡No, mantener reserva!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Hemos cancelado tu reserva',

        );
        deleteAppointment(_id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Usted mantiene su reserva. Haga click en Regresar para Regresar a la pagina de inicio',

        );
      }
    });
  };

  return (
    <li
      className="d-flex flex-column gap-1 list-group-item list-group-item-action animate__animated animate__fadeInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">{name}</h5>
        <small className="badge rounded-pill text-bg-primary">📆 {date} I ⌛ {hour}</small>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="m-0"><span className="fw-bold">Teléfono de Contacto:</span> {symptom}</p>
          <h6 className="m-0"><span className="fw-bold">Email:</span> <span className="fw-normal">{owner}</span></h6>
        </div>
        <div className="d-flex gap-1">
          <a href='https://proyectorestaurant.netlify.app/'
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Regresar
          </a>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              handleDelete(_id);
            }}
          >Cancelar</button>
        </div>
      </div>
    </li>
  );
};

export default AppointmentsItem;