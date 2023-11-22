import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dropdown from "../images/dropdown-icon.png";

const FAQ = (props) => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="faq">
      <div>
        <h3>{ props.title }</h3>
        <img src={dropdown} alt="drop-down" />
        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
      </div>
      <div>{props.description}</div>


    </div>
  );
};

export default FAQ;
