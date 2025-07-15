import { Button } from '@admiral-ds/react-ui'
import { JSX } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
	padding: 20px;
`

const App = (): JSX.Element => {
	return (
		<StyledDiv>
			<h1>ТЕСТ</h1>
			<Button>Кнопка</Button>
			<Routes>
				<Route path='/' element={<div>Home Page</div>} />
				<Route path='/about' element={<div>About Page</div>} />
			</Routes>
		</StyledDiv>
	)
}

export default App
