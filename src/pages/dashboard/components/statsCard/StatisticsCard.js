import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Background from '../../../../components/common/Background';


const StatisticsCard = ({ title, value, linkText, link, image, ...rest }) => {
  return (
    <Card className='overflow-hidden' {...rest} >
      <Background image={image} className="bg-card" />
      <Card.Body className="position-relative">
        <h6>
          {title}
        </h6>
        <div
          className='text-success display-4 fs-4 mb-2 fw-normal font-sans-serif'>
          <CountUp
            start={0}
            end={value}
            duration={2.75}
          />
        </div>
        <Link to={link}
          className="fw-semi-bold fs--1 text-nowrap text-dark">
          {linkText}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StatisticsCard;
