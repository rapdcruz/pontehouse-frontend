import { Col, Row } from 'react-bootstrap';
import Section from '../../../components/common/Section';
import CardService from './CardService';





const ContactosItem = () => (
  <Section bg="light" className="text-center">

    <Row className="mt-2">
      <Col lg={4} className='mt-6 mt-lg-0'>
        <CardService media={{ icon: ['fas', 'map'], color: 'success', className: 'fs-4' }} title="Morada" description='Rua do Futuro n.423, 0000-000 Lisboa' />
      </Col>
      <Col lg={4} className='mt-6 mt-lg-0'>
        <CardService media={{ icon: ['fas', 'at'], color: 'success', className: 'fs-4' }} title="E-mail" description='suporte@pontehouse.com' />
      </Col>
      <Col lg={4} className='mt-6 mt-lg-0'>
        <CardService media={{ icon: ['fas', 'phone'], color: 'success', className: 'fs-4' }} title="Telemóvel" description='953 231 032' />
      </Col>
    </Row>






  </Section>
);

export default ContactosItem;
