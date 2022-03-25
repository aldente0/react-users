import './App.scss';
import { useState, useEffect } from 'react';
import { getUsers } from './api';
import {Sort} from './components/sort/Sort'
import {UsersPage} from './pages/usersPage/UsersPage'
import { UserProfile } from './pages/userProfile/UserProfile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
        })
    }, [])

	return (
		<div className='App'>
			<Sort users={users} setUsers={setUsers}/>
			<Router basename='/react-users'>
				<Switch>
					<Route exact path='/'>
						<UsersPage users={users}/>
					</Route>
					<Route path='/profile/:userId' component={UserProfile}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
