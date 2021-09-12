import React from 'react';
import Title from '../../UI/Title/Title';
import Icon from '../../UI/Icon/Icon';
import Text from '../../UI/Text/Text';
import Image from '../../UI/Image/Image';
import SystemIntegrationImage from '../../../assets/images/services-system-integration.png';
import { FaDotCircle } from 'react-icons/fa';
import './SystemIntegration.css';

const bulletedList = [
    'Architect and document interfaces including technical definitions, data flow and integration formats and protocols for ingestion.',
    'Data validation of patient attribution files writing and executing queries for analysis of import/export.',
    'Work with ambiguous requirements which drives collaboration with business group and make decisions on application functionality.',
    'Document technical specs and data flow diagrams.',
    'Analyze data validation for segment mapping data of HL7 messages for integration.',
    'Create Functional Specification documents and mapping of data elements to collaborate with development and testing teams to build a quality interoperability product using healthcare industry standards HL7 and FHIR for data gathering and exchange of data via bi-directional interfaces.',
];

const SystemIntegration = () => {
    const systemIntegrationTitle = 'System Integration';
    let bullets = [];

    for (let i = 0; i < bulletedList.length; i++) {
        bullets.push(
            <div className="system-integration-list">
                <Icon
                    classStyle="system-integration-icon"
                    icon={<FaDotCircle />}
                />
                <Text
                    classStyle="system-integration-text"
                    text={bulletedList[i]}
                />
            </div>
        );
    }

    return (
        <div className="w3-padding-64 w3-container system-integration">
            <div className="w3-content system-integration-section">
                <div className="w3-third w3-center w3-padding-small w3-padding-32">
                    <Image
                        classStyle="system-integration-image"
                        src={SystemIntegrationImage}
                    />
                </div>
                <div className="w3-twothird w3-padding-large w3-padding-32">
                    <Title
                        classStyle="title title-fstart title-dark-gray"
                        title={systemIntegrationTitle}
                    />
                    {bullets}
                </div>
            </div>
        </div>
    );
};

export default SystemIntegration;
