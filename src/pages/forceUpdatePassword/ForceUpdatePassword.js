import React from 'react';

import PageHeader from '../../components/common/PageHeader';
import UpdatePassword from '../profileSettings/components/UpdatePassword';
import { Card } from 'react-bootstrap';


const ForceUpdatePassword = () => {
    return (
        <>
            <PageHeader
                title="Atualizar password"
                description="Recomendamos a alterar a sua password predefinida pelo sistema para poder aceder ao website."
                className="mb-3"
            />
            <Card className="mb-3 ">
                <Card.Body >
                    <UpdatePassword></UpdatePassword>
                </Card.Body>

            </Card>


        </>
    );
};

export default ForceUpdatePassword;
