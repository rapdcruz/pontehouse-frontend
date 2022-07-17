import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FooterPrivate = () => (
  <footer className="footer">
    <Row className="justify-content-between text-center fs--1 mt-4 mb-3">
      <Col sm="auto">
        <p className="mb-0 text-600">
          PonteHouse{' '}
          <span className="d-none d-sm-inline-block">|</span> Aplicações para Internet II {' '}
        </p>
      </Col>
      <Col sm="auto">
        <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
        <a href="http://www.di.estgv.ipv.pt/Dep/di/web/?opt=MTE4LjYxLjUyLjU1Lg==">TDM VISEU</a>
      </Col>
    </Row>
  </footer>
);

export default FooterPrivate;
