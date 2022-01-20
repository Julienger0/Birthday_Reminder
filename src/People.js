import React from "react"
import { FaTrash } from 'react-icons/fa';
function People({ people, setPeople }) {

    function Delete(info) {
        const a = people.filter(peopleInfo => peopleInfo !== info)
        return (
            setPeople(a)
        )
    }
    return (
        <div className="list">

            {people.map((peopleInfo, index) => (
                <div className="container mt-2  " key={index}>
                    <img className="pe-2 rounded-circle " src={peopleInfo.image} alt={peopleInfo.name} width="75px" height="75px" />
                    <div className="ps-2 d-inline-block">
                        <h6>{peopleInfo.name}</h6>
                        <p>{peopleInfo.age} years</p>
                    </div>
                    <button onClick={() => Delete(peopleInfo)} className="container btn btn-outline-light bg-light"><FaTrash color="#e34020" /></button>
                </div>
            ))}
            <button onClick={() => setPeople([])}>clear all</button>

        </div>
    )
}

export default People