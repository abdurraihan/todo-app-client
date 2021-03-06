import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase-init';

const NavBar = () => {

    
    const [user] = useAuthState(auth);
    // const userName = (user?.displayName);

    const handleSignOut = () =>{
        signOut(auth);
    }



    return (
               <div>

        <Navbar collapseOnSelect expand="lg"  sticky='top' bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand >
                         
                               <h3>Todo-app</h3>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Add-Task</Nav.Link>
                                   
                                   
                                </Nav>

                                <Nav>

                                {
                                        user ?
                                       
                                   
        
        
                                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>  
        
                                       
        
                                        :
                                        <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                                    
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    
                </div>
    );
};

export default NavBar;