import {
    Spinner
  } from 'react-bootstrap';


const Loading=()=>{
    return(
        <div className="loading" >
                <Spinner  variant='primary' animation='border'  size="lg">
                <span className="visually-hidden">Loading...</span>
                    </Spinner>
        </div>
    )
}
export default Loading;