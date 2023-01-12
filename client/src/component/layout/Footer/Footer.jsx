
import appstore from '../../../images/appstore.png'
import playstore from '../../../images/playstore.png'
import { FooterContainer } from './Footer.element';

const Footer = () => {

  return (
    <FooterContainer id='footer'>
      <div className="leftFooter">
        <h4>DONWLOAD OUR APP</h4>
        <p>Download app for Android or IOS mobile phone</p>
        <img src={appstore} alt="appstore-logo" />
        <img src={playstore} alt="playstore-logo" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>
          Copyrights 2023 &copy; Ozodbek Bakhtiyorov
        </p>

      </div>

      <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="#">Instagram</a>
      <a href="#">Youtube</a>
      <a href="#">Facebook</a>

      </div>
    </FooterContainer>
  );
}

export default Footer;