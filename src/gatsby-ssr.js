import React from 'react'

export function onRenderBody({ setPostBodyComponents }, userOptions) {
	const options = {
		async: true,
		defer: true,
		args: ``,
		...userOptions,
	}
	return setPostBodyComponents([
		<script
			type='text/javascript'
			async={options.async}
			defer={options.defer}
			src={`https://www.google.com/recaptcha/api.js${options.args}`}
			/>
	])
}