import ipv from '../../assets/img/novos/logo-school/ipv_logo_white.png';
import tdm from '../../assets/img/novos/logo-school/tdm_logo_white.png';

import { Col, Row } from 'react-bootstrap';
const FooterPublic = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <section className=" bg-dark py-0 text-center fs--1 light">
        <hr className="my-0 border-600 opacity-25" />
        <div className="container py-3">
          <Row className="justify-content-between">
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">
                Aplicações para a Internet II | Rafael Cruz | 17524{' '}
                <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" />
                {new Date().getFullYear()} &copy;{' '}
              </p>
            </Col>
            <Col xs={12} sm="auto">
              <img className="m-1 mx-auto px-2" src={ipv} alt="" width="190" />
              <img className="m-1 mx-auto px-2" src={tdm} alt="" width="80" />

            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FooterPublic;
