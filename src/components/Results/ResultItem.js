import React, {Component} from "react";
import {createdDate} from "../../Utilities/date.js"
class ResultItem extends Component {
    render(){
        let {id, name, status, species, gender, origin, location, created, image} = this.props

        return (
            <article className="CharacterCard__Wrapper">
                <div data="card header" className="CharacterCard__Img_Wrapper">
                    <div className="card-image"><img src={image} alt={image} /></div>
                    <div className="CharacterCard__Title">
                        <h2 className="CharacterCard__Name">{name}</h2>
                         <p className="CharacterCard__Description">id: {id} - created {createdDate(created)}</p>
                    </div>
                </div>
                <div data="card info" className="CharacterCard__Info_Wrapper">
                    <div className="CharacterCard__Text_Wrapper">
                        <span>STATUS</span><p>{status}</p>
                    </div>
                    <div className="CharacterCard__Text_Wrapper">
                        <span>SPECIES</span><p>{species}</p>
                    </div>
                    <div className="CharacterCard__Text_Wrapper">
                        <span>GENDER</span><p>{gender}</p>
                    </div>
                    <div className="CharacterCard__Text_Wrapper">
                        <span>ORIGIN</span><p> ?</p>
                    </div>
                    <div className="CharacterCard__Text_Wrapper">
                        <span>LAST LOCATION</span><p>{gender}</p>
                    </div>
                </div>
            </article>
          );
    }
};

export default ResultItem