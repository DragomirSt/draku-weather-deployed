
import './Loading.css';
import spinner from './spinner.png';

const Loading = () => {
    return (
        <div className="error-component">
            <div className='error-message'>
                <h4>
                    Getting your forecast ..
                </h4>
            </div>
            <div>
                <img src={spinner} alt="" />
            </div>
        </div>
    );
};

export default Loading;