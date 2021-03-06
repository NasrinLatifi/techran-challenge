import React from "react";
import "../MainInput/_mainInput.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

/**
 * we use HTML text area
 * @param {object} props 
 * @returns text area with label
 */
const MainTextArea = (props) => {
  const {
    isDisabled,
    label,
    errorMessage,
    onChange,
    onBlur,
    name,
    defaultValue,
  } = props;

  /****************************** ELMENTS *****************************************/
  return (
    <div className="main-input-wrapper text-area-input-wrapper">
      <div className="text-container">
        <span className="label-style">{label}</span>
        {errorMessage && (
          <>
            <InfoCircleOutlined className="error-icon" />
            <span className="error-style">{errorMessage}</span>
          </>
        )}
      </div>
      <textarea
        disabled={isDisabled}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={defaultValue}
        className="text-area-input-style"
      />
    </div>
  );
};

export default MainTextArea;
