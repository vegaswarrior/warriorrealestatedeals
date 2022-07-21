import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkContainer} from "react-router-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Testimonials from "../components/Testimonials";
import Meta from "../components/Meta";
import {listProducts} from "../actions/productActions";
import "./homescreen.css";
// import flip2 from '../components/images/flip2.jpg'

const HomeScreen = ({match}) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const {loading, error, products, page, pages} = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
		   <Container fluid className="first_container">

		   <h1 className="text-center warrior_h1">Warrior Investments</h1>
			<Row>
				<Col lg={6} className="left_col text-center ">
					<h1 className="second_h1">I'm A WHoleseller</h1>
					<LinkContainer to="wholeseller">
					   <Button id="first_button" className="text-white">
					     Sell My Home Now!
				      </Button>
					</LinkContainer>
				</Col>
				<Col lg={6}  className="right_col text-center er">
					<h1 className="second_h1">I'm An Investor</h1>
					<LinkContainer to="buyer">
					   <Button id="second_button" className="text-white">
					     Find me deals!
				      </Button>
					</LinkContainer>
				</Col>
			</Row>
		   </Container>

		   <Container fluid className="featured_products_container">
				<Meta />
				<h1 className="latest_products text-center">Best ROI'S of the day</h1>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Container>
						<Row>
							{products.map((product) => (
								<Col key={product._id} sm={12} md={6} lg={4} xl={4}>
									<Product product={product} />
								</Col>
							))}
						</Row>
						<Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
					</Container>
				)}
			</Container>
			<Testimonials />
		</>
	);
};

export default HomeScreen;
