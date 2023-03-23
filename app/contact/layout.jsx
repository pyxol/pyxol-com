import { Suspense } from "react";

export const metadata = {
	'title': `Contact Us | ${process.env.NEXT_PUBLIC_SITE_NAME}`
};

export default function Layout({ children }) {
	return (<>
		<Suspense fallback={<p>Loading page...</p>}>
			{children}
		</Suspense>
	</>);
}