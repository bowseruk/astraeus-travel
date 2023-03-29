import Navigation from './navigation.jsx';
import './layout.css'

function Layout(props) {

    return (
      <div className="layout">
        
        <Navigation />
        <div className="footer-spacer">
        {props.children}
        </div>
      </div>
    );
  }
  
  export default Layout;