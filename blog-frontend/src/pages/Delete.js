import axios from "axios";
import {useNavigate} from "react-router-dom";

const Delete = ({id , removeBlog}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {  
        e.preventDefault(); 
        axios.delete(`http://localhost:5000/api/blogs/${id}`)
        .then(() => {
            removeBlog(id); // Remove the blog from state in Home.js
        })
        .catch(error => console.log("Error occured : ", error));}

return(

    <button onClick={handleSubmit}>delete</button>

);


}
export default Delete;