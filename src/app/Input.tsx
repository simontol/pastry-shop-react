import { UseFormRegister } from "react-hook-form"
import { Inputs } from "./ProductModal"

type Props = {
  name: 'title' | 'category' | 'price' | 'employee' | 'description',
  register: UseFormRegister<Inputs>,
  errors: any,
  required?: boolean;
}

const Input = ({ name, register, errors, required = false }: Props) => {
  return (
    <div>
      <input type="text" {...register(name, { required })} />
      {errors[name] && <span>This field is required</span>}
    </div>
  )
}

export default Input
