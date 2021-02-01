const PhoneMasked = ({ phone }) => {
  if (/^\+1/.test(phone)) {
    phone = phone.replace(/(\+1)(\d{3})(\d{3})(\d{4})/, "($2)$3-$4");
  }
  return <span>{phone}</span>;
};

export default PhoneMasked;
