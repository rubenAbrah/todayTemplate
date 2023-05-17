import SectionComponent from "/@/components/ui/sections/SectionComponent";
import { UiButton } from "/@/components/ui/button/UiButton";
import { CastomCheckbos } from "/@/components/ui/checkbox/Checkbox"; 
import styles from "./Login.module.css";
function LoginPage() {
  return (
    <div className={`${styles.wrapper} colorGrey justifyCenter br075rem flex column alignCenter `}
    >
      <SectionComponent sectionTitle="Вход">
        <form
          action=""
          className={`br075rem p25 pt75 title bgWhite width100 flex column loginformWrapper `}
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
          <CastomCheckbos>Запомнить </CastomCheckbos> 
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
