import { UiButton } from "../../components/ui/button/UiButton";
import { useEffect } from "react";
import SectionComponent from "../../components/ui/section/SectionComponent";
function UserData() {
    var currentTab = 0;
    useEffect(() => {
        showTab(currentTab);
    }, [])
    function fixStepIndicator(n) {
        var i, x = document.querySelectorAll(".step");
        for (i = 0;
            i < x.length;
            i++) {
            x[i].className = x[i].className.replace(" active", "");
        } x[n].className += " active";
    }
    function showTab(n) {
        var x = document.querySelectorAll(".tab");
        x[n].style.display = "block"
        if (n == 0) {
            document.querySelector("#prevBtn").style.display = "none";
        } else {
            document.querySelector("#prevBtn").style.display = "inline";
        } if (n == (x.length - 1)) {
            document.querySelector("#nextBtn").innerHTML = "Submit";
        } else {
            document.querySelector("#nextBtn").innerHTML = "Next";
        }
        fixStepIndicator(n)
    }
    function validateForm() {
        var x, y, i, valid = true;
        x = document.querySelectorAll(".tab");
        y = x[currentTab].getElementsByTagName("input");
        for (i = 0;
            i < y.length;
            i++) {
            if (y[i].value == "") {
                y[i].className += " invalid";
                valid = false;
            }
        }
        if (valid) {
            document.querySelectorAll(".step")[currentTab].className += " finish";
        } return valid;
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
    } return (
        <SectionComponent titleText="myForm" >
            <form id="regForm" className="p30 width100 " action="">
                <h1>Register:</h1>            <div className="tab">Name:
                    <p><input type={'text'} placeholder="First name..."
                        onInput={(e) => e.target.className = ''}
                    /></p>
                    <p><input placeholder="Last name..."
                        onInput={(e) => e.target.className = ''}
                    /></p>            </div>            <div className="tab">Contact Info:
                    <p><input placeholder="E-mail..."
                        onInput={(e) => e.target.className = ''}
                    /></p>
                    <p><input placeholder="Phone..."
                        onInput={(e) => e.target.className = ''}
                    /></p>            </div>            <div className="tab">Birthday:
                    <p><input placeholder="dd"
                        onInput={(e) => e.target.className = ''}
                    /></p>
                    <p><input placeholder="mm"
                        onInput={(e) => e.target.className = ''}
                    /></p>
                    <p><input placeholder="yyyy"
                        onInput={(e) => e.target.className = ''}
                    /></p>            </div>            <div className="tab">Login Info:
                    <p><input placeholder="Username..."
                        onInput={(e) => e.target.className = ''}
                    /></p>
                    <p><input placeholder="Password..."
                        onInput={(e) => e.target.className = ''}
                    /></p>            </div>            <div style={{ overflow: 'auto' }}>
                    <div style={{ float: 'right' }}>
                        <UiButton type="button" id="prevBtn" styles={'m5'}
                            onClick={() => nextPrev(-1)}
                        >Previous</UiButton>
                        <UiButton type="button" id="nextBtn" styles={'m5'}
                            onClick={() => nextPrev(1)}
                        >Next</UiButton>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <span className="step"></span>
                    <span className="step"></span>
                    <span className="step"></span>
                    <span className="step"></span>
                </div>
            </form>
        </SectionComponent>)
} export default UserData