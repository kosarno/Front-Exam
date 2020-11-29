import logo from './logo.svg';
import React, { PureComponent } from 'react'

import {Layout, Divider, Col, Row} from 'antd'
import './App.css';
import Header from './Component/Header'
import Aside from './Component/Aside'
import Content from './Component/Content'

function App() {
  return (
    <React.Fragment>
      
      <Layout className="container" style={{height:'100vh'}}>
      <Aside></Aside>
      <Content></Content>
        
      </Layout>
      
    </React.Fragment>
  );
}

export default App;
