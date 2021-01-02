import React from 'react'
import PropTypes from 'prop-types'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'
import '../App.css'; 

const TodoItem = ({ todo, deleteTodo }) => {
	return (
		<div>
		<Container>
		<Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Generic placeholder"
            /> 
			<Media.Body>
		<h5>Reviewer</h5><Star /><br />
		<p 
			onDoubleClick={() => deleteTodo(todo.id)} 
			style={{ cursor: 'pointer' }}
		>
			{todo.title}
		</p>
		</Media.Body>
		</Media><br/>
		</Container>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

export default TodoItem