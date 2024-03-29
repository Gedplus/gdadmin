import axios from "axios";
import { base_url, config } from "../../util/axiosConfig";

const getBlogs = async()=>{
    const response = await axios.get(`${base_url}blog`);
    if(response.data){
        return response.data
    }
}
const getBlogCat = async(id)=>{
    const response = await axios.get(`${base_url}blog/cat/${id}`);
    if(response.data){
        return response.data
    }
}
const getBlog = async(id)=>{
    const response = await axios.get(`${base_url}blog/${id}`);
    if(response.data){
        return response.data
    }
}



export const blogService ={
    getBlogs,getBlog ,getBlogCat
}