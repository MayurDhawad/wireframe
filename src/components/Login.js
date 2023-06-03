import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { useAuth } from "./auth";

const Login = () => {
  let navigate = useNavigate("");
  const auth = useAuth();

  const leadgenSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Enter Valid Email"),
    password: Yup.string().required("Enter Valid Password"),
  });

  const handleSubmit = (user) => {
    console.log(user);
    auth.login(user);
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
                email: "",
                password: "",
              }}
              validationSchema={leadgenSchema}
              onSubmit={(values) => {
                // console.log(values);
                handleSubmit(values);
              }}
            >
              {({ errors, touched, values }) => (
                <Form className="leadgen-form border-none shadow rounded px-4 mt-5">
                  <p className="h5 text-secondary text-center py-5 m-0">
                    Login to your account.
                  </p>
                  <Row>
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

export default Login;
