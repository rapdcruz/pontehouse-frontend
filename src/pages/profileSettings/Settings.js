import React from 'react';
import ProfileBanner from './components/ProfileBanner';
import coverSrc from '../../assets/img/novos/card-image/card_profile.jpg';

import { Col, Row } from 'react-bootstrap';
import ProfileSettings from './components/ProfileSettings';
import AuthenticationService from '../../services/authentication.service';
import HistoryTable from '../../components/historico/HistoryTable';


const Settings = () => {

  function getUserId(){
    return AuthenticationService.getUserFromStorage().id;

  }
  function getAvatarName(){
    console.log(JSON.stringify(AuthenticationService.getUserFromStorage()));
    return AuthenticationService.getUserFromStorage().primeiroNome+' '+AuthenticationService.getUserFromStorage().ultimoNome;
  }
  return (
    <>
      <ProfileBanner>
        <ProfileBanner.Header
          coverSrc={coverSrc}
          name={getAvatarName()}
          className="mb-8"
        />
      </ProfileBanner>
      <Row className="g-3 mb-3">
        <Col>
          <ProfileSettings  />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col>
          <HistoryTable userId = {getUserId()}/>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
