import React from 'react';
import Card from './Card.js';
import {robots} from './robots.js'

const CardList = ({robots})=>{
	const Cardcomponent = robots.map((user , i)=>{
		return <Card kye={i} id = {robots [i].id} name = {robots[i].name} email = {robots[i].email}/>
	})
	return(
		<div>
			{Cardcomponent}
	   </div>

	)
}

export default CardList;