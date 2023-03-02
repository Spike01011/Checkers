import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import RegisterFormImg from './../Register-Form-Image.png';

const SignUpComponent = () => {
	const url = "https://localhost:7041/account/signup";
	const navigate = useNavigate();

	const [data, setData] = useState({
		Email: "",
		Password: "",
		ConfirmPassword: "",
	})

	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(data);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Username: data.Email,
				Email: data.Email,
				Password: data.Password,
				ConfirmPassword: data.ConfirmPassword,
			})
			.then((res) => {
				navigate("/login");
			});
	}

	return(
		<section className="signupDiv" >
			<div className="container h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-lg-12 col-xl-11">
						<div className="card text-black register-form">
							<div className="card-body p-md-5">
								<div className="row justify-content-center">
									<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

										<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

										<form className="mx-1 mx-md-4" onSubmit={(e) => {submit(e)}}>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="fas fa-user fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="text" id="form3Example1c" className="form-control"/>
													<label className="form-label" htmlFor="form3Example1c">Your
														Name</label>
												</div>
											</div>

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

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="fas fa-key fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="password" id="ConfirmPassword"
													       className="form-control" onChange={(e) => {handle(e)}}/>
													<label className="form-label" htmlFor="ConfirmPassword">Repeat your
														password</label>
												</div>
											</div>

											<div className="form-check d-flex justify-content-center mb-5">
												<input className="form-check-input me-2" type="checkbox" value=""
												       id="form2Example3c"/>
												<label className="form-check-label" htmlFor="form2Example3">
													I agree all statements in <a href="#!">Terms of service</a>
												</label>
											</div>

											<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
												<button type="submit" className="btn btn-primary btn-lg">Register
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
	)
}

export default SignUpComponent;
