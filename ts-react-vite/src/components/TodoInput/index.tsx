
interface TodoInputProps {
  onSubmit: (value: string) => void;
  placeholder: string;
  label: string;
  defaultValue: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  }


function TodoInput ({onSubmit, placeholder, label, defaultValue, onBlur}: TodoInputProps) {
  return (
    <div>
      <label htmlFor="todo-input">
        <input id="todo-input" type="text" data-testid="text-input" autoFocus placeholder={placeholder} defaultValue={defaultValue} onBlur={handleBlur} onKeyDown={handleKeyDown} />
          {label}
      </label>
    </div>
  )
}

export default TodoInput;