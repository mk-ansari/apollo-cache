// CREATED BY: ANSARI KAMAL

import {
	Box,
	TextField,
	Container,
	Grid,
	Button,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TEMP_CLIENT, ADD_CLIENT } from "../GraphQL/Mutations";

import { style } from "./SignUp.style";

const formInitialValue = {
	first_name: "",
	last_name: "",
	business_email: "",
	country_code: "",
	mobile_no: "",
	password: "",
};

const SignUp = () => {
	const [formData, setFormData] = useState(formInitialValue);
	const [addTempClient, { data, error, loading }] = useMutation(ADD_CLIENT);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		addTempClient({
			variables: {
				first_name: "kamal",
				last_name: "ansari",
				business_email: "ak@test.com",
				business_type: "xyz",
				business_name: "abc",
				business_address: "dummmy address",
				country_code: parseInt("10"),
				mobile_no: "9429931452",
				password: "1234",
				is_term_condition_verify: true,
				domain_name: "$domain_name",
			},
		});
		setFormData(formInitialValue);
	};

	if (data) {
		console.log(data);
	}
	return (
		<Container component="main" maxWidth="xs" sx={style.signupContainer}>
			<Box>
				<Typography component="h1" variant="h5" sx={{ my: 2 }}>
					Create Account
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate>
					{error && (
						<Typography variant="subtitle2" color="error" sx={{ my: 2 }}>
							{error.message}
						</Typography>
					)}
					{data && data.addClient.message && (
						<Typography variant="subtitle2" color="#66bb6a" sx={{ my: 2 }}>
							{data.addClient.message}
						</Typography>
					)}
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="first_name"
								label="First Name"
								value={formData.first_name}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="last_name"
								label="Last Name"
								value={formData.last_name}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="business_email"
								label="Business Email"
								value={formData.business_email}
								onChange={handleChange}
								autoComplete="email"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="country_code"
								label="Country Code"
								type="number"
								value={formData.country_code}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="mobile_no"
								label="Mobile No"
								value={formData.mobile_no}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="password"
								name="password"
								label="Password"
								value={formData.password}
								onChange={handleChange}
								fullWidth
							/>
						</Grid>
					</Grid>

					{loading ? (
						<Button fullWidth disabled variant="contained">
							Submiting...
						</Button>
					) : (
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={style.button}
						>
							Register
						</Button>
					)}
					<Grid container justifyContent="center">
						<Grid item>
							{/* <Link to="/signin">Already have an account? Sign in</Link> */}
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default SignUp;
