import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
return (
    <div className={classes.header}>
        <h3>User Details Application</h3>
        <nav>
            <Link to="/">Login</Link>
            <Link to="/signup">SignUp</Link>
        </nav>
    </div>
)
}

export default Header;