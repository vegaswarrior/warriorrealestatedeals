import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
// import Testimonials from "../components/Testimonials";
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
			{/* <Container fluid className="main mb-1 d-flex flex-column justify-content-center">

			</Container> */}
			<Container fluid className="main mb-1 d-flex flex-column justify-content-center">
				{/* <img src={flip2} /> */}
				<h1 className="text-center jumboH1">Warrior Real Estate</h1>
				<h4 className="text-center jumboH2">
					
				</h4>
				
	             <Row className="first_row">

					
					<Col md={6} className="left_col">
					<h1 className="text-center">I'm Selling My Home</h1>
					    <Button id="first_button" className="text-white"href="/register">
					     Get a Quote Now!
				        </Button>
						
						
					</Col>
					<Col md={6} className="right_col">
					   <h1 className="text-center">I'm A Real Estate Investor</h1>
				      	<Button id="second_button" cassName="d-flex align-self-center" href="/register">
				        	Find Me Deals!
				        </Button>
						{/* <XyzTransition duration="auto" xyz="fade out-delay-5">
							{modalOpen && (
								<div className="modal-overlay" onClick={closeModal}>
								<div
									className="modal xyz-nested"
									xyz="fade short-100% delay-3 ease-out-back"
								>
									<div
									className="modal-header xyz-nested"
									xyz="up-100% in-delay-3"
									>
									<h1 className="xyz-nested" xyz="fade left in-delay-6">
										I am a modal
									</h1>
									<button
										xyz="fade small in-delay-7"
										className="modal-close xyz-nested"
										onClick={closeModal}
									></button>
									</div>
									<div className="modal-body"></div>
									<div
									className="modal-footer xyz-nested"
									xyz="down-100% in-delay-3"
									>
									<button
										className="modal-button xyz-nested"
										xyz="fade in-right in-delay-7"
										onClick={closeModal}
									>
										Close
									</button>
									</div>
								</div>
								</div>
							)}
						</XyzTransition> */}
					</Col>
				 </Row>


				{/* <Col className="cat_col d-flex justify-content-between align-items-end">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
				</Col> */}
			</Container>

			{/* <Container fluid className="featured_products_container">
				<Meta />
				<h1 className="latest_products text-center">Latest Products</h1>
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
			</Container> */}
			{/* <Testimonials /> */}
		</>
	);
};

export default HomeScreen;
