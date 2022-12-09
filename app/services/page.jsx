"use client";

import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap"

import ContactUsCTA from "../../components/callToActions/contact_us";

export default function Services() {
	return (<>
		<Container className="py-4">
			<h1 className="h1 mb-4">
				Web Development Services
			</h1>
			
			<p>
				A list of various web development technologies we actively support.
			</p>
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-wordpress.png"
						width="2000"
						height="680"
						alt="WordPress Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						WordPress
					</h2>
					
					<p>We have over 10 years of experience in WordPress custom development, fine tuning, PageSpeed improvements, and more. We also provide recovery for websites that have been hacked and other disaster situations. If your WordPress website has been hacked and it&apos;s no longer functioning as it should, we&apos;re able to quickly get the website back up and running. We also offer consultation for how to better secure your website, what and when to upgrade themes and plugins, and other improvements to speed up your WordPress-based website.</p>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-nextjs.jpg"
						width="1400"
						height="700"
						alt="Next.js Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						Next.js
					</h2>
					<p>A fast and upcoming web development framework that enables React-based web applications with server-side rendering and generated static websites.</p>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-react.png"
						width="870"
						height="500"
						alt="React.js Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						React
					</h2>
					<p>A front-end JavaScript library for building user interfaces with a focus on functionality separation using a component-based architecture.</p>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-mariadb.jpg"
						width="1024"
						height="512"
						alt="MariaDB Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						MariaDB
					</h2>
					<p>A fork of the popular MySQL relational database. We provide expert-level knowledge and experience regarding data structure design, performance oriented query optimization, daemon-level configuration, backup and disaster recovery solutions.</p>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-core-web-vitals.jpg"
						width="1200"
						height="600"
						alt="Core Web Vitals Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						Core Web Vitals
					</h2>
					<p>A vital list of metrics for improving not only speed and user experience but search engine placement. We provide solutions to improving scores on:</p>
					<ul>
						<li>Largest Contental Paint (<abbr className="font-weight-bold">LCP</abbr>) is a measurement for loading performance</li>
						<li>First Input Delay (<abbr className="font-weight-bold">FID</abbr>) is a measurement of delay in interactivity</li>
						<li>Cumulative Layout Shift (<abbr className="font-weight-bold">CLS</abbr>) is a measurement in visual stability</li>
					</ul>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-debian.jpg"
						width="635"
						height="307"
						alt="Debain Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						Linux Systems Administration
					</h2>
					<p>We provide a security-first approach to our server design and system administration services.</p>
				</Col>
			</Row>
			
			<hr />
			
			<Row>
				<Col
					sm="4"
					className="text-center"
				>
					<Image
						src="/images/services/logo-docker.png"
						width="3840"
						height="2160"
						alt="Docker Logo"
						className="img-responsive"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto"
						}}
					/>
				</Col>
				<Col sm="8">
					<h2 className="h3">
						Docker
					</h2>
					<p>Containerizing service daemons provides rapid development prototyping, reliable systems design, and overall less headache with minimal performance overhead.</p>
				</Col>
			</Row>
			
			<ContactUsCTA />
		</Container>
	</>);
}