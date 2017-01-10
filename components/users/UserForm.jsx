import React, {Component} from 'react';

class UserForm extends Component{
	onSubmit(e){
		e.preventDefault();
		const node = this.refs.userName;
		const userName = node.value;
		this.props.setUserName(userName);
		node.value = '';
	}
	render(){
		return(
			<div className='form-group'>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input
						className='form-control'
						placeholder='Set Your Name...'
						type='text'
						ref='userName'
					/>
				</form>
			</div>
		)
	}
}

UserForm.propTypes = {
	setUserName: React.PropTypes.func.isRequired
}

export default UserForm