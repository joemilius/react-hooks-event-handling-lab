function KeyPad(){
    function handleChange(){
        console.log('Entering password...')
    }
    
    return (
        <input type="password" onChange={handleChange} />
    )
}

export default KeyPad
