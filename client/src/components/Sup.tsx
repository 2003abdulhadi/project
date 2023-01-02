import { FC } from "react"

interface details {
    name: string,
    pass: string
}

const Sup: FC<details> = (props: details) => {
    return (
        <div>
            What is up {props.name}? 😜
            Here's your password by the way {props.pass} 🤫
        </div>
    )

}

export default Sup