import React from 'react'
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
    getItem('阶梯瀑布图', 'b4', null),
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
      navigate(`/bar?type=${e.key}`)
    }else if(e.keyPath[1]=='sub2'){
      navigate(`/line?type=${e.key}`)
    }else if(e.keyPath[1]=='sub3'){
      navigate(`/pie?type=${e.key}`)
    }else{
      navigate(`/scatter?type=${e.key}`)
    }
  };

  // 扩展当前页面的选项
  if(location.pathname=='/bar'){
    defaultOpenKeys[0] = 'sub1'
  }else if(location.pathname=='/line'){
    defaultOpenKeys[0] = 'sub2'
  }else if(location.pathname=='/pie'){
    defaultOpenKeys[0] = 'sub3'
  }else{
    defaultOpenKeys[0] = 'sub4'
  }

  // 高亮当前所在页面
  if(searchParams.get('type')){
    defaultSelectedKeys[0] = searchParams.get('type')
  }
  return (
    <div className='h-full sm:w-[130px] lg:w-[300px] bg-cyan-100 '>
        <Menu
          className='bg-cyan-100'
          onClick={onClick}
          mode="inline"
          items={items}
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={defaultSelectedKeys}
        />
    </div>
  )
}
