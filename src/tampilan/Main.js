import { useEffect, useState } from "react";

const Main = (props) => {
  
  useEffect(() => {
    if (!localStorage.getItem('is_login')){
      window.location = '/login';
    }
    
  }, []);

  return (
    <div className="main full-width app-background">
      <div class="topnav">
          <div class="content">
              <div class="left-nav">
                  <div className={`topnav-item ${props.name == 'home' ? 'active' : ''}`} onClick={(evt) => {
                    window.location = `/`;
                  }}>Home</div>
                  <div className={`topnav-item ${props.name == 'store' ? 'active' : ''}`} onClick={(evt) => {
                    window.location = `/store`;
                  }}>Store</div>
                  <div className={`topnav-item ${props.name == 'shoping-cart' ? 'active' : ''}`} onClick={(evt) => {
                    window.location = `/shoping-cart`;
                  }}>Shoping Cart</div>
              </div>
              <div class="right-nav">
                  <div className="button danger outline" onClick={(evt) => {
                    localStorage.clear();
                    window.location = '/login';
                  }}>Logout</div>
              </div>
          </div>
      </div>
      {props.layout}
    </div>
  );
}
  
export default Main;
  