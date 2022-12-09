export default function Head() {
	return (<>
		<title>{`Build Great Things | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="description" content="pyxol aims to create meaningful technology through web and software development." />
		<link rel="icon" href="/favicon.ico" />
		<meta name="theme-color" content="#343a40" />
		<meta name="google-site-verification" content="AgfnDI9BToJX-7WJXnOqP8S00oYoHRBkIBBaQ8LOqD4" />
	</>);
}