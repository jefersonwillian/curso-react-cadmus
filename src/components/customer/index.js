import { Link } from "react-router-dom";
import "./customer.css";
import {SpanStyles} from './styes';
import  { colorContext } from '../../pages/contexts/colorContext'
import { useCallback, useContext, useEffect, useState } from "react";

function Customer(props) {
  const { name, active } = props;

  const { color } = useContext(colorContext);
  
  return (
    <div className="customer" style={{ background: color }}>
      <div className="customer__name">
        <SpanStyles size="20px">{name}</SpanStyles>
      </div>
      <div className="customer__link">{active && <Link to="/">Site</Link>}</div>
    </div>
  );
}

export default Customer;
