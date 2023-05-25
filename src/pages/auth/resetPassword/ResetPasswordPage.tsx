import { UiButton } from "/@/components/ui/button/UiButton";
import SectionComponent from "/@/components/ui/sections/SectionComponent";
function ResetPasswordPage() {
  return (
    <SectionComponent sectionTitle="Восстоновить пароль">
      <form
        action=""
        className={`br075rem p25 pt75 bgWhite width100 flex column loginformWrapper `}
      >
        <input
          type="passOrEmail"
          name=""
          className="p15 my10 br075rem borderGrey"
          placeholder="Напишите пароль или Email"
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
export default ResetPasswordPage;
