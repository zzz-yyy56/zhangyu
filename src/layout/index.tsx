import React  from 'react';
import { Layout,Menu } from 'antd';
import styles from './index.scss';
import { Link ,useHistory} from 'umi';
import logo from '../assets/fr.png';
import {
    FormOutlined ,
    UserAddOutlined
  } from '@ant-design/icons';

const {Header ,Content ,Footer ,Sider} = Layout
const index=(props:{children:React.ReactNode})=>{
    const{ location } = useHistory();
    return ( 
        <Layout className={styles.layout}>
            {/* <Sider breakpoint="lg" collapsedWidth="0">
                <div className="title">zhangyu</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/course">课程记录</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">关于我们</Link>
                    </Menu.Item>
                </Menu>
            </Sider> */}
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="title" style={{background:'rgb(0,21,41)'}}><img src={logo} style={{width:30,height:30,transform: 'rotate(90deg)'}}/>zhangyu</div>
                <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                    <Menu.Item key="/course" >
                        <FormOutlined/><Link to="/course">课程记录</Link>
                    </Menu.Item>
                    <Menu.Item key="/about">
                        <UserAddOutlined/><Link to="/about">关于我们</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>

                </Header>
                <Content className="site-layout-background" style={{margin:'24px 16px',padding:24,minHeight:'max-content'}}>
                    {props.children}
                </Content>
                <Footer style={{textAlign:'center'}}>
                    umi3-demo created by zhangyu
                </Footer>
            </Layout>
        </Layout>
    );
}
export default index;