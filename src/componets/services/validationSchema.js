const validationSchema = {
  dni: [
    (value) =>
      value.trim() === "" ? "El DNI es requerido" : undefined,
    (value) =>
      value.length <= 8 ? "El DNI debe tener al menos 8 caracteres" : undefined,
    (value) =>
      value.match("^[0-9]+$") === null ? "Solo se admiten números" : undefined,
  ],
  codigo: [
    (value) =>
      value.trim() === "" ? "El código del curso es requerido" : undefined,
   ],
  nombre: [
    (value) => (value.trim() === "" ? "El Nombre es requerido" : undefined),
    (value) =>
      value.length < 3 ? "El Nombre debe tener almenos 3 caracteres" : undefined,
  ],
  apellido: [
    (value) => (value.trim() === "" ? "El Apellido es requerido" : undefined),
    (value) =>
      value.length < 3
        ? "El Apellido deben tener al menos 3 caracteres"
        : undefined,
  ],
  email: [
    (value) => (value.trim() === "" ? "El Email es requerido" : undefined),
    (value) =>
      !/^\S+@\S+\.\S+$/.test(value) ? "El Email no es válido" : undefined,
  ],
  password: [
    (value) => (value === "" ? "La contraseña es requerida" : undefined),
  ],
  descripcion: [
    (value) =>
      value.trim() === ""
        ? "La descripción ampliada del curso es requerida"
        : undefined,
  ],
  celular: [
    (value) =>
      value.trim() === "" ? "El número de celular es requerido" : undefined,
    (value) =>
      value.length < 9
        ? "El  número debe tener almenos 9 caracteres"
        : undefined,

    // (value) =>
    //   value.match("/^(+?56)?[98765432]d{7}$/") === null
    //     ? "Solo se admiten números de celulares"
    //     : undefined,
  ],

  // confirmPassword: [
  //   (value) =>
  //     value === ""
  //       ? "La confirmación de la contraseña es requerido"
  //       : undefined,
  //   (value) =>
  //     value != initialForm.password
  //       ? "La confirmación de la contraseña debe ser igual a la contraseña"
  //       : undefined,
  // ],
};

export default validationSchema;
