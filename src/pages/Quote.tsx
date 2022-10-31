import React from "react";
import * as Yup from "yup";
import {
  FormikStepper,
  FormikStep,
  InputField,
  CheckBoxField,
  RadioField,
  SelectField,
  FormikHelpers,
} from "formik-stepper";
import "formik-stepper/dist/style.css";
import { Container, Grid } from "@mui/material";
import { IoAdd, IoBalloonSharp } from "react-icons/io5";
import { carList } from "../assets/data/car-list";
import { FaCheck } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

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

  // firstName: Yup.string().required("The Firstname field is required"),
  // lastName: Yup.string().required("The Lastname field is required"),
  // birthDate: Yup.string().required("The Birth date type field is required"),
  // zip: Yup.string().required("The zip field is required"),
  //
});

const Quote = () => {
  const onSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    console.log(values);
  };

  return (
    <>
      <Container maxWidth={"xl"}>
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
          nextButton={{ label: "Next" }}
          prevButton={{ label: "Back" }}
          submitButton={{ label: "Done" }}
        >
          <FormikStep
            label="Section Info"
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

            <InputField
              name="registrationMonth"
              label="Year of registration"
              floating
              type="text"
              placeholder="MM.YYYY"
            />
            <InputField
              name="registrationYear"
              label="Month of registration"
              floating
              type="text"
              placeholder="MM.YYYY"
            />
          </FormikStep>
          <FormikStep
            label="Section Info 3"
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
            label="Section Info 3"
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
            label="Section Info 3"
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
            <InputField name="lastName" label="Lastname" floating type="text" />
            <InputField
              name="birthDate"
              label="Date of birth"
              floating
              type="text"
            />
            <InputField name="zip" label="Zip code" floating type="text" />
          </FormikStep>
        </FormikStepper>
      </Container>
    </>
  );
};

export default Quote;
