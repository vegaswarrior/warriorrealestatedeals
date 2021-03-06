import React from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import SearchBox from "./SearchBox";
import {logout} from "../actions/userActions";
import "../screens/homescreen.css";
import Avatar from "./Avatar";
// import Logo from './blackcatlogo2.jpg'

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar className="navbar1 d-flex justify-content-center" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					    {/* <LinkContainer to="/">
							<Navbar.Brand className="jumboH2 text-info"><img className="logo1" src={Logo}></img></Navbar.Brand>
						</LinkContainer> */}
						{/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
						<LinkContainer to="/">
							<Navbar.Brand className="text-white">Home</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to="/wholeseller">
							<Navbar.Brand className=" text-white">Wholeseller</Navbar.Brand>
						</LinkContainer>
				           <LinkContainer to="/buyer">
							<Navbar.Brand className="text-white">Buyer</Navbar.Brand>
						</LinkContainer>
		
						{/* <LinkContainer to="/contact">
							<Navbar.Brand className=" text-white">Contact Us</Navbar.Brand>
						</LinkContainer> */}
						<Nav className="ml-auto">
							{/* <LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart text-white"></i> Cart
								</Nav.Link>
							</LinkContainer> */}
							{userInfo ? (
								<div className="d-lg-flex justify-content-start ms-lg-5">
									<Avatar size="40px" url={userInfo.avatar} className="" />
									<NavDropdown title={userInfo.name} id="username">
										<LinkContainer to="/profile">
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
									</NavDropdown>
								</div>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu">
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/orderlist">
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
