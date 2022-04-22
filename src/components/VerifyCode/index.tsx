/** @jsxImportSource @emotion/react */
import clsx from "clsx";
import { css, useTheme } from "@emotion/react";
import { Theme } from "../../constants/theme";
import { useState, useRef } from "react";

type VerifyInputProps = {
  className?: string;
  length?: number;
  color?: string;
  content?: React.ReactNode;
  onCompelte?: (code: any) => any;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const VerifyCode = ({
  className,
  co,
  length = 6,
  content,
  onCompelte,
  color,
}: VerifyInputProps) => {
  const theme = useTheme() as Theme;
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs: any = useRef([]);
  const processInput = (e: any, slot: number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot].style.borderBottom = `4px solid ${color}`;
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      setLoading(true);
      setTimeout(() => setLoading(false), 10000);
      const value = newCode.join("");
      onCompelte?.(value);
    }
  };

  const onKeyUp = (e: any, slot: number) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].style.borderBottom = '4px solid #DEDEDE';
      inputs.current[slot - 1].focus();
    }
  };
  const styles = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    ...(typeof co == "function" ? co(theme) : co),
  });
  const codeInputs = css({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    '& > input': {
      backgroundImage: "none",
      backgroundColor: "transparent",
      "-webkit-box-shadow": "none",
      "-moz-box-shadow": "none",
      boxShadow: "none",
      textAlign: "center",
      height: "60px",
      width: "40px",
      margin: "0 4px",
      borderRadius: 0,
      borderBottom: "4px solid #DEDEDE",
      fontSize: "36px",
      caretColor: color,
      caretSize: '10px'
      // '&:focus': {
      //   borderBottom: `2px solid ${color}`,
      // }
    },
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames}>
      <div css={codeInputs}>
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0]?.length && idx === 0}
              readOnly={loading}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
            />
          );
        })}
      </div>
      {/* {content} */}
      {/* <div style={{ marginTop: '3em', width: '100%', textAlign: 'center'}}>
      <Keyboard onClick={onInput} />
      </div> */}
    </div>
  );
};
export default VerifyCode;
