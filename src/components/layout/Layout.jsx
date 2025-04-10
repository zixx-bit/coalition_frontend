import "./layout.scss";
import Left_side from '../left_side/Left_side.jsx';
import Right_side from '../Right_side/Right_side.jsx';
import Center from '../center/Center.jsx';

const Layout = () => {
  return (
    <div className='layout'>
        <div className='left_side'><Left_side/></div>
        <div className='center'><Center/></div>
        <div className='right_side'><Right_side/></div>
    </div>
  )
}

export default Layout
