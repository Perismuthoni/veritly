import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FAQ = (props) => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="faq">
      <div>
        <h3>{ props.title }</h3>
        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
      </div>
    </div>
  );
};

export default FAQ;
