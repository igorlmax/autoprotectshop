import React from "react";
import { Button, Container, Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-multi-lang";
import {
  FormikHelpers,
  FormikStep,
  FormikStepper,
  InputField,
} from "formik-stepper";
import { useFormik } from "formik";
import { BsPencilFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("The username field is required"),
  password: Yup.string().required("The password field is required"),
  brand: Yup.string().required("The Brand field is required"),
  model: Yup.string().required("The Model field is required"),

  registrationYear: Yup.string().required(
    "The registration year field is required"
  ),

  fuel: Yup.string().required("The Fuel type field is required"),

  transmission: Yup.string().required(
    "The transmission type field is required"
  ),

  horsepower: Yup.string().required("The transmission type field is required"),

  kmPerYear: Yup.string().required("The km per year field is required"),

  firstName: Yup.string().required("The Firstname field is required"),
  lastName: Yup.string().required("The Lastname field is required"),
  birthDate: Yup.string().required("The Birth date type field is required"),
  zip: Yup.string().required("The zip field is required"),
});

const initialValues = {
  username: "",
  password: "",
  brand: "",
  model: "",
  registrationYear: "",
  fuel: "",
  transmission: "",
  horsepower: "",
  kmPerYear: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  zip: "",
};

const Login = () => {
  const t = useTranslation();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    console.log(values);
  };

  return (
    <>
      <Grid
        container
        style={{ backgroundColor: theme.palette.primary.light }}
        py={28}
      >
        <Container maxWidth={"md"}>
          <FormikStepper
            onSubmit={onSubmit}
            initialValues={{
              username: "",
              password: "",
              brand: "",
              model: "",
              registrationYear: "",
              fuel: "",
              transmission: "",
              horsepower: "",
              kmPerYear: "",
              firstName: "",
              lastName: "",
              birthDate: "",
              zip: "",
            }}
            validationSchema={validationSchema}
            withStepperLine={true}
            nextButton={{
              style: {
                backgroundColor: theme.palette.primary.main,
                borderRadius: 50,
              },
              label: t("quote.next"),
            }}
            prevButton={{
              style: {
                backgroundColor: theme.palette.primary.main,
                borderRadius: 50,
              },
              label: t("quote.back"),
            }}
            submitButton={{
              style: {
                backgroundColor: theme.palette.primary.main,
                borderRadius: 50,
                visibility: "hidden",
              },
              label: t("quote.done"),
            }}
          >
            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.insuranceCover")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
              <InputField
                name="username"
                label={t("login.username")}
                floating
                type="text"
              />

              <InputField
                name="password"
                label={t("login.password")}
                floating
                type="text"
              />
            </FormikStep>
          </FormikStepper>

          <Button
            variant={"contained"}
            style={{
              borderRadius: 50,
              padding: "12px 30px",
              marginTop: 14,
              width: "120px",
            }}
            size={"large"}
          >
            {t("login.login")}
          </Button>
        </Container>
      </Grid>
    </>
  );
};

export default Login;
