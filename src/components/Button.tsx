type ButtonProps = {
    texto ?: string;
    children ?: string;
}

export function Button(props : ButtonProps){
	return(
		<button>{props.texto || 'Texto Padrão'} {props.children}</button>
	)
}

// export default Button

// importação sem export default recebe o nome de NAMED EXPORT