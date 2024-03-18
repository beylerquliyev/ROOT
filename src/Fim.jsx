import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

export function Film() {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    async function GetData() {
        let response = await fetch(`http://www.omdbapi.com/?apikey=a407a7b3&s=${value}`);
        let response2 = await response.json();

        setData(response2.Search || []); // Обновляем данные только после завершения запроса
    }

    useEffect(() => {
        GetData();
    }, [value]);

    function InputChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <Form.Control onChange={InputChange} style={{ width: '300px' }} size="lg" type="text" placeholder="Large text" />
            </div>
            <div className="d-flex flex-wrap gap-5 container pt-5" >
                {data.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.Poster} />
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                          
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
