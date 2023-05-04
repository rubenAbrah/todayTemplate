import { SubmitButton } from "../../components/ui/button/SubmitButton";
import { Checkbox } from "../../components/ui/checkbox/Checkbox"; 
import { BigTitle } from "../../components/ui/title/BigTitle";
import styles from "./Login.module.css";
function LoginPage() {
  return (
    <div
      className={[
        styles.wrapper,
        "colorGrey",
        "justifyCenter",
        "br075rem",
        "flex",
        "column",
        "alignCenter",
      ].join(" ")}
    >
      <form
        action=""
        className={[
          "br075rem",
          "p25",
          "pt75",
          "title",
          "bgWhite",
          "flex",
          "column",
          "loginformWrapper",
          styles.loginformWrapper,
        ].join(" ")}
      > 
      <BigTitle>Войти</BigTitle>
        <input
          type="text"
          className="borderGrey my10 p15 br075rem"
          placeholder="Email"
        />
        <input
          type="password"
          name=""
          className="p15 my10 br075rem borderGrey"
          placeholder="Пароль"
          id=""
        />
           <Checkbox>Запомнить</Checkbox>
         
        
        <SubmitButton>Войти</SubmitButton>
        <span className="my5">
          Забыли пароль ?{" "}
          <a className="colorBlue" href="">
            Восстоновить
          </a>
        </span>
        <span className="my5">
          Не имеете аккаунта ?{" "}
          <a className="colorBlue" href="">
            Регистрация
          </a>
        </span> 
      </form>
    </div>
  );
}
export default LoginPage;
