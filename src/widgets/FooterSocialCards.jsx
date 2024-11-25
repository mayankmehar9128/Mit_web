function Footersocialcard({SocialIcon ,FirstText, secondText}) {
  return (
    <div>
      <i className={SocialIcon}></i>
      <p>{FirstText}</p>
      <p>{secondText}</p>
    </div>
  );
}

export default Footersocialcard;
