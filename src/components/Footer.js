import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

  function handleInput(e){
    setInputValue(e.target.value)
    
  }

  function handleBlur(){
    if(!inputValue.includes('@')){
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			  <p className='lmj-footer-elem'>Laissez-nous votre mail :
        </p>
          <input
          placeholder='Votre E-mail ici' 
          onChange={handleInput} 
          value={inputValue} 
          onBlur={handleBlur} 
          />
          {console.log(setInputValue)}
		</footer>
	)
  
}

export default Footer