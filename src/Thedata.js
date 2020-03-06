import React from 'react';


class Thedata  extends React.Component {

constructor(){
super();
this.state={
pictures:[],

};

}
componentDidMount() {
    fetch('https://randomuser.me/?result=10')
    .then(results => results.json())
    .then((data) => {
      let pictures=data.results.map((pic)=>{
return(

<div key={pic.results}>
<img src={pic.picture.medium}/>

</div>


)


})
      this.setState({pictures:pictures});
      console.log("state",this.state.pictures);
    })
    .catch(console.log)
  }






render(){

return(

<div className="container2">
<div className="container1">
{this.state.pictures}
</div>
</div>



);
}


}

export default Thedata;
