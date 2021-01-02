import React from 'react'
import PropTypes from 'prop-types'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'
import '../App.css';

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux'

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  SET_TODO_TITLE_REQUESTED,
  CREATE_TODO_REQUESTED
} from '../Redux/Action/todo-action'

const TodoForm = ({
	title,
	setTodoTitle,
	createTodo
}) => {
	const onChange = (e) => {
		setTodoTitle(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		createTodo(title)
	}

	// return (
	// 	<div className="todo-item">
	// 	<form onSubmit={onSubmit}>
	// 		<input 
	// 			type="text" 
	// 			placeholder="What needs to be done..." 
	// 			onChange={onChange}
	// 			value={title}
	// 			class="form__field"
	// 		/>
			// <button type="submit" className="rainbow rainbow-1">Submit</button>
	// 	</form>
	// 	</div>
	// )

	return ( 
		<div>
			<Container>
			<Form onSubmit={onSubmit}>
			<Form.Group controlId="exampleForm.ControlTextarea1">
			
				<Media>
				<img
					width={64}
					height={64}
					className="mr-3"
					src="https://bulma.io/images/placeholders/64x64.png"
					alt="Generic placeholder"
				/>  
				<Media.Body>
				<h5>Reviewer</h5>
				<Star />  <br/> 
				
				<Form.Control size="lg" as="textarea" rows={3} placeholder="Leave a Review" 
				type="text" 
				
				onChange={onChange}
				value={title}
				class="form__field"/><br/>
				<Button as="input" type="submit" value="Submit" className="submit"/>
				</Media.Body>
				
				</Media>
			</Form.Group>
	
			</Form><br/>
				{/* <Media>
				<img
					width={64}
					height={64}
					className="mr-3"
					src="https://bulma.io/images/placeholders/64x64.png"
					alt="Generic placeholder"
				/>
				<Media.Body>
					<h5 className="name">{props.name}</h5>
					<Star value={5} size={10}/>
					<p className="body">{props.body}</p>
				</Media.Body>
				</Media><br/>
				
				<Media>
					
				<img
					width={64}
					height={64}
					className="mr-3"
					src="https://bulma.io/images/placeholders/64x64.png"
					alt="Generic placeholder"
				/>
				<Media.Body>
					<h5>Reviewer</h5>
					<p>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
					ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
					tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
					Donec lacinia congue felis in faucibus.
					</p>
				</Media.Body>
				</Media><br/> */}
				
				
			<br />
			</Container>
		</div>
		)
}

TodoForm.propTypes = {
	title: PropTypes.string,
	setTodoTitle: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired
}

// Get state to props
const mapStateToProps = (state) => ({
  title: state.todo.title
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  setTodoTitle: (title) => dispatch({ type: SET_TODO_TITLE_REQUESTED, payload: title }),
  createTodo: (title) => dispatch({ type: CREATE_TODO_REQUESTED, payload: title }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)