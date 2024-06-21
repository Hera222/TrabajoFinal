import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersContext } from '../../hooks/UsersContext';
import Swal from 'sweetalert2';
import { useFetch } from '../../hooks/useFetch';

function Logout() {
	const navigate = useNavigate();
	const hostServer = import.meta.env.VITE_REACT_APP_SERVER_HOST;
	const url = `${hostServer}/api/v3/user/logout`;
	const { setUsersContext } = useUsersContext();

	let { data, isLoading = false, getData } = useFetch(null);

	const salir = async () => {		
		setUsersContext([]);
		navigate('/');
		window.location.reload(true);
	};

	useEffect(() => {
		salir();
	}, []);
	return <div className="h-full" />;
}

export default Logout;