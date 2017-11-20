import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Affix, Layout, Popover } from 'antd';
import {navLinks, indexProList } from './configData';
import mp4 from './../images/index.mp4';
import mp3 from './../images/index.mp3';
import logo from './../images/logo.png';
import './../css/App.css';

const {Header, Footer, Content} = Layout;
// const {navLinks, indexProList } = configData;

// 根目录
class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <Header style={{ padding: '0' }}>
                <Affix>
                    <HeaderContent />
                </Affix>
            </Header>
              <Content>

                  <p className="App-intro">
                      <video id="video" src={mp4}
                             autoPlay="autoPlay" loop="loop" width="100%"></video>
                      <audio src={mp3}
                             loop="loop" autoPlay="autoPlay"></audio>
                  </p>

                  <div>
                      <DetailList itemList= { indexProList } />
                  </div>
              </Content>

              <Footer></Footer>
          </Layout>

          {/*<div style={{height: '20px'}}></div>*/}
      </div>
    );
  }
}

// 导航栏
class HeaderContent extends Component {

    render () {
        return (

            <div className="App-header">
                <div className="App-logo">
                    <img src={logo} />
                </div>
                <div className="App-title">

                {navLinks.map((button, index) => (<NavButton key={index} attr={button} />))}
                </div>
            </div>
        )
    }
}

//  导航按钮
class NavButton extends Component {
    constructor(props) {
        super(props);

    }

    tipContent () {
      return (
        <DetailList itemList={this.props.attr.childrenItems} />
      )
    }

    render () {
      if (this.props.attr.childrenItems) {
        return (
          <Popover content={this.tipContent()} trigger="hover" placement="bottom" >
            <a className={this.props.attr.disabled ? "nav-button disabled" : "nav-button" }
               href={this.props.attr.href } disabled={this.props.attr.disabled}>
                {this.props.attr.text}
            </a>
          </Popover>
          )
      }
      else {
        return (
          <a className={this.props.attr.disabled ? "nav-button disabled" : "nav-button" }
             href={this.props.attr.href } disabled={this.props.attr.disabled}>
              {this.props.attr.text}
          </a>
          )
      }
    }
}


// 产品展示
class DetailList extends  Component {
    render () {
        return <table className="index-detail-table">
            <colgroup>
            </colgroup>
            <tbody>
                <tr>
                    {
                        this.props.itemList.map((pro, index) => (
                            <td key={pro.link}>
                                <ProInfo link={pro.link} href={pro.href} title={pro.title} subTitle={pro.subTitle} />
                            </td>
                        ))
                    }
                </tr>
            </tbody>

        </table>
    }
}

// 单个产品展示
class ProInfo extends  Component {
    render () {
        return (
          <Router>

             <Link to={ this.props.href } target="_blank" >
             <div className="index-detail-pro">
                <div className="index-detail-pro-image-box">
                    <img className="index-detail-pro-image" src={this.props.link} />
                </div>
                <div className="index-detail-pro-title">{this.props.title}</div>
                <div className="index-detail-pro-sub-title">{this.props.subTitle}</div>

            </div>
        </Link>
        </Router>
        )

        // return (
        //      <div className="index-detail-pro">
        //         <div className="index-detail-pro-image-box">
        //             <img className="index-detail-pro-image" src={this.props.link} />
        //         </div>
        //         <div className="index-detail-pro-title">{this.props.title}</div>
        //         <div className="index-detail-pro-sub-title">{this.props.subTitle}</div>

        //     </div>
        // )
    }
}

export default App;
