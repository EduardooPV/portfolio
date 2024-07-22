import React, { useState } from "react";

import { Container, Header, Form } from "./styles";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
import { TextSection } from "../TextSection";

import * as yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";

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
      <Container>
        <Header>
          <TextSection
            tag="<h2>"
            tabIndex={0}
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Fale comigo
          </TextSection>
          <p data-aos="fade-up" data-aos-duration="600">
            Gostaria de saber mais sobre os meus projetos ou discutir uma
            possível colaboração? Use o formulário para enviar uma mensagem
            diretamente para mim.
          </p>
          <strong> Vamos construir algo incrível juntos!</strong>
        </Header>

        <div>
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

                  {loading ? (
                    <div className="spinner">
                      <span />
                    </div>
                  ) : success ? (
                    <p className="success">Mensagem enviada, obrigado!</p>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading || success}
                      onClick={() =>
                        useAnalyticsEventTracker("Form", "click", "send-email")
                      }
                    >
                      Enviar
                    </button>
                  )}
                </Form>
              </>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
}
