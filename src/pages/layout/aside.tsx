import React, { useEffect } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('柱状图', 'sub1', null, [
    getItem('基础柱状图', 'b1', null),
    getItem('堆叠柱状图', 'b2', null),
    getItem('动态排序柱状图', 'b3', null),
  ]),

  getItem('折线图', 'sub2', null, [
    getItem('基础折线图', 'l1'),
    getItem('堆叠折现图', 'l2'),
    getItem('区域面积图', 'l3'),
    getItem('平滑曲线图', 'l4'),
    getItem('阶梯线图', 'l5')
  ]),
  getItem('饼图', 'sub3', null, [
    getItem('基础饼图', 'p1'),
    getItem('圆环图', 'p2'),
    getItem('玫瑰图', 'p3'),
  ]),
  getItem('散点图', 'sub4', null, [
    getItem('基础散点图', 's4'),
  ]),
  getItem('自定义hooks拖拽', 'sub5', null),
  getItem('大文件上传','sub6',null),
  { type: 'divider' },
];
const defaultOpenKeys = []
const defaultSelectedKeys = []
export default function aside(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const onClick: MenuProps['onClick'] = (e) => {
    if(e.keyPath[1]=='sub1'){
      navigate(`/admin/bar?type=${e.key}`)
    }else if(e.keyPath[1]=='sub2'){
      navigate(`/admin/line?type=${e.key}`)
    }else if(e.keyPath[1]=='sub3'){
      navigate(`/admin/pie?type=${e.key}`)
    }else if(e.keyPath[1]=='sub4'){
      navigate(`/admin/scatter?type=${e.key}`)
    }else if(e.keyPath[0]=='sub5'){
      navigate(`/admin/drag`)
    }else if(e.keyPath[0]=='sub6'){
      navigate(`/admin/upload`)
    }
  };

  // 扩展当前页面的选项
  if(location.pathname=='/admin/bar'){
    defaultOpenKeys[0] = 'sub1'
  }else if(location.pathname=='/admin/line'){
    defaultOpenKeys[0] = 'sub2'
  }else if(location.pathname=='/admin/pie'){
    defaultOpenKeys[0] = 'sub3'
  }else if(location.pathname=='/admin/scatter'){
    defaultOpenKeys[0] = 'sub4'
  }else{
    defaultOpenKeys[0] = ''
  }
  if(searchParams.get('type')){
    defaultSelectedKeys[0] = searchParams.get('type')
  }else if(location.pathname=='/admin/drag'){
    defaultSelectedKeys[0] = 'sub5'
  }else if(location.pathname=='/admin/upload'){

  }else{
    defaultSelectedKeys[0] = ''
  }
  // 高亮当前所在页面
  return (
    <div className='h-full sm:w-[130px] lg:w-[300px] bg-cyan-100'>
        <Menu
          className='bg-cyan-100 sm:w-[130px] lg:w-[300px]'
          onClick={onClick}
          mode="inline"
          items={items}
          key={location.pathname=='/home'?'/home':'/id'}
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={defaultSelectedKeys}
        />
    </div>
  )
}
