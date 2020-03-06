import React from 'react';
import Thedata from './Thedata';


class Display  extends React.Component {

constructor(){
super();

}
render(){
return(
<div><h1>Fetching Data from an API</h1>



<Thedata/>
</div>

);
}
}

export default Display;
