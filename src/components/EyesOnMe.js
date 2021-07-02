function EyesOnMe(){

    // function handleFocus(event){
    //      if (event === true){
    //          console.log('Good!')
    //      }else {
    //         console.log('Hey! Eyes on me!')
    //      }   
    // }
    // function handleBlur(){
    //      console.log('Hey! Eyes on me!') 
    // }

    return(
        <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyesOnMe