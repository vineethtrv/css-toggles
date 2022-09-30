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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
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
  border-radius: 10px;
  width: 95px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  border-radius: 10px;
  width: 60px;
  height: 42px;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 35px;
}
`,
},
{
    id: "model9",
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
  height: 32px;
  border-radius: 20px;
  background: #ccc;
  position: relative;
  display: inline-block;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  border-radius: 20px;
  top: 0;
  width: 50px;
  height: 32px;
  left: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 10px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after {
  box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 40px;
}
`,
},
{
    id: "model10",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle:before {
    content: '';
    position: absolute;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    width: 6px;
    height: 14px;
    z-index: 2;
    transform: rotate(45deg);
    top: 11px;
    left: 15px;
}
.toggle:after {
    content: '×';
    position: absolute;
    top: 0;
    left: 55px;
    z-index: 2;
    line-height: 42px;
    font-size: 26px;
    color: #aaa;
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
  width: 80px;
  height: 42px;
  box-shadow: 0 0 1px 2px #0001;
  background: #eee;
  position: relative;
  display: inline-block;
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
  top: 0;
  z-index: 5;
  background: #fff;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after {
  box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #00015;
}
.toggle input[type="checkbox"]:checked + label:before {
    transition: 0.1s 0.2s ease-in;
    background: #4BD865;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 38px;
}
`,
},
{
    id: "model11",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle:before, .toggle:after {
  position: absolute;
  top: 0;
  z-index: 1;
  height:32px;
  line-height: 32px;
  font-weight: 600;
  font-size: 12px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.toggle:before {
  content: 'ON';
  left: 10px;
  color: #266c33;
}
.toggle:after {
  content: 'OFF';
  right: 10px;
  color: #90201F;
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
  background: #E3666C;
  height: 32px;
  box-shadow: 0 0 1px 2px #0002;
  width: 90px;
  display: inline-block;
  transition: 0.1s linear;
}
.toggle label:after {
  content: '';
  position: absolute;
  background-color: #FFF;
  background-size: 100%;
  background-image: linear-gradient(to right, #ffffff 30%, #dddddd 45%, #ffffff 50%, #dddddd 55%, #ffffff 70%);
  border-radius: 0;
  width: 50px;
  height: 32px;
  left: 0;
  top: 0;
  z-index: 5;
  transition: 0.1s linear;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #4BD865;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 40px;
}
`,
},
{
    id: "model12",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
    position: relative;
    background: #2B2B2D;
    color: #787878;
    height: 40px;
    padding: 0 10px;
    border-radius: 50px;
    font-weight: 800;
}
.toggle:after, .toggle:before {
  content: 'ON';
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 40px;
  font-size: 12px;
}
.toggle:before {
  content: 'OFF';
  z-index: 1;
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
  background: #1E1E1E;
  height: 10px;
  width: 70px;
  margin: 0 5px;
  box-shadow: 0 0 2px 2px #0003 inset;
  position: relative;
  display: inline-block;
  border-radius: 20px;
}
.toggle label:before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  transition: 0.3s ease-in;
  background: #151515;
  z-index: 3;
  left: 7px;
  top: -2px;
}
.toggle label:after {
  content: '';
  background-color: #3F4545;
  background-size: 100%;
  background-image: linear-gradient(to bottom, #666666 0%, #3f4545 100%);
  top: -9px;
  left: 0;
  width: 27px;
  height: 27px;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  transition: 0.3s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #94DA00;
  box-shadow: 0 0 5px #94da00;
  left: 52px;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 45px;
}

`,
},
{
    id: "model13",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  display: inline-block;
}
.toggle:after {
  content: 'OFF';
  font-family: Arial;
  position: absolute;
  color: #666;
  top: 10px;
  right: 15px;
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
  border: 3px solid #777;
  height: 32px;
  width: 84px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: 'ON';
  font-family: Arial;
  color: #fff;
  line-height: 28px;
  text-indent: 100px;
  background: #777;
  overflow: hidden;
  box-shadow: none;
  border-radius: 14px;
  transform: translateX(-50px);
  transition: all 0.4s 0.2s, width 0.2s linear, text-indent 0.4s linear;
  text-align: center;
    top: 5px;
    right: 6px;
  width: 28px;
  height: 28px;
  position: absolute;
  z-index: 2;
}
.toggle input[type="checkbox"]:checked + label:before {
  border-color: #329043;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #3fb454;
  transform: translateX(0px);
  transition: all 0.4s, width 0.2s linear 0.4s, text-indent 0.3s linear 0.4s;
  width: 78px;
  text-indent: 0;
}
`,
},
{
    id: "model14",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
}
.toggle:before, .toggle:after {
  position: absolute;
  top: 0;
  z-index: 1;
  height:32px;
  line-height: 32px;
  font-weight: 600;
  font-size: 12px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.toggle:before {
  content: 'ON';
  left: 10px;
  color: #266c33;
}
.toggle:after {
  content: 'OFF';
  right: 10px;
  color: #90201F;
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
  background: #FFF;
  height: 32px;
  box-shadow: 0 0 1px 2px #0002;
  width: 90px;
  display: inline-block;
  transition: 0.1s linear;
}
.toggle label:after {
  content: '';
  position: absolute;
  background-color: #E3666C;
  background-size: 100%;
  border-radius: 0;
  width: 45px;
  height: 32px;
  left: 0;
  top: 0;
  z-index: 5;
  transition: 0.1s linear;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #4BD865;
  left: 45px;
}
`,
},
{
    id: "model15",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  display: inline-block;
  position: relative;
  border-radius: 40px;
  height: 50px;
  width: 125px;
  background: #fff;
  transition: 0.2s ease-in;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.toggle:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.toggle input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  opacity: 0;
  cursor: pointer;
}
.toggle label {
  height: 50px;
  width: 50px;
  position: absolute;
  border-radius: 50%;
  border: 10px solid #2752dd;
  right: 0;
  box-sizing: border-box;
  transition: transform 0.25s 0.2s ease-out , border 0.2s ease-out , right 0.2s ease-out;
  transform: rotate(-135deg);
}
.toggle label:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 10px;
  height: 25px;
  background: #2752dd;
  box-sizing: border-box;
  transform: translateX(-50%);
  transition: 0.2s ease-out;
}
.toggle label:before {
  content: '';
  position: absolute;
  box-sizing: border-box;
  border-bottom: 10px solid #2752dd;
  border-right: 10px solid #2752dd;
  top: 37px;
  left: 3px;
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
  transition: 0.2s ease-out;
}
.toggle input:checked + label {
  border-color: #fc2695;
  right: 75px;
  transform: rotate(0deg);
}
.toggle input:checked + label:after {
  background: #fc2695;
  height: 35px;
}
.toggle input:checked + label:before {
  border-right: none;
  border-color: #fc2695;
  transform: rotate(0deg);
  top: 32px;
}
`,
},
{
    id: "model16",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},
{
    id: "model17",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},
{
    id: "model18",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},
{
    id: "model19",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
},




]