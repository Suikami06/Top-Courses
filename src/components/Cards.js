import React from "react";
import Card from './Card';
import { useState } from "react";

const Cards = (props) => {
// returns you a list of all charachters
const [likedCourses, setLikedCourses] = useState([]);
    let courses = props.courses;
    let category = props.category;
    const getCourses = () => {

        if(category == "All"){

            
        let allCourses = [];

        Object.values(courses).forEach((courseCategory) =>{
            courseCategory.forEach((course)=>{

                allCourses.push(course);

            })
        }) 

        return allCourses;

        
        }else{

        return courses[category];
    }


    }


    

    
    
    return(

        <div className ="flex flex-wrap justify-center gap-4 mb-4">

           {

            getCourses().map((course)=>{
                return <Card key = {course.id}
                        course= {course}
                        likedCourses = {likedCourses}
                        setLikedCourses = {setLikedCourses}/>
            })
           }




        </div>

    )
}

export default Cards;