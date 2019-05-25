import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import '../assets/sass/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
      footerVisible: false,
    };

    this.linkHandler = this.linkHandler.bind(this);
    this.toggleFooter = this.toggleFooter.bind(this);
  }

  linkHandler(e, name) {
    e.preventDefault();
    if (name === 'about') {
      this.toggleFooter();
    }
  }

  toggleFooter() {
    this.setState({ footerVisible: !this.state.footerVisible });
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded, footerVisible } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Multiverse' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={`main-body ${footerVisible ? 'content-active' : ''}
               ${isPreloaded ? 'is-preload' : ''}`}
            >
              <div id="wrapper">
                <Header onAction={this.linkHandler} />
                <div
                  id="main"
                  onClick={e => {
                    if (footerVisible) {
                      e.preventDefault();
                      e.stopPropagation();
                      this.toggleFooter();
                    }
                  }}
                >
                  {children}
                </div>
                <Footer isVisible={footerVisible} onClose={this.toggleFooter} />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
