import SectionComponent from "../../components/ui/section/SectionComponent";
import { UiButton } from "../../components/ui/button/UiButton";
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
      <SectionComponent titleText="Войти">
        <form
          action=""
          className={[
            "br075rem",
            "p25",
            "pt75",
            "title",
            "bgWhite",
            "width100",
            "flex",
            "column",
            "loginformWrapper",
          ].join(" ")}
        >
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
          {/* <Checkbox>321 </Checkbox>*/}
          <div className="flex">
            <input type="checkbox" name="remember" id="remember" className="scale1_5"/>
            <label htmlFor="remember" className="px15">Запомнить</label>
          </div>
          <UiButton>Войти</UiButton>
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
      </SectionComponent>
    </div>
  );
}
export default LoginPage;
