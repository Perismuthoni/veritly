import React from 'react';
import '../css/texttoggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const textToggle = (props) => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="toggle">
      <div> 
        <div className="header" >{props.header}</div>
        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
      </div>
      <div className="desc" >{props.description}</div>
    </div>
  );
};

export default textToggle;
