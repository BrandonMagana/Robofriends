import React, { Fragment } from "react";


const Card=(props)=>{
    const {id,name,email}=props;
    return(
        <Fragment>
            <div className="tc bg-light-green dib br3 pa3 ma2 grow">
                <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment> 
    );
}

export default Card;