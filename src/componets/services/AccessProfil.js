import React, { useEffect } from "react";
import { useUsersContext } from "../../hooks/UsersContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AccessProfil(profile = "isAdmin") {
  const { usersContext } = useUsersContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (usersContext.role == "isAdmin" || usersContext.role == profile) {
     } else {
      Swal.fire({
         position: "top",
         icon: "info",
         title: "Debe iniciar sesión como Administrador para acceder a esta información",
         showConfirmButton: false,
         timer: 3500,
       });
       navigate(`/`);
     }
  }, []);
}

export default AccessProfil;
