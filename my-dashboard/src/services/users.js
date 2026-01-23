import axios from "axios";
const baseUrl = "http://localhost:3001/users";

// GET all users
const getAll = () => axios.get(baseUrl);

// POST/create new users
const create= (newUser) => axios.post(baseUrl, newUser)

//DELETE a user
const remove = (id) => axios.delete(`${baseUrl}/${id}`)

///PUT/update a user
const update=(id, newUser)=> axios.put(`${baseUrl}/${id}`, newUser)

export default { getAll, create, remove, update };
