import React, { useState } from "react";
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
import {
    Box,
    Button,
    Container,
    Grid, LinearProgress,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import { carList } from "../assets/data/car-list";
import { FaCheck, FaGasPump } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { useTranslation } from "react-multi-lang";
import { AiOutlineFileDone } from "react-icons/ai";
import styled from "@emotion/styled";
import { MdElectricCar } from "react-icons/md";
import { CgAsterisk } from "react-icons/cg";
import { TbManualGearbox } from 'react-icons/tb';
import { VscGear } from 'react-icons/vsc';

export const CustomInput = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const validationSchema = Yup.object().shape({
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

const Quote = () => {
  const t = useTranslation();
  const theme = useTheme();

  const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);


    const handleClick = () => {
    setIsActive((current) => !current);
  };

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
        <Container
          maxWidth={"md"}
          style={{ height: "820px", marginBottom: 12 }}
        >
          <FormikStepper
            onSubmit={onSubmit}
            initialValues={{
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
                <Typography align='center' variant='h2'>{t("quote.1stepper")}</Typography>

                <SelectField
                name="brand"
                label={t("quote.carBrand")}
                options={carList.map((car) => {
                  return { value: car.brand, label: car.brand };
                })}
              />
              <SelectField
                name="model"
                label={t("quote.model")}
                options={carList.map((car) => {
                  return { value: car.brand, label: car.brand };
                })}
              />

              <Stack direction={"row"} justifyContent={"stretch"}>

                <InputField
                  label="Year of registration"
                  name="registrationYear"
                  type="text"
                  placeholder="MM.YYYY"
                />
              </Stack>
            </FormikStep>

            <FormikStep
              circleColor="#7e57c2"
              label={t("quote.fuel")}
              Icon={({ active, done }) => {
                console.log({ active, done });
                if (active) return <BsPencilFill />;
                else return <FaCheck />;
              }}
            >
                <Typography align='center' variant='h2'>{t("quote.2stepper")}</Typography>
              <Box
                display="flex"
                justifyContent="center"
                gap={2}
                alignItems={"center"}
                justifyItems={"center"}
                my={8}
              >
                <Button onClick={() => setActiveIndex(0)}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: 140,
                      height: 140,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                        border: activeIndex === 0
                            ? "2px solid #7e57c2"
                            : "2px solid #c4b2e3",
                      "&:hover": {
                        border: "2px solid #7e57c2",
                      },
                    }}
                  >
                    <FaGasPump fontSize={32} />
                    <Typography>{t("quote.benzin")}</Typography>
                  </Box>
                </Button>

                <Button onClick={() => setActiveIndex(1)}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: 140,
                      height: 140,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      border: activeIndex === 1
                        ? "2px solid #7e57c2"
                        : "2px solid #c4b2e3",
                      "&:hover": {
                        border: "2px solid #7e57c2",
                      },
                    }}
                  >
                    <MdElectricCar fontSize={32} />
                    <Typography>{t("quote.strom")}</Typography>
                  </Box>
                </Button>

                  <Button onClick={() => setActiveIndex(2)}>
                      <Box
                          sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: 140,
                              height: 140,
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              border: activeIndex === 2
                                  ? "2px solid #7e57c2"
                                  : "2px solid #c4b2e3",
                              "&:hover": {
                                  border: "2px solid #7e57c2",
                              },
                          }}
                      >
                          <Typography>{t("quote.other")}</Typography>
                      </Box>
                  </Button>
              </Box>
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
                  <Typography align='center' variant='h2'>{t("quote.3stepper")}</Typography>
                  <Box
                      display="flex"
                      justifyContent="center"
                      gap={2}
                      alignItems={"center"}
                      justifyItems={"center"}
                      my={8}
                  >
                      <Button onClick={() => setActiveIndex(0)}>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  width: 140,
                                  height: 140,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  border: activeIndex === 0
                                      ? "2px solid #7e57c2"
                                      : "2px solid #c4b2e3",
                                  "&:hover": {
                                      border: "2px solid #7e57c2",
                                  },
                              }}
                          >
                              <VscGear fontSize={32} />
                              <Typography>{t("quote.automatic")}</Typography>
                          </Box>
                      </Button>

                      <Button onClick={() => setActiveIndex(1)}>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  width: 140,
                                  height: 140,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  border: activeIndex === 1
                                      ? "2px solid #7e57c2"
                                      : "2px solid #c4b2e3",
                                  "&:hover": {
                                      border: "2px solid #7e57c2",
                                  },
                              }}
                          >
                              <TbManualGearbox fontSize={32} />
                              <Typography>{t("quote.manual")}</Typography>
                          </Box>
                      </Button>
                  </Box>
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
                <Typography align='center' variant='h2'>{t("quote.4stepper")}</Typography>

                <InputField
                name="kmPerYear"
                label={t("quote.kmPerYear")}
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
                label={t("quote.firstName")}
                floating
                type="text"
              />
              <InputField
                name="lastName"
                label={t("quote.lastName")}
                floating
                type="text"
              />
              <InputField
                name="birthDate"
                label={t("quote.birthYear")}
                floating
                type="text"
              />
              <InputField name="zip"                 label={t("quote.zipCode")}
                          floating type="text" />
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
                <Box style={{margin: '20p0x 200px'}}>
              <Typography my={3} align='center' variant='h2'>{t("quote.doneMessage")}</Typography>
                <LinearProgress />
                </Box>
            </FormikStep>
          </FormikStepper>
        </Container>
      </Grid>
    </>
  );
};

export default Quote;
