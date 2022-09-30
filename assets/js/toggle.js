export const TOGGLES = [
{
    id: "model1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  width: 90px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 0;
  top: -5px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #376fcb;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #4285F4;
  left: 40px;
}
`,
},

{
    id: "model2",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  width: 75px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  left: 0;
  top: 0px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #4BD865;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 35px;
}
`,
},
{
    id: "model3",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  background: #fff;
  border: 1px solid #ccc;
  height: 38px;
  width: 90px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #bbb;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #4BD865;
  left: 57px;
}
`,
},
{
    id: "model4",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 25px;
  width: 75px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  top: -8px;
  width: 38px;
  height: 38px;
  left: 0;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #009688;
  left: 40px;
}
`,
},
{
    id: "model5",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 15px;
  width: 85px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  top: -12px;
  width: 36px;
  height: 36px;
  left: 0;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #009688;
  left: 50px;
}
`,
},
{
    id: "model6",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
    position: relative;
    height: 32px;
    display: flex;
    align-items: center;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 2px;
  width: 60px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 46px;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #bbb;
  top: -16px;
  width: 32px;
  height: 32px;
  left: 0;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #009688;
  left: 28px;
}
`,
},
{
    id: "model7",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
}
.toggle label:before {
    content: '';
    border: 5px solid #bbb;
    height: 35px;
    width: 70px;
    position: relative;
    display: inline-block;
    margin-right: 10px;
    border-radius: 46px;
    transition: 0.2s ease-in;
}
.toggle label:after {
    content: '';
    position: absolute;
    background: #555;
    width: 28px;
    height: 28px;
    left: 8px;
    top: 8px;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 5px #0002;
    transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  border-color: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #009688;
  left: 44px;
}
`,
},
{
    id: "model8",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},
{
    id: "model9",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},
{
    id: "model10",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},




]