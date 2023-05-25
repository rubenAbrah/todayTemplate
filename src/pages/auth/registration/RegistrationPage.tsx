import { UiButton } from "/@/components/ui/button/UiButton";
import SectionComponent from "/@/components/ui/sections/SectionComponent";
function RegistrationPage() {
  return (
    <SectionComponent sectionTitle="Регистрация">
      <form
        action=""
        className={`br075rem p25 pt75 bgWhite width100 flex column loginformWrapper `}
      >
        <input
          type="text"
          className="borderGrey my10 p15 br075rem"
          placeholder="Имя"
        />{" "}
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
        <input
          type="passwordRepeat"
          name=""
          className="p15 my10 br075rem borderGrey"
          placeholder="Повтарите пароль"
          id=""
        />
        <UiButton>Войти</UiButton>
        <span className="my5">
          Уже есть аккаунт ?{" "}
          <a className="colorBlue" href="/">
            Войти
          </a>
        </span>
      </form>
    </SectionComponent>
  );
}
export default RegistrationPage;
