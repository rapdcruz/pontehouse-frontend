import './Hero.css';
import TypeAnimation from 'react-type-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../assets/img/novos/landing/bg.png';
import dashboard from '../../../assets/img/novos/landing/dashboard.png';
import videoBg from '../../../assets/video/video.mp4';
import Section from '../../../components/common/Section';


const Hero = () => {


  return (
    <Section
      className="py-0 overflow-hidden light"
    image={bg}
      video={[videoBg]}  
      position="center bottom"
      overlay
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={12}
          lg={12}
          xl={8}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          <h1 className="text-white fw-light">
            <TypeAnimation
              cursor={true}
              sequence={[
                '0% Desperdício', 3000, '0% Excesso de stock', 3000, '0% Desorganização', 3000, '0% Tempos de espera', 3000, ''
              ]}
              className="fw-bold ps-2"
              repeat={Infinity}
            />
            no armazém da casa da ponte.

          </h1>
          <p className="lead text-white opacity-75">
            Com esta aplicação, gerir a casa da ponte nunca foi tão fácil. Faça login e abasteça o armazém de bebidas.
          </p>
          <Button
            as={Link}
            to="/public/login"
            variant="outline-success"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-0 py-2"

          >
            Começar a usar
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Button>
        </Col>
        <Col
          xl={{ span: 7, offset: 1 }}
          className="align-self-end mt-4 mt-xl-0"
        >
          <Link to="/public/login"
            className="img-landing-banner">
            <img
              className="img-fluid"
              src={dashboard}
              alt=""
            />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
