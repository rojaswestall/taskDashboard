import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {
	 state = {
	    collapsed: false,
	  };
	  onCollapse = (collapsed) => {
	    console.log(collapsed);
	    this.setState({ collapsed });
	  }
	  render() {
	    return (
	      <Layout style={{ minHeight: '100vh' }}>
	        <Sider
	          collapsible
	          collapsed={this.state.collapsed}
	          onCollapse={this.onCollapse}
	        >
	          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
	          	<Menu.Item key="1">
	              <Icon type="home" />
	              <span>Home</span>
	            </Menu.Item>
	          	<Menu.Item key="2">
	              <Icon type="book" />
	              <span>Study Hours</span>
	            </Menu.Item>
	            <Menu.Item key="3">
	              <Icon type="heart" />
	              <span>Service</span>
	            </Menu.Item>
	            <Menu.Item key="4">
	              <Icon type="pie-chart" />
	              <span>Metrics</span>
	            </Menu.Item>
	            
	            <SubMenu
	              key="sub1"
	              title={<span><Icon type="team" /><span>Team</span></span>}
	            >
	              <Menu.Item key="6">Guajiro</Menu.Item>
	              <Menu.Item key="7">Vagabundo</Menu.Item>
	              <Menu.Item key="8">Canis</Menu.Item>
	              <Menu.Item key="9">Marchitar</Menu.Item>
	            </SubMenu>

	          </Menu>
	        </Sider>
	        <Layout>
	        	<Header style={{ background: '#fff', padding: 0 }} />
	          <Content style={{ margin: '0 16px' }}>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>Team</Breadcrumb.Item>
	              <Breadcrumb.Item>Guajiro</Breadcrumb.Item>
	            </Breadcrumb>
	            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
	              Stuff about tasks, service, and study hours
	            </div>
	          </Content>
	          <Footer style={{ textAlign: 'center' }}>
	            Made with <Icon type="heart"/> by Gabe Rojas-Westall © 2018
	          </Footer>
	        </Layout>
	      </Layout>
	    );
	  }
}

export default Home;