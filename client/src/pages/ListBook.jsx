import { useEffect, useState } from "react";
import { getDiners } from "../api/auth.js";
import { PiUserSquareFill } from 'react-icons/pi';

const ListBook = () => {
    const [items, setItems] = useState([])

    const showItems = async () => {
        try {
            const response = await getDiners();
            console.log(response.data)
            setItems(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        showItems();
    }, []);

    return (
        <div className="items-wrapper">
            {items.map(item => {
                const { id, name, surname, code, career } = item;
                return (
                    <article key={id} className="student-items">
                        <PiUserSquareFill  className="student-icon" />
                        <div className="student-data">
                            <h4 className="student-name">{name} {surname}</h4>
                            <p className="student-code">{code}</p>
                            <p className="student-career">{career}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ListBook;
