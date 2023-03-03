
import './ErrorHandler.css';
import error from './error.png';

const ErrorHandler = ({ props }) => {
    return (
        <div className="error-component">
            <div className='error-message'>
                <h4>
                    {props}
                </h4>
            </div>
            <div>
                <img src={error} />
            </div>
        </div>
    );
};

export default ErrorHandler;