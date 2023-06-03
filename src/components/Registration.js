import React from "react";
import { Button, Col, Container, Label, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from "./auth";

const Registration = () => {

  let navigate = useNavigate('')
  const auth = useAuth()

  const leadgenSchema = Yup.object().shape({
    name: Yup.string().required('Enter Valid Email'),
    email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
    password: Yup.string().required("Enter Valid Password"),
    cnfpassword: Yup.string().required("Enter Valid Password"),
  });

  const handleSubmit = (user) => {
    fetch("http://localhost:4000/userdata", {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        cnfpassword: user.cnfpassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    localStorage.setItem("token", "userToken");
    auth.login(user)
    localStorage.setItem("token", "newUser");
    navigate("/products", { replace: true });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xl="4" md="6" className="pt-5">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                cnfpassword: "",
              }}
              validationSchema={leadgenSchema}
              onSubmit={(values, { resetForm }) => {
                // console.log(values);
                handleSubmit(values);
              }}
            >
              {({ errors, touched, values }) => (
                <Form className="leadgen-form border-none shadow rounded px-4 mt-5">
                  <p className="h5 text-secondary text-center py-5 m-0">
                    Register to create account.
                  </p>
                  <Row>
                    <Col
                      xs="12"
                      className={
                        errors.name && touched.name
                          ? "form-group error"
                          : "form-group"
                      }
                    >
                      <Field
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Enter Name"
                        className={
                          values.name ? "form-control active" : "form-control"
                        }
                      />
                      {errors.name && touched.name ? (
                        <div className="form-error">{errors.name}</div>
                      ) : null}
                    </Col>
                    <Col
                      xs="12"
                      className={
                        errors.email && touched.email
                          ? "form-group error"
                          : "form-group"
                      }
                    >
                      <Field
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter Email"
                        className={
                          values.email ? "form-control active" : "form-control"
                        }
                      />
                      {errors.email && touched.email ? (
                        <div className="form-error">{errors.email}</div>
                      ) : null}
                    </Col>
                    <Col
                      xs="12"
                      className={
                        errors.password && touched.password
                          ? "form-group error"
                          : "form-group"
                      }
                    >
                      <Field
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Enter Password"
                        className={
                          values.password
                            ? "form-control active"
                            : "form-control"
                        }
                      />
                      {errors.password && touched.password ? (
                        <div className="form-error">{errors.password}</div>
                      ) : null}
                    </Col>
                    <Col
                      xs="12"
                      className={
                        errors.cnfpassword && touched.cnfpassword
                          ? "form-group error"
                          : "form-group"
                      }
                    >
                      <Field
                        type="password"
                        name="cnfpassword"
                        autoComplete="off"
                        placeholder="Enter Password"
                        className={
                          values.cnfpassword
                            ? "form-control active"
                            : "form-control"
                        }
                      />
                      {errors.cnfpassword && touched.cnfpassword ? (
                        <div className="form-error">{errors.cnfpassword}</div>
                      ) : null}
                    </Col>
                    <Col
                      xs="12"
                      className="form-group d-flex justify-content-center"
                    >
                      <Button type="submit" className="btn btn-primary w-100">
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
