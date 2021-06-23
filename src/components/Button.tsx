import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props : ButtonProps){
	return(
		<button className='button' {...props} />
	)
}

// export default Button

// importação sem export default recebe o nome de NAMED EXPORT