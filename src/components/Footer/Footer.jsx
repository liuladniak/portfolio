import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        {new Date().getFullYear()}
        <strong> &copy;</strong> <i>Liudmyla Ladniak</i>
      </span>
    </footer>
  );
};

export default Footer;
