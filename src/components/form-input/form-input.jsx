import "./form-input.scss";

export function FormInput({label, ...otherProps}) {
  return (
      <div className="group">
        <input className="form-input" type="text" {...otherProps}/>
        {
            label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        }
      </div>
  );
}