interface Props {
  onChange: (event: any) => void;
  name: string;
}

const Input = ({ onChange }: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label">My name is : </label>
      <input
        type="text"
        onChange={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
};

export default Input;
