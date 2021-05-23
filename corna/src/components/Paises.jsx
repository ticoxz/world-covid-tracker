import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';

import '../style.css';

const Paises = ({paisForm}) => {
    const [listaPaises, setListaPaises] = useState([]);

    useEffect(() => {
        const cargarPaises = async () => {
            setListaPaises(await cargarListaPaises())
        }

        cargarPaises();
    },[])

    const cargarListaPaises = async () => {
        try {
            const datos = await axios.get('https://covid19.mathdro.id/api/countries');
            const lista = datos.data.countries.map((pais) => pais.name);
            return lista;
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <div>
            <Form.Group>
                <Form.Label className="choose">Choose Countries</Form.Label>
                <Form.Control as='select' onChange={(e) => paisForm(e.target.value)}>
                    <option value="World">World</option>
                    {listaPaises.map((pais, i) => <option key={i} value={pais}>{pais}</option>)}
                </Form.Control>
            </Form.Group>
        </div>
    );
}
 
export default Paises;