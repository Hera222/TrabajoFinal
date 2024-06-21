import { useState, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useAppContext } from "../../hooks/appContext";
import ValidateErrors from "../../componets/services/ValidateErrors";
import validationSchema from "../../componets/services/validationSchema";
import AccessProfile from "../../componets/services/AccessProfil";

export default function Teacher({ teacher, edit, riviewList }) {
  AccessProfile("isAdmin");
  const hostServer = import.meta.env.VITE_REACT_APP_SERVER_HOST;
  const api = `${hostServer}/api/v3/teacher`;
  const { HandleNivelClose } = useAppContext();
  const [error, setError] = useState(false);
  const initialForm = {
    id: teacher ? teacher._id : "",
    dni: teacher ? teacher.dni : "",
    nombre: teacher ? teacher.nombre : "",
    apellido: teacher ? teacher.apellido : "",
    email: teacher ? teacher.email : "",
    password: teacher ? teacher.pasword : "",
    confirmPassword: "",
    adress: teacher ? teacher.adress : "",
    fechaNacimiento: teacher ? teacher.fechaNacimiento : new Date("2023/12/31"),
    city: teacher ? teacher.city : "",
    celular: teacher ? teacher.celular : "",
    condicion: teacher ? teacher.condicion : "",
  };

  const { formData, onInputChange, validateForm, errorsInput, clearForm } =
    useForm(initialForm, validationSchema);

  const {
    id,
    dni,
    nombre,
    apellido,
    email,
    password,
    confirmPassword,
    celular,
    fechaNacimiento,
    adress,
    city,
    condicion,
  } = formData;

  let {
    data,
    isLoading = false,
    getData,
    createData,
    updateData,
  } = useFetch(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numError = validateForm();
    if (!numError) {
      let url = `${api}`;
      if (!edit) {
        await createData(url, formData);
      } else {
        await updateData(url, teacher._id, formData);
      }
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Debe corregir la información para poder registrarla",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  useEffect(() => {
    if (data?.message) {
      data?.message &&
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data?.message,
          showConfirmButton: false,
          timer: 3500,
        });
    } else {
      if (data?.data?.status === 200 || data?.data?.status === 201) {
        data?.data.message &&
          Swal.fire({
            position: "top",
            icon: "success",
            title: data?.data?.message,
            showConfirmButton: false,
            timer: 3500,
          });
      } else {
        data?.data.message &&
          Swal.fire({
            position: "top",
            icon: "warning",
            title: data?.data?.message,
            showConfirmButton: false,
            timer: 3500,
          });
      }
      if (data?.status === 200) {
        HandleNivelClose();
        riviewList();
      }
      if (data?.status === 201) {
        clearForm();
        riviewList();
      }
    }
  }, [data]);

  return (
    <>
      {
        // isLoading ? (
        // <h3>Cargando...</h3>
        // ) :
        error ? (
          errorMessage()
        ) : (
          <div className="container p-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="dni">Número de Documento</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    value={dni}
                    onChange={onInputChange}
                  />
                  {errorsInput.dni && (
                    <ValidateErrors errors={errorsInput.dni} />
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="nombre">Nombres </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingrese Nombres"
                    value={nombre}
                    onChange={onInputChange}
                  />
                  {errorsInput.nombre && (
                    <ValidateErrors errors={errorsInput.nombre} />
                  )}{" "}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputName">Apellidos </label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    placeholder="Ingrese Apellidos"
                    value={apellido}
                    onChange={onInputChange}
                  />
                  {errorsInput.apellido && (
                    <ValidateErrors errors={errorsInput.apellido} />
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Ingrese Email"
                    value={email}
                    onChange={onInputChange}
                  />
                  {errorsInput.email && (
                    <ValidateErrors errors={errorsInput.email} />
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="celular">Número de Celular </label>
                  <input
                    type="text"
                    className="form-control"
                    name="celular"
                    placeholder="Ingrese Celular"
                    value={celular}
                    onChange={onInputChange}
                  />
                  {errorsInput.celular && (
                    <ValidateErrors errors={errorsInput.celular} />
                  )}{" "}
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="password">Contraseña </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Ingrese contraseña"
                    value={password}
                    onChange={onInputChange}
                  />
                  {errorsInput.password && (
                    <ValidateErrors errors={errorsInput.password} />
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="confirmPassword">
                    Confirmación de Contraseña
                  </label>
                  <input
                    type="confirmPassword"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Indique su contraseña"
                    value={confirmPassword}
                    onChange={onInputChange}
                  />
                  {errorsInput.confirmPassword && (
                    <ValidateErrors errors={errorsInput.confirmPassword} />
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="adress">Dirección </label>
                <input
                  type="text"
                  className="form-control"
                  name="adress"
                  placeholder="Ingrese dirección"
                  value={adress}
                  onChange={onInputChange}
                />
              </div>

              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="city">Ciudad </label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={city}
                    placeholder="Ingrese ciudad"
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="condicion">Estatus</label>
                  <select
                    name="condicion"
                    className="form-control"
                    value={condicion}
                    onChange={onInputChange}
                  >
                    <option>Seleccionar </option>
                    <option>Activo</option>
                    <option>No Activo</option>
                  </select>
                </div>
              </div>
              <div className="btn-submit mt-4">
                {edit ? (
                  <button type="submit" className="btn btn-success w-100">
                    Actualizar
                  </button>
                ) : (
                  <button type="submit" className="btn btn-success w-100">
                    Agregar
                  </button>
                )}
              </div>
            </form>
          </div>
        )
      }
    </>
  );
}
