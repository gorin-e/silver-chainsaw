import {
	DropdownProvider,
	FontsVTBGroup,
	LIGHT_THEME,
} from '@admiral-ds/react-ui'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<ThemeProvider theme={LIGHT_THEME}>
			<DropdownProvider>
				<FontsVTBGroup />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</DropdownProvider>
		</ThemeProvider>
	</React.StrictMode>
)
