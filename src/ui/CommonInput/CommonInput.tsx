import type { UseFormRegister, FieldValues } from "react-hook-form"

type CommonInputProps = {
    label: string,
    type: string,
    required?: boolean,
    placeholder?: string,
    register: UseFormRegister<FieldValues>,
    error?: string
}

export default function CommonInput({ label, register, type, required, placeholder, error }: CommonInputProps) {
    return (
        <div>
            <input className="w-100" type={type} {...register(label, { required })} placeholder={placeholder} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}