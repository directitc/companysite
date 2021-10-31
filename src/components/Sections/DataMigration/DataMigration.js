import React from 'react';
import Title from '../../UI/Title/Title';
import Icon from '../../UI/Icon/Icon';
import Text from '../../UI/Text/Text';
import Image from '../../UI/Image/Image';
import DataMigrationImage from '../../../assets/images/services-data-migration.png';
import { FaDotCircle } from 'react-icons/fa';
import './DataMigration.css';

const bulletedList = [
    'Conduct QA testing of raw and refined data imported with ITIL scripts for data validation.',
    'Script source to target mapping (STTM) for HL7 FHIR interoperability.',
    'Write test plans and test cases for unit and integration testing.',
    'Analyze data validation for segment mapping of FHIR USCDI Core Resources.',
    'Data ingestion and FHIR conversion for CMS-ONC mandate.',
];

const DataMigration = () => {
    const dataMigrationTitle = 'Data Migration';
    let bullets = [];

    for (let i = 0; i < bulletedList.length; i++) {
        bullets.push(
            <div className="data-migration__list">
                <Icon
                    classStyle="data-migration__icon"
                    icon={<FaDotCircle />}
                />
                <Text
                    classStyle="data-migration__text"
                    text={bulletedList[i]}
                />
            </div>
        );
    }

    return (
        <div id="data-migration" className="data-migration">
            <div className="data-migration__img-div">
                <Image
                    classStyle="data-migration__img"
                    src={DataMigrationImage}
                />
            </div>
            <div className="data-migration__textbox">
                <Title
                    classStyle="data-migration__title"
                    title={dataMigrationTitle}
                />
                {bullets}
            </div>
        </div>
    );
};

export default React.memo(DataMigration);
