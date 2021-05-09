import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../pages/App/style.css';
import Logo from '../../assets/logo.png';
import { Alert, CustomDialog, useDialog } from 'react-st-modal';


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
                              }}
                        onChange={(e) => {
                              setValue(e.target.value);
                        }}
                        />
                         <button type="submit" 
                          style={{
                              width: "20rem",
                              border: "none",
                               color:"#1B456B", 
                               margin:"2rem auto",
                              fontSize:"1rem",
                                 backgroundColor:"#fff",
                                 marginTop: "1rem",
                                 marginBottom: "0.2rem"
                              }}
                        onClick={() => {
                              dialog.close(value);
                        }}>
                        Нэвтрэх нэр, нууц үгээ мартсан ...
                        </button>
                        <div style={{height: "0.5px", width: "16rem", backgroundColor:"grey", margin: "0 auto"}}></div>
                        <br />
                         <button type="submit"
                          className="btn"  
                          style={{
                                backgroundColor:"#c72727",
                               color:"#fff", 
                               margin:"2rem auto",
                                width:"8rem",
                                 fontSize:"1rem",
                                 marginLeft: "16rem"
                              }}
                        onClick={() => {
                              dialog.close(value);
                        }}>
                        Нэвтрэх
                        </button>
                   </form>
          </div>
      )};


export default function Navbar() {
      return(
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
      );
}