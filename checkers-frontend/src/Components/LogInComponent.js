import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import RegisterFormImg from "../Register-Form-Image.png";

export default function LogInComponent(){
	const url = "https://localhost:7041/account/login";

	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Email: data.Email,
				Password: data.Password,
			},)
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("user", res.data.email);
				localStorage.setItem("isAdmin", res.data.isAdmin);
				window.dispatchEvent(new Event("storage"));
				navigate("/");
			});
	}
	const navigate = useNavigate();

	const [data, setData] = useState({
		Email: "",
		Password: "",
	})

	return (
		<section className="signupDiv" >
			<div className="container h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-lg-12 col-xl-11">
						<div className="card text-black register-form">
							<div className="card-body p-md-5">
								<div className="row justify-content-center">
									<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

										<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

										<form className="mx-1 mx-md-4" onSubmit={(e) => {submit(e)}}>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="email" id="Email" className="form-control" onChange={(e) => {handle(e)}}/>
													<label className="form-label" htmlFor="Email">Your
														Email</label>
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="password" id="Password"
													       className="form-control" onChange={(e) => {handle(e)}}/>
													<label className="form-label"
													       htmlFor="Password">Password</label>
												</div>
											</div>

											<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
												<button type="submit" className="btn btn-primary btn-lg">Log in
												</button>
											</div>

										</form>

									</div>
									<div
										className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

										<img
											src={RegisterFormImg} className="img-fluid" alt="Sample image"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
