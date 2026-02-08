import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Reff from './components/Reff'
import Refff from './components/Refff'
import Home from './components/Home';
import { Suspense} from 'react';
import { Link } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
const Dashboard = React.lazy( ()=> import ('./components/Dashboard'))
// import Profile from './components/Profile';
const Profile = React.lazy( ()=> import ('./components/Profile'))

function App(){
    return(
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/Dashboard' element = {<Suspense fallback = "Loading1..."><Dashboard/></Suspense>} />
                <Route path = '/Profile' element = {<Suspense fallback = "loading2..."><Profile/></Suspense>} />
            </Routes>
            <h1>hello refUse</h1>
            <Link to = '/Dashboard'>Dashboard</Link>
            <Link to = '/profile'>Profile</Link>
            {/* <Reff /> */}
            {/* <Refff /> */}
        </div>
    )
}

export default App;