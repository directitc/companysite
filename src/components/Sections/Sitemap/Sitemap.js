import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import List from '../../List/List';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import { NavLink } from 'react-router-dom';
import './Sitemap.css';

const Sitemap = ({ classStyle }) => {
    const sitemap = 'Sitemap';
    const subtitle2 = 'All our pages';
    const styledDiv = 'w3-padding-bottom-32 sitemap-section';
    const styledSubdiv = 'w3-padding-16 sitemap-subsection';
    const styledTitle = 'title footer-color';
    const styledSubtitle = 'footer-subtitle';
    const styledDivList = 'footer-list-wrapper sitemap-divlist';
    const styledList = 'sitemap-list list-unordered';
    const sitemapList = ['Home', 'About', 'Services', 'Contact Us'];

    return (
        <div className={classStyle}>
            <div className={styledDiv}>
                <div className={styledSubdiv}>
                    <Title classStyle={styledTitle} title={sitemap} />
                    <Subtitle
                        classStyle={styledSubtitle}
                        subtitle={subtitle2}
                    />
                </div>
                <div className={styledDivList}>
                    <div className={styledList}>
                        <ScrollToTop>
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </ScrollToTop>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
