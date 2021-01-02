import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginations from './pagination';
import Carousel from './Carousel';
import '../App.css';

// import Action from '../components/Action';
// import Comedy from '../components/Comedy';
// import Drama from '../components/Drama';
// import Animation from '../components/Animation';
// import Biography from '../components/Biography';

const ListBrowser = () => {
    return(
        <Container>
        <Carousel />  
        <div className="list browser pb-5 mb-4 d-inline">
            <h1>Browse by Category</h1>
            <ul className="header">
            <li className="active"><Link to="/">All</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/comedy">Comedy</Link></li>
            <li><Link to="/drama">Drama</Link></li>
            <li><Link to="/animation">Animation</Link></li>
            <li><Link to="/biography">Biography</Link></li>
          </ul>
        </div>
        <Card />
        <Paginations />
        </Container>
    )
}

export default ListBrowser;