import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { CardComponentsStyles } from "./styes";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

const CardJeff = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  marginRight: "1rem",
  marginLeft: "1rem",
  marginBottom: "3rem"
}));

function CardComponent(props) {
  const { img, text } = props;
  return (
    <CardJeff>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Item>
            <Avatar src={img} />
          </Item>
          <Item>{text}</Item>
        </Stack>
      </CardContent>
    </CardJeff>
  );
}

export default CardComponent;
