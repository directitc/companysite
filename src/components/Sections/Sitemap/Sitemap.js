import React, { Fragment } from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import { NavLink } from 'react-router-dom';
import './Sitemap.css';
import Copyright from '../Copyright/Copyright';

const Sitemap = ({ classStyle }) => {
    const sitemapTitle = 'Sitemap';
    const sitemapSubtitle = 'All our pages';

    return (
        <Fragment>
            <div className={classStyle}>
                <div className="sitemap__div">
                    <div className="sitemap__textbox">
                        <Title
                            classStyle="sitemap__title"
                            title={sitemapTitle}
                        />
                        <Subtitle
                            classStyle="sitemap__subtitle"
                            subtitle={sitemapSubtitle}
                        />
                    </div>
                    <div className="sitemap__list">
                        <ScrollToTop>
                            <NavLink className="sitemap__navlink" to="/" exact>
                                Home
                            </NavLink>
                            <NavLink className="sitemap__navlink" to="/about">
                                About
                            </NavLink>
                            <NavLink
                                className="sitemap__navlink"
                                to="/services"
                            >
                                Services
                            </NavLink>
                            <NavLink className="sitemap__navlink" to="/contact">
                                Contact
                            </NavLink>
                        </ScrollToTop>
                    </div>
                </div>
            </div>
            <Copyright />
        </Fragment>
    );
};

export default React.memo(Sitemap);
