import { Link } from "react-router-dom";
import "./customer.css";
import {SpanStyles} from './styes';

function Customer(props) {
  const { name, active } = props;
  return (
    <div className="customer">
      <div className="customer__name">
        <SpanStyles size="20px">{name}</SpanStyles>
      </div>
      <div className="customer__link">{active && <Link to="/">Site</Link>}</div>
    </div>
  );
}

export default Customer;
