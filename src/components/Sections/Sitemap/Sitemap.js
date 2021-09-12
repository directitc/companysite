import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import { NavLink } from 'react-router-dom';
import './Sitemap.css';

const Sitemap = ({ classStyle }) => {
    const sitemapTitle = 'Sitemap';
    const sitemapSubtitle = 'All our pages';

    return (
        <div className={classStyle}>
            <div className="w3-padding-bottom-32 sitemap-section">
                <div className="w3-padding-16 sitemap-subsection">
                    <Title
                        classStyle="title footer-color"
                        title={sitemapTitle}
                    />
                    <Subtitle
                        classStyle="footer-subtitle"
                        subtitle={sitemapSubtitle}
                    />
                </div>
                <div className="footer-list-wrapper sitemap-divlist">
                    <div className="sitemap-list list-unordered">
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
