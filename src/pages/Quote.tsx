import React from "react";
import * as Yup from "yup";
import {
  CheckBoxField,
  FormikHelpers,
  FormikStep,
  FormikStepper,
  InputField,
  RadioField,
  SelectField,
} from "formik-stepper";
import "formik-stepper/dist/style.css";
import { useFormik } from "formik";
import { Container, Grid, Stack, useTheme } from "@mui/material";
import { carList } from "../assets/data/car-list";
import { FaCheck } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { useTranslation } from "react-multi-lang";
import { AiOutlineFileDone } from "react-icons/ai";
import styled from "@emotion/styled";

export const CustomInput = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const validationSchema = Yup.object().shape({
  brand: Yup.string().required("The Brand field is required"),
  model: Yup.string().required("The Model field is required"),

  registrationMonth: Yup.string().required(
    "The registration month field is required"
  ),
  registrationYear: Yup.string().required(
    "The registration year field is required"
  ),

  fuel: Yup.string().required("The Fuel type field is required"),

  transmission: Yup.string().required(
    "The transmission type field is required"
  ),

  horsepower: Yup.string().required("The transmission type field is required"),

  accident: Yup.string().required("The accident field is required"),

  kmPerYear: Yup.string().required("The km per year field is required"),

  firstName: Yup.string().required("The Firstname field is required"),
  lastName: Yup.string().required("The Lastname field is required"),
  birthDate: Yup.string().required("The Birth date type field is required"),
  zip: Yup.string().required("The zip field is required"),
});

const initialValues = {
  brand: "",
  model: "",
  registrationMonth: "",
  registrationYear: "",
  fuel: "",
  transmission: "",
  horsepower: "",
  accident: "",
  kmPerYear: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  zip: "",
};

const Quote = () => {
  const t = useTranslation();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("output: ", values);
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
      <Grid container style={{ backgroundColor: theme.palette.primary.light }}>
        <Container maxWidth={"md"}>
          <FormikStepper
            onSubmit={onSubmit}
            initialValues={{
              brand: "",
              model: "",
              registrationMonth: "",
              registrationYear: "",
              fuel: "",
              transmission: "",
              horsepower: "",
              accident: "",
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
              },
              label: t("quote.done"),
            }}
          >
            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.vehicleInfo")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
              <SelectField
                name="brand"
                label="Car Brand"
                options={carList.map((car) => {
                  return { value: car.brand, label: car.brand };
                })}
              />
              <SelectField
                name="model"
                label="Car Brand"
                options={carList.map((car) => {
                  return { value: car.brand, label: car.brand };
                })}
              />

              <Stack direction={"row"} justifyContent={"stretch"}>
                <InputField
                  label="Year of registration"
                  name="registrationMonth"
                  type="text"
                  placeholder="MM.YYYY"
                />
                <InputField
                  label="Month of registration"
                  name="registrationYear"
                  type="text"
                  placeholder="MM.YYYY"
                />
              </Stack>
            </FormikStep>
            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.engineSpec")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
              <RadioField
                name="fuel"
                label="Fuel type"
                options={[
                  { label: "electricity", value: "electricity" },
                  { label: "diesel.", value: "diesel" },
                  { label: "petrol", value: "petrol" },
                  { label: "different", value: "different" },
                ]}
              />

              <RadioField
                name="transmission"
                label="Transmission"
                options={[
                  { label: "manual", value: "manual" },
                  { label: "automatic", value: "automatic" },
                ]}
              />

              <SelectField
                name="horsepower"
                label="Horsepower"
                options={[
                  { label: "manual", value: "manual" },
                  { label: "automatic", value: "automatic" },
                ]}
              />
            </FormikStep>

            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.insuranceCover")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
              <CheckBoxField name="accident" label="Accident" />
              <InputField
                name="kmPerYear"
                label="Km per year"
                floating
                type="text"
              />
            </FormikStep>

            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.personalInfo")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
              <InputField
                name="firstName"
                label="Firstname"
                floating
                type="text"
              />
              <InputField
                name="lastName"
                label="Lastname"
                floating
                type="text"
              />
              <InputField
                name="birthDate"
                label="Date of birth"
                floating
                type="text"
              />
              <InputField name="zip" label="Zip code" floating type="text" />
            </FormikStep>

            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.confirmation")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <AiOutlineFileDone />;
                else return <FaCheck />;
              }}
            >
              <h2>Your all done!</h2>
            </FormikStep>
          </FormikStepper>
        </Container>
      </Grid>
    </>
  );
};

export default Quote;
