import React, { useState } from "react";
import "./RegisterPage.css";
import "../../font.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap components
import { Form, Input } from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import { serverUrl } from "../../config";
import axios from "axios";

toast.configure();

const RegisterPageN = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
		phone: "",
		college: "",
		sex: 1,
		referralId: "CLST0000",
	});
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${serverUrl}/api/users/signup`, {
				// credentials: "include",
				method: "POST",
				referrerPolicy: "no-referrer",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			setMessage(response.message);
			console.log(response);
			console.log(message);
			if (response.status === 200) {
				toast.success(message);
			} else {
				toast.error(message);
			}
		} catch (error) {
			toast.error("An error occurred during registration");
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<>
			{/* Temparary fix */}
			<div
				style={{
					height: "90px",
				}}></div>
			<Navbar />
			<div className="wrapper">
				<div className="page-header">
					<div className="page-header-image" />
					<section className="mid-section">
						<div className="register">
							<div className="row-1">
								<div>
									<h4 className="Registersty">Register</h4>
								</div>
								<Form
									id="form"
									className="flex flex-col"
									onSubmit={handleSubmit}>
									<Input
										type="text"
										placeholder="Full Name"
										name="name"
										className="fields"
										onChange={handleChange}
									/>
									<Input
										type="text"
										placeholder="Email"
										name="email"
										onChange={handleChange}
									/>
									<Input
										type="password"
										name="password"
										placeholder="Create Password"
										onChange={handleChange}
									/>
									<Input
										type="text"
										name="college"
										placeholder="College name"
										onChange={handleChange}
									/>
									<Input
										type="text"
										name="phone"
										placeholder="Mobile Number"
										onChange={handleChange}
									/>
									<Input
										type="text"
										name="referralId"
										placeholder="Refferal ID"
										onChange={handleChange}
									/>
									<button className="bttn">Register</button>
								</Form>
								<div>
									<h4 className="alrdyregis">
										Already Registered?
									</h4>
								</div>
								<div style={{ textAlign: "center" }}>
									<a
										href="/signin-page"
										style={{
											color: "black",
											textAlign: "center",
											textDecoration: "underline black",
										}}>
										Log In
									</a>
								</div>
							</div>
							<div className="row-2">
								<img
									src="https://github-production-user-asset-6210df.s3.amazonaws.com/99478938/275152281-153aa4ef-93ae-46b9-92e8-5639b16f463d.png"
									alt=""
								/>
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default RegisterPageN;
