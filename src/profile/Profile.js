import React from 'react';
import propTypes from 'prop-types';
import { render } from '@testing-library/react';
const Profile = (props )=> {
  function handleName(e) {
  e.preventDefault();
alert(`Hello ${props.FullName}`) ;
  }
    return (
        <div>
          <h1>
          <img src={props.source} width={props.width}/>
          {props.children}
         </h1>
         <h1 style={{fontFamily:'serif'}}>My Name: {props.FullName}</h1>
        <h1 style={{fontFamily:'serif'}}>BIO: {props.bio}</h1>
         <h1 style={{fontFamily:'serif'}}>Profession : {props.profession}</h1>
          <button href="/" onClick={handleName}>
    Click me
  </button>
   </div>
       
    )
}

Profile.defaultProps = {
  FullName: 'zouheir meftah',
  bio:'I am a 27 year old man mmecanic and electric circuit surely playing football',
  profession:'mecanic and electric'
};
Profile.propTypes={
  FullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  width: propTypes.any,
  source: propTypes.any,
  handleName: propTypes.func
}

export default Profile;

