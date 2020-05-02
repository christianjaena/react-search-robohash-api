import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardListComponent = robots.map(robot => {
        return <Card 
                id = { robot.id }
                name = { robot.name }
                username = { robot.username }
                email = { robot.email }
                />
    })

    return(
        <div>
            { cardListComponent }
        </div>
    );
}

export default CardList;