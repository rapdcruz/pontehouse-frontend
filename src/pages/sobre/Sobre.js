import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import cardImageMac from '../../assets/img/novos/card-image/mac-air.jpg';
import cardImageCoffe from '../../assets/img/novos/card-image/coffe.jpg';
import cardImageProfile from '../../assets/img/novos/card-image/profile.jpg';



import PageHeader from '../../components/common/PageHeader';




const Sobre = () => {
  return (
    <>
      <PageHeader
        title="Sobre Nós"
        description="Consulta mais informação sobre a empresa de desenvolvimento."
        className="mb-3">
      </PageHeader>
      <Card className="mb-3 ">
        <Card.Body >
          <Row>
            <Col>
              <h4 className="text-900 text-center">A equipa</h4>
              <h6 className="text-900 text-center">Alguma informação sobre a equipa de desenvolvimento DevDash.</h6>
            </Col>
          </Row>
        </Card.Body>
        <Row className="g-3 m-3 mb-6">
          <Col md={4} xxl={3}>
            <Card >
              <Card.Img src={cardImageProfile} variant='top' />
              <Card.Body>
                <Card.Title as='h3' className='fs-3 text-success'>
                  Rafael Cruz
                </Card.Title>
                <Card.Text>
                  CEO
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xxl={3}>
            <Card>
              <Card.Img src={cardImageMac} variant='top' />
              <Card.Body>
                <Card.Title as='h3' className='fs-3 text-success'>
                  MacBook Air 13'
                </Card.Title>
                <Card.Text>
                  Máquina de produção
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xxl={3}>
            <Card>
              <Card.Img src={cardImageCoffe} variant='top' />
              <Card.Body>
                <Card.Title as='h3' className='fs-3 text-success'>
                  Café
                </Card.Title>
                <Card.Text>
                  Matéria Prima
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Sobre;
