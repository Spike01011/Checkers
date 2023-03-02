import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function LogOutComponent() {
	const [redirect, setRedirect] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const url = "https://localhost:7041/account/logout";
		axios.get(url);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		localStorage.removeItem("isAdmin");
		window.dispatchEvent(new Event("storage"));
		setRedirect(true);
	}, [])

	useEffect(() => {
		navigate("/");
	},[redirect])

	return <></>;
}
