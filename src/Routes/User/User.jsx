import { useState, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { useAppContext } from "../../hooks/appContext";
import Swal from "sweetalert2";
import ValidateErrors from "../../componets/services/ValidateErrors";
import validationSchema from "../../componets/services/validationSchema";
import AccessProfile from "../../componets/services/AccessProfil";

export default function User({ user, edit, riviewList }) {
  AccessProfile("isAdmin");
  const { HandleNivelClose } = useAppContext();
  const hostServer = import.meta.env.VITE_REACT_APP_SERVER_HOST;
  const api = `${hostServer}/api/v3/user`;
  const [error, setError] = useState(false);

  const roles = [
    { id: 1, role: "isStudent", descrip: "Estudiante" },
    { id: 2, role: "isTeacher", descrip: "Profesor" },
    { id: 3, role: "isAdmin", descrip: "Administrador" },
  ];

  const estatus = [
    { id: 1, descrip: "Activo" },
    { id: 2, descrip: "No Activo" },
  ];

  const initialForm = {
    id: user ? user._id : null,
    dni: user ? user.dni : "",
    nombre: user ? user.nombre : "",
    apellido: user ? user.apellido : "",
    email: user ? user.email : "",
    password: user ? user.pasword : "",
    confirmPassword: user ? user.pasword : "",
    numTelefono: user ? user.celular : "",
    city: user ? user.city : "",
    adress: user ? user.adress : "",
    role: user ? user.role : "",
    status: user ? user.condicion : "",
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
    adress,
    numTelefono,
    city,
    status,
    role,
  } = formData;

  let { data, isLoading, getData, createData, updateData } = useFetch(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numError = validateForm();
    if (!numError) {
      let url = `${api}`;
      if (!edit) {
        await createData(url, formData);
      } else {
        await updateData(url, user._id, formData);
      }
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Debes corregir la información para poder registrarla",
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
      data?.data.message &&
        Swal.fire({
          position: "top",
          icon: "success",
          title: data?.data?.message,
          showConfirmButton: false,
          timer: 3500,
        });
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
        // <h3>Cargado..</h3>
        // ):
        error ? (
          errorMessage()
        ) : (
          <div className="container p-5">
            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="nombre">Número de Documento </label>
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    placeholder="Ingrese DNI"
                    value={dni}
                    onChange={onInputChange}
                  />
                  {errorsInput.dni && (
                    <ValidateErrors errors={errorsInput.dni} />
                  )}
                </div>
              </div>
              <div className="row">
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
                  )}
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
              <div className="row mt-3">
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
                  <label htmlFor="role">Rol </label>
                  <select
                    className="form-control"
                    name="role"
                    value={role}
                    onChange={onInputChange}
                  >
                    <option>Seleccione </option>
                    {roles.map((item) => {
                      return (
                        <option key={item.id} value={item.role}>
                          {item.descrip}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group col-md-6">
                  <label htmlFor="password">Contraseña </label>
                  <input
                    type="password"
                    autoComplete="on"
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
                    Repita Contraseña 
                  </label>
                  <input
                    type="Password"
                    className="form-control"
                    autoComplete="on"
                    name="confirmPassword"
                    placeholder="Repita contraseña"
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
                  placeholder="Ingrese su dirección"
                  value={adress}
                  onChange={onInputChange}
                />
              </div>
              <div className="row mt-3">
                <div className="form-group col-md-4">
                  <label htmlFor="city">Ciudad </label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={city}
                    placeholder="Ingrese su Ciudad"
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="status">Condición del Usuario</label>
                  <select
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={onInputChange}
                  >
                    <option>Seleccione</option>
                    {estatus.map((item) => {
                      return (
                        <option key={item.id} value={item.descrip}>
                          {item.descrip}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="numTelefono">Celular </label>
                  <input
                    type="text"
                    className="form-control"
                    name="numTelefono"
                    value={numTelefono}
                    placeholder="Ingrese celular"
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="btn-submit mt-4">
                {edit ? (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-success w-100"
                  >
                    Actualizar
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-success w-100"
                  >
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
