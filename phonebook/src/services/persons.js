import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

//get all persons
const getAll = () => axios.get(baseUrl);
//add person
// const create=(newPerson)

export default { getAll };
