import React from 'react';

const Card = ({ id, username, name, email }) => {
    return(
        <div className="tc dib bg-light-green br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <h1>{ username }</h1>
            <h3>{ name }</h3>
            <p>{ email }</p>
        </div>
    );
}

export default Card;