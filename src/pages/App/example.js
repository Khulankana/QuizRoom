import React, {useState} from 'react';
import './style.css';
import {BrowserRouter, Route, Link, useHistory } from 'react-router-dom';
import { Alert, CustomDialog, useDialog } from 'react-st-modal';
import reactDom from 'react-dom';

import Navbar from '../../components/Navbar'
import Logo from '../../assets/logo.png';
import Showcase from '../../components/Showcase'
import Category from '../../components/Category';
import Register from '../../components/Register';
import CreateTest from '../../components/CreateTest';
import Footer from '../../components/Footer';


function CustomDialogContent() {
      const dialog = useDialog();
    
      const [value, setValue] = useState();
    
      return (
            <div className="form-popup" style={{textAlign:"center"}}>
                  <form  className="form-container">  
                        <h2 style={{textTransform:"uppercase", fontWeight: "400", fontSize:"1.5rem"}}>Тавтай морилно уу !</h2>
                        <div className="bottom-line"></div>
                        <input type="text" placeholder="Нэвтрэх нэр ..." 
                              style= {{ 
                                    width:"24rem",
                                     height:"2.4rem", 
                                     padding:"0.6rem",
                                      marginTop:"1rem"
                              }}
                              onChange={(e) => {
                                    setValue(e.target.value);
                              }} 
                        />
                         <br /><br />
                         <input type="password" 
                              placeholder="Нууц үг ..." 
                              style={{
                                    width:"24rem", 
                                    height:"2.4rem", 
                                    padding:"0.6rem", 
                                    marginBottom:"1rem"
                              }}
                        onChange={(e) => {
                              setValue(e.target.value);
                        }}
                        />
                         <br />
                         <button type="submit"
                          className="btn"  
                          style={{
                                backgroundColor:"#c72727",
                               color:"#fff", 
                               margin:"2rem auto",
                                width:"8rem",
                                 fontSize:"1rem"
                              }}
                        onClick={() => {
                              dialog.close(value);
                        }}>
                        Нэвтрэх
                        </button>
                   </form>
          </div>
      )};

export default function App() {
  return (
    <BrowserRouter>
                  <nav className="main-nav">
                        <div className="container">
                              <img src={Logo} alt="Logo" />
                              <ul>
                                    <li><Link className="register" to="/register">Бүртгүүлэх</Link></li>
                                    <li><Link className="login" onClick={async () => {
                                          const result = await CustomDialog(<CustomDialogContent />, {
                                                title: '  ',
                                                showCloseIcon: true,
                                          });}}>Нэвтрэх</Link></li>
                              </ul>
                        </div>
                  </nav>


                  {/* Home  */}
                  <Route path="/" exact>
                         {/* Showcase */}
                        <Showcase />

                        {/* Categories of Quiz */}
                        <Category />

                        {/* User Registration */}
                        <Register />
                  </Route>
                  
                   {/* User Registration */}
                  <Route path="/register" >
                        <Register />
                  </Route>

                  <Route path="/createTest" >
                       
                        <CreateTest />
                  </Route>

                  {/* Footer */}
                  <Footer />

            </BrowserRouter>
  );
}
