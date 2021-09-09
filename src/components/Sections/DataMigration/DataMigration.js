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
    const title = 'Data Migration';
    let bullets = [];

    for (let i = 0; i < bulletedList.length; i++) {
        bullets.push(
            <div className="data-migration-list">
                <Icon
                    classStyle={'data-migration-icon'}
                    icon={<FaDotCircle />}
                />
                <Text
                    classStyle={'data-migration-text'}
                    text={bulletedList[i]}
                />
            </div>
        );
    }

    return (
        <div className="w3-padding-64 w3-container data-migration">
            <div className="w3-content data-migration-section">
                <div className="w3-third w3-center w3-padding-small w3-padding-32">
                    <Image classStyle={'data-migration-image'} src={DataMigrationImage} />
                </div>
                <div className="w3-twothird w3-padding-large w3-padding-32">
                    <Title
                        classStyle={'title title-fstart title-dark-gray'}
                        title={title}
                    />
                    {bullets}
                </div>
            </div>
        </div>
    );
};

export default DataMigration;
