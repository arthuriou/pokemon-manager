const { Component } = require("react");

class Pokemon extends Component{
  
 constructor(props){
  super(props)
  this.state = {
    pokemons :[],
    id : "",
    name :"Nom" ,
    type1 : "type1" ,
    type2 : "type2"

  }
 }

   componentDidMount(){
      this.getPokemon()
   }
  
     getPokemon = async()=>{
      try { 
        const response = await fetch('https://3xz6n9lw-8000.euw.devtunnels.ms/api/v1/pokemons' )
        console.log(response);
        const data = await response.json()
        console.log(data);
        this.setState({
          pokemons : data.pokemons
        }
        )
         
        
      }
       catch (error){
       console.log(error);

      }
   

  
  
   }

 


// ADD = ()=>{
//   if (onclick) {
//     const input = document.getElementById("input")
//     const li = document.getElementById('li')
//     input.value = li.value
//   }
//   this.setState({
//     name : this.state.name,
//     type1 : this.state.type1,
//     type2 : this.state.type2,

//   })
// }


render(){
  return(
    <div>
      <h1>Pokemon Manager</h1>
      <input type="text"  placeholder="Nom"/>
      <input type="text"  placeholder="Type principal"/>
      <input type="text"  placeholder="Type pecondaire"/>
      <button >Ajouter</button>

      <ul>
        <li>{this.state.pokemons.map((pokemon)=>{
          return (
            <div>
               
               <p> {pokemon.name}</p>
              


            </div>
          )
        })}</li>
      </ul>

  </div>
 )
}


}
export default Pokemon ;