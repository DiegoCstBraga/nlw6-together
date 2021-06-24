import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props} : ButtonProps){
	return(
		<button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
	)
}

// export default Button

// importação sem export default recebe o nome de NAMED EXPORT