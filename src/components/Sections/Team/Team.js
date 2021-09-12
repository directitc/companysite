import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Text from '../../UI/Text/Text';
import Link from '../../UI/Link/Link';
import Icon from '../../UI/Icon/Icon';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Team.css';

const teamList = [
    {
        name: 'David O. McEwen',
        title: 'CEO & Principal Consultant',
        description:
            'With over 25 years of working in IT, David has become an expert in the industry. With his knowledge and proficiency, he has expanded his work to include independently consulting with businesses across the country for the last decade. With 50+ contracts and projects completed, he is more than capable of meeting your needs. His business, Direct IT Consulting, has allowed him to expand his expertise even further by training team members to provide more opportunities for businesses to utilize his service and experience.',
        email: 'david.mcewen@directitc.com',
        phone: '(801) 660-7780',
    },
    {
        name: 'Colton McEwen',
        title: 'Programmer Analyst',
        description: '',
        email: 'colton.mcewen@directitc.com',
        phone: '(801) 643-9579',
    },
    {
        name: 'Logan McEwen',
        title: 'Clinical Data Analyst',
        description: '',
        email: 'logan.mcewen@directitc.com',
        phone: '(801) 643-9625',
    },
];

const Team = ({ classStyle }) => {
    let teamMembers = [];

    for (let i = 0; i < teamList.length; i++) {
        teamMembers.push(
            <div
                key={i}
                className="w3-padding-large w3-padding-32 team-section"
            >
                <Title
                    classStyle="title title-dark-gray team-title"
                    title={teamList[i].name}
                />
                <Subtitle
                    classStyle="team-subtitle"
                    subtitle={teamList[i].title}
                />
                {teamList[i].description !== '' ? (
                    <Text
                        classStyle="team-text"
                        text={teamList[i].description}
                    />
                ) : null}
                <div className="team-contact">
                    <Icon classStyle="icon" icon={<FaPhone />} />
                    <Link
                        classStyle="link team-text"
                        href={'tel:' + teamList[i].phone}
                        link={teamList[i].phone}
                    />
                </div>
                <div>
                    <Icon classStyle="icon" icon={<FaRegEnvelope />} />
                    <Link
                        classStyle="link team-text"
                        href={'mailto:' + teamList[i].email}
                        link={teamList[i].email}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classStyle}>
            <div className="w3-content">{teamMembers}</div>
        </div>
    );
};

export default Team;
