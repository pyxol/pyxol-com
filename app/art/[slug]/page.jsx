import { Suspense } from "react";
import { getArtImageDetails, parseArtSlug, parseArtTitleFromFolderName } from "../../../lib/art";

import ArtViewer from "./ArtViewer";

const fs = require("fs/promises");

async function getData(slug) {
	const { kind, project_key } = parseArtSlug(slug);
	
	const title = parseArtTitleFromFolderName(project_key);
	
	const base_dir = `public/content/${kind}_projects/${project_key}`;
	
	let files = [];
	let readme = false;
	
	let raw_files = await fs.readdir(base_dir);
	
	raw_files.sort((a, b) => {
		if(a == b) {
			return 0;
		}
		
		return ((a < b)?-1:1);
	});
	
	for(let file of raw_files) {
		const filepath = `${base_dir}/${file}`;
		
		// skip library files
		if(file.match(/^(p5\.dom\.js|p5\.js)$/gi)) {
			//console.log("skipping", file);
			continue;
		}
		
		// only allow specific file types
		if(!file.match(/\.(md|pde|js|html)$/gi)) {
			//console.log("skipping2", file);
			continue;
		}
		
		if("readme.md" === file.toLowerCase()) {
			readme = await fs.readFile(filepath, {
				encoding: "utf8"
			});
		} else {
			// check if directory
			const filestat = await fs.stat(filepath);
			
			if(filestat.isDirectory()) {
				continue;
			}
			
			let filetype = "javascript";
			
			if(file.match(/\.html$/i)) {
				filetype = "html";
			} else if(file.match(/\.pde$/i)) {
				filetype = "processing";
			} else if(file.match(/\.class$/i)) {
				filetype = "processing";
			}
			
			// success
			files.push({
				file,
				type: filetype,
				'contents': await fs.readFile(filepath, {
					encoding: "utf8"
				})
			});
		}
	}
	
	return {
		kind: kind,
		title: title,
		image: getArtImageDetails(kind, project_key),
		readme: readme,
		files: files
	}
}

export default async function ArtViewPage({ params }) {
	const art_details = await getData(params.slug);
	
	return (<>
		<Suspense fallback={<p>Loading data...</p>}>
			<ArtViewer
				{...art_details}
			/>
		</Suspense>
	</>);
}