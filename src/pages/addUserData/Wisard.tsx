import { UiButton } from "/@/components/ui/button/UiButton";
import { useEffect } from "react";
import styles from "./Wisard.module.css";
import SectionComponent from "/@/components/ui/sections/SectionComponent";
function Wisard() {
  var currentTab = 0;
  useEffect(() => {
    showTab(currentTab);
  }, []);
  function fixStepIndicator(n) {
    var i,
      x = document.querySelectorAll(".step");
    for (i = 0; i < x.length; i++) {
       x[i].classList.remove(styles.active);
    }
    x[n].className += ` ${styles.active}`;
  }
  function showTab(n) {
    var x = document.querySelectorAll(".tab");
    x[n].style.display = "block";
    if (n == 0) {
      document.querySelector("#prevBtn").style.display = "none";
    } else {
      document.querySelector("#prevBtn").style.display = "inline";
    }
    if (n === x.length - 1) {
      document.querySelector("#nextBtn").textContent = "Submit";
    } else {
      document.querySelector("#nextBtn").textContent = "Next";
    }
    fixStepIndicator(n);
  }

  function validateForm() {
    var x,
      y,
      i,
      valid = true;
    x = document.querySelectorAll(".tab");
    y = x[currentTab].querySelectorAll("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        if (!y[i].classList.contains(styles.invalid)) {
          y[i].className += " " + styles.invalid;
        }
        valid = false;
      }
    }
    if (valid) {
      document.querySelectorAll(".step")[currentTab].className += ` ${styles.finish}`;
    }
    return valid;
  }
  function removeInvalidClass(e) {
    e.target.classList.remove(styles.invalid);
  }
  function nextPrev(n) {
    var x = document.querySelectorAll(".tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
      document.querySelector("#regForm").submit();
      return false;
    }
    showTab(currentTab);
  }
  return (
    <SectionComponent sectionTitle="myForm">
      <form id="regForm" className={`p30 width100 `} action="">
        <h1>Register:</h1>
        <div className={`tab ${styles.tab}`}>
          Name:
          <p>
            <input
              className={styles.text}
              type={"text"}
              placeholder="First name..."
              onInput={removeInvalidClass}
            />
          </p>
          <p>
            <input
              className={styles.text}
              placeholder="Last name..."
              onInput={removeInvalidClass}
            />
          </p>
        </div>
        <div className={`tab ${styles.tab}`}>
          Contact Info:
          <p>
            <input
              className={styles.text}
              placeholder="E-mail..."
              onInput={removeInvalidClass}
            />
          </p>
          <p>
            <input
              className={styles.text}
              placeholder="Phone..."
              onInput={removeInvalidClass}
            />
          </p>
        </div>
        <div className={`tab ${styles.tab}`}>
          Birthday:
          <p>
            <input
              className={styles.text}
              placeholder="dd"
              onInput={removeInvalidClass}
            />
          </p>
          <p>
            <input
              className={styles.text}
              placeholder="mm"
              onInput={removeInvalidClass}
            />
          </p>
          <p>
            <input
              className={styles.text}
              placeholder="yyyy"
              onInput={removeInvalidClass}
            />
          </p>
        </div>
        <div className={`tab ${styles.tab}`}>
          Login Info:
          <p>
            <input
              className={styles.text}
              placeholder="Username..."
              onInput={removeInvalidClass}
            />
          </p>
          <p>
            <input
              className={styles.text}
              placeholder="Password..."
              onInput={removeInvalidClass}
            />
          </p>
        </div>
        <div style={{ overflow: "auto" }}>
          <div style={{ float: "right" }}>
            <UiButton
              type="button"
              id="prevBtn"
              styles={"m5"}
              onClick={() => nextPrev(-1)}
            >
              Previous
            </UiButton>
            <UiButton
              type="button"
              id="nextBtn"
              styles={"m5"}
              onClick={() => nextPrev(1)}
            >
              Next
            </UiButton>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <span className={`${styles.step} step`}></span>
          <span className={`${styles.step} step`}></span>
          <span className={`${styles.step} step`}></span>
          <span className={`${styles.step} step`}></span>
        </div>
      </form>
    </SectionComponent>
  );
}
export default Wisard;
