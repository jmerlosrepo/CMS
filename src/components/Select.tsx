import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  children: React.ReactNode;
  name: string;
};

function Select({ options, defaultMessage, children, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <select {...register(name)} className="form-control">
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}

export default Select;
