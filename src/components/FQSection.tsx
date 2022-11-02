import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-multi-lang";

const FqSection = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const t = useTranslation();

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Container maxWidth={"lg"} style={{ height: 400, marginTop: "35px" }}>
        <Typography align={"center"} variant={"h2"}>
          FAQs
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {t("fq.1panelHeading")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("fq.1panelParagraph")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {t("fq.2panelHeading")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("fq.2panelParagraph")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {t("fq.3panelHeading")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("fq.3panelParagraph")}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {t("fq.4panelHeading")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("fq.4panelParagraph")}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {t("fq.5panelHeading")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("fq.5panelParagraph")}</Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default FqSection;
