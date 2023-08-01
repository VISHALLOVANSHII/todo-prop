import React from 'react'

const Footer = ({website}) => {
  return (
<h3 className=" text-center">copyright is a syver crime : {website}</h3>
  )
}

export default Footer;

Footer.defaultProps ={
  website: "i am vishal lovanshi",
};