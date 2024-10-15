import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children: React.ReactNode;
};

function Input({ name, children }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input
        {...register(name)}
        type="text"
        className="form-control"
        id={name}
      />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}

export default Input;
