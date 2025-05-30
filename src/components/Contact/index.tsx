import React, { useState } from "react";

import { Container, Header, Form } from "./styles";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
import { TextSection } from "../TextSection";

import * as yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { ButtonGeneric } from "../ButtonGeneric";

export function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório.")
      .min(4, "Pelo menos 4 letras."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("E-mail é obrigatório."),
    message: yup
      .string()
      .required("Mensagem é obrigatória")
      .max(600, "Ultrapassou o limite de 600 caracteres."),
  });

  return (
    <>
      <Container id="contact">
        <Header>
          <div>
            <TextSection
              tabIndex={0}
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-offset="-20"
            >
              Fale comigo
            </TextSection>
          </div>

          <img
            src="/assets/arrow-right.svg"
            alt="Seta para a direita"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-offset="-20"
          />
        </Header>

        <div data-aos="fade-left" data-aos-duration="600" data-aos-offset="-20">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);

              const data = {
                name: values.name,
                email: values.email,
                message: values.message,
              };

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });

                if (response.status === 200) {
                  setSuccess(true);
                } else {
                  console.error("Failed to send message");
                }
              } catch (error) {
                console.error("Error:", error);
              } finally {
                setLoading(false);
                setSubmitting(false);
              }
            }}
            validationSchema={contactSchema}
          >
            {({ values, errors, touched, handleChange }) => (
              <>
                <Form as={FormikForm}>
                  <div>
                    <div>
                      <label htmlFor="name">Nome</label>
                      <Field
                        value={values.name}
                        type="text"
                        name="name"
                        placeholder="Nome"
                        onChange={handleChange}
                        className={
                          touched.name && errors.name ? "error-field" : ""
                        }
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="error"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        value={values.email}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        className={
                          touched.email && errors.email ? "error-field" : ""
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="error"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message">Mensagem</label>
                    <Field
                      as="textarea"
                      value={values.message}
                      name="message"
                      placeholder="Mensagem"
                      rows="5"
                      onChange={(e) => {
                        handleChange(e);
                        setCharCount(e.target.value.length);
                      }}
                      className={
                        touched.message && errors.message ? "error-field" : ""
                      }
                    />
                    {errors.message ? (
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="error"
                      />
                    ) : (
                      <p className="warning">{charCount} de 600 caracteres.</p>
                    )}
                  </div>

                  <div>
                    {loading ? (
                      <div className="spinner">
                        <span />
                      </div>
                    ) : success ? (
                      <p className="success">
                        Mensagem enviada, entrarei em contato!
                      </p>
                    ) : (
                      <ButtonGeneric
                        type="submit"
                        disabled={loading || success}
                        onClick={() =>
                          useAnalyticsEventTracker(
                            "Form",
                            "click",
                            "send-email"
                          )
                        }
                      >
                        Solicitar proposta
                      </ButtonGeneric>
                    )}
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
}
