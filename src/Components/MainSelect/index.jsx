import React from "react";
import "./_mainSelect.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

/**
 * we use HTML select
 * @param {object} props 
 * @returns select with label
 */
const MainSelect = (props) => {
  const {
    label,
    name,
    onChange,
    defaultValue,
    optionsList,
    onBlur,
    required = true,
    errorMessage,
    isDisabled,
  } = props;

  /****************************** ELMENTS *****************************************/
  return (
    <div className="select-wrapper">
      <div className="text-container">
        <span className="label-style">{label}</span>
        {errorMessage && (
          <>
            <InfoCircleOutlined className="error-icon" />
            <span className="error-style">{errorMessage}</span>
          </>
        )}
      </div>
      <select
        disabled={isDisabled}
        required={required}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option></option>
        {optionsList?.map((item) => (
          <option key={item.id} value={item.id}>
            {item?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MainSelect;
