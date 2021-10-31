import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);

        axios.post('http://localhost:5000/services', data)
        .then(res => {
            
            if(res.data.insertedId){

                alert('added successfully');
                reset();

            }
        
        })

    }

    return (
        <div className="add_service py-5 my-5">
            <h2>Place An Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price $"/>
            <input {...register("img")} placeholder="Image URL"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;