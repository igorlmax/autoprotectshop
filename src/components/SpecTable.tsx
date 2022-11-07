import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
  Container,
  Grid,
  TableFooter,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-multi-lang";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  title: string,
  icon: any,
  action1: boolean,
  action2: boolean
) {
  return {
    title,
    icon,
    action1,
    action2,
  };
}

const SpecTable = () => {
  const t = useTranslation();
  const theme = useTheme();

  const rows = [
    createData(t("facilities.facilityTest1"), "icon", true, true),
    createData(t("facilities.facilityTest2"), "icon", true, true),
    createData(t("facilities.facilityTest3"), "icon", true, true),
    createData(t("facilities.facilityTest4"), "icon", true, true),
    createData(t("facilities.facilityTest5"), "icon", true, true),
    createData(t("facilities.facilityTest6"), "icon", true, true),
    createData(t("facilities.facilityTest7"), "icon", true, false),
    createData(t("facilities.facilityTest8"), "icon", true, false),
    createData(t("facilities.facilityTest9"), "icon", true, false),
    createData(t("facilities.facilityTest10"), "icon", true, false),
  ];

  return (
    <Grid
      container
      p={10}
    >
      <Container maxWidth={"md"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>{t("facilities.column1")}</StyledTableCell>
                <StyledTableCell align="center" />
                <StyledTableCell align="center">
                  {t("facilities.column2")}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {t("facilities.column3")}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <BiInfoCircle color={"grey"} fontSize={24} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.action1 ? (
                      <IoIosCheckmarkCircle color={"#10a258"} fontSize={24} />
                    ) : null}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.action2 ? (
                      <IoIosCheckmarkCircle color={"#10a258"} fontSize={24} />
                    ) : null}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center" />
                <StyledTableCell align="center">
                  <Link to={"/quote"} style={{ textDecoration: "none" }}>
                    <Typography
                      color={theme.palette.primary.main}
                      fontSize={14}
                    >
                      {t("pricing.learnMore")}
                    </Typography>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Link to={"/quote"} style={{ textDecoration: "none" }}>
                    <Typography
                      color={theme.palette.primary.main}
                      fontSize={14}
                    >
                      {t("pricing.learnMore")}
                    </Typography>
                  </Link>
                </StyledTableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </Grid>
  );
};

export default SpecTable;
