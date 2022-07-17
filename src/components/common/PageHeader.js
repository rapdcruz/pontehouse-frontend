import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, Col, Row } from 'react-bootstrap';
import Background from './Background';
import bg from '../../assets/img/novos/bg/bg2.png';
import createMarkup from '../../helpers/createMarkup';

const PageHeader = ({
  title,
  preTitle,
  titleTag: TitleTag,
  description,
  image,
  col,
  children,
  ...rest
}) => (
  <Card {...rest}>
    <Background
      image={image}
      className="bg-card"
      style={{
        borderTopRightRadius: '0.375rem',
        borderBottomRightRadius: '0.375rem'
      }}
    />
    <Card.Body className="position-relative">
      <Row>
        <Col {...col}>
          {preTitle && <h6 className="text-600">{preTitle}</h6>}
          <h4 className="text-success">{title}</h4>
          {description && (
            <h6
              className={classNames('text-600', { 'mb-0': !children })}
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          )}
          {children}
        </Col>


      </Row>
    </Card.Body>
  </Card>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  preTitle: PropTypes.string,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  col: PropTypes.shape(Col.propTypes),
  image: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

PageHeader.defaultProps = { col: { lg: 8 }, image: bg, titleTag: 'h3' };

export default PageHeader;
