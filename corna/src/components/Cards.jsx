import React from 'react'
import CountUp from 'react-countup'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'



const Cards = ({data}) => {

    if(!data.data) {
        return "...Please Wait"
    } else {
        return (
            <div>
                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title>Confirmed</Card.Title>
                            <Card.Text>
                                <CountUp 
                                    start={0}
                                    end={data.data.confirmed.value}
                                    duration={2}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Recovered</Card.Title>
                            <Card.Text>
                                <CountUp 
                                    start={0}
                                    end={data.data.recovered.value}
                                    duration={2}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Deaths</Card.Title>
                            <Card.Text>
                                <CountUp 
                                    start={0}
                                    end={data.data.deaths.value}
                                    duration={2}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        );
       
    }

    
}
 
export default Cards;
