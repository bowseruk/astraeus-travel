function Layout(props) {
    
    return (
      <div className="layout">
        <Navigation />
        <div className="footer-spacer">
        {props.child}
        </div>
      </div>
    );
  }
  
  export default Layout;