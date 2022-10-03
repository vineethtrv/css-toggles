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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "model3",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 75px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  left: 2px;
  top: 2px;
  z-index: 2;
  background: #fff;
  box-sizing: border-box;
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
    id: "model3X1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 78px;
  height: 40px;
  background: #f8f8f8;
  border: 2px solid #DDD;
  box-shadow: inset 0 0 0 0px #13bf11;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #DDD;
  border-radius: 50%;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 1px 10px #0002;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  box-shadow: inset 40px 0 0 #13bf11;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 38px;
}
    `,
},
  {
    id: "model3X2",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 70px;
  height: 40px;
  background: #fff;
  border: 2px solid #DDD;
  box-shadow: inset -30px 0 0 #CCC;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.25s ease-in-out;
}
.toggle input[type="checkbox"]:checked + label:before {
  box-shadow: inset 30px 0 0 #13bf11;
}`,
},
  {
    id: "model3X3",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 70px;
  height: 40px;
  background: #eee;
  border: 2px solid #DDD;
  box-shadow:inset 0 0 0 0 #13bf11 ;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.25s ease-in-out;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #DDD;
  border-radius: 50%;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 1px 10px #0002;
  box-sizing: border-box;
  transition: 0.25s ease-in-out;
}
.toggle input[type="checkbox"]:checked + label:before {
  box-shadow: inset 0 0 0 18px #13bf11;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 30px;
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
  box-shadow: 0 0 10px #0003, -4px 1px 12px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px #0005, 0 3px 8px #0002;
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
    id: "model4",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 100px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  left: 2px;
  top: 2px;
  z-index: 2;
  background: #fff;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #4BD865;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 60px;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  border: 2px solid #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  left: 3px;
  top: 3px;
  z-index: 2;
  border: 2px solid #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 44px;
  background: #000;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  background: #FFF;
  border-radius: 46px;
  border: 2px solid #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  left: 3px;
  top: 3px;
  z-index: 2;
  background: #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #000;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 44px;
  background: #FFF;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  background: #FFF;
  border-radius: 46px;
  border: 4px solid #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  left: 10px;
  top: 12px;
  z-index: 2;
  background: #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #000;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 58px;
  background: #FFF;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  background: #FFF;
  border-radius: 46px;
  border: 2px solid #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border: 2px solid #000;
  box-shadow: 0 0 0 2px #fff inset;
  border-radius: 50%;
  left: 6px;
  top: 8px;
  z-index: 2;
  background: #000;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #000;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 50px;
  border-color: #FFF;
  box-shadow: 0 0 0 2px #000 inset;
  background: #FFF;
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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  border-color: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #009688;
  left: 44px;
}
`
},
  {
    id: "modelxN1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  appearance: none;

}
.toggle label {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  box-shadow:
    -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset,
    -4px -4px 4px 0px #ffffff inset;
}
.toggle label:after {
  content: '';
  height: 30px;
  width: 30px;
  background: #ecf0f3;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6;
}
.toggle input[type="checkbox"]:checked + label:after {
  transform: translate3d(30px, 0, 0);
}`
  },
  {
    id: "modelx0",
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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "modelxlB1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 56px;
  height: 22px;
  background: #ccc;
  box-shadow: inset 0 0 0 0px #13bf11;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 0;
  top: -4px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 1px 10px #0005;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  box-shadow: inset 40px 0 0 #13bf11;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 26px;
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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "model12",
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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "modelX17",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 2px;
  width: 64px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  border: 8px solid #bbb;
  top: -14px;
  width: 28px;
  height: 28px;
  left: 0;
  border-radius: 50%;
  z-index: 2;
  box-sizing:border-box;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  border-color: #009688;
  left: 36px;
}
`,
  },
  {
    id: "modelX18",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 2px;
  width: 64px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  border: 6px solid #bbb;
  top: 5px;
  width: 22px;
  height: 22px;
  left: 0;
  z-index: 2;
  box-sizing:border-box;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  border-color: #009688;
  left: 42px;
}
`,
  },
  {
    id: "modelSql1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 2px;
  width: 64px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  border: 6px solid #bbb;
  top: 5px;
  width: 22px;
  height: 22px;
  left: 0;
  z-index: 2;
  transform:rotate(45deg);
  box-sizing:border-box;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  border-color: #009688;
  left: 42px;
}
`,
  },
  {
    id: "modelSql2",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 30px;
  width: 64px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  background: #fff;
  top: 5px;
  width: 22px;
  height: 22px;
  left: 4px;
  z-index: 2;
  box-sizing:border-box;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background-color: #009688;
  left: 38px;
}
`,
  },
  {
    id: "modelSql3",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 20px;
  width: 64px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  border: 2px solid #ddd;
  background: #fff;
  top: 0;
  width: 32px;
  height: 32px;
  left: 0;
  z-index: 2;
  box-sizing:border-box;
  box-shadow: 0 0 5px #0002;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:hover + label:after  {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  border-color: #188e75 ;
  background-color: #009688;
  left: 38px;
}
`,
  },
  {
    id: "modelSql4",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 20px;
  width: 74px;
  position: relative;
  display: inline-block;
  box-shadow: inset 0 0.1em 0.03em rgb(0 0 0 / 20%), inset 0 0.1em 0.3em rgb(0 0 0 / 30%), 0 0 2em rgb(255 255 255 / 60%);
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  top: -2px;
  width: 32px;
  height: 32px;
  left: 0;
  z-index: 2;
  box-sizing:border-box;
  background: #5b5656;
  border-bottom: 0.07em solid #756f6f;
  box-shadow: 0 0.16em 0.01em #343131, 0 0.12em 0.3em rgb(52 49 49 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), 0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #77C2BB;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #21bf73;
  border-bottom: 0.07em solid #37dc8d;
  box-shadow: 0 0.16em 0.01em #167e4c, 0 0.12em 0.3em rgb(22 126 76 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), -0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  left: 42px;
}
`,
  },
  {
    id: "modelSql5",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 32px;
  width: 74px;
  position: relative;
  display: inline-block;
  border-radius: 16px;
  box-shadow: inset 0 0.1em 0.03em rgb(0 0 0 / 20%), inset 0 0.1em 0.3em rgb(0 0 0 / 30%), 0 0 2em rgb(255 255 255 / 60%);
  box-sizing:border-box;
  transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
}
.toggle label:after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  border-radius: 16px;
  z-index: 2;
  box-sizing:border-box;
  background: #5b5656;
  border-left: 0.07em solid #756f6f;
  border-bottom: 0.07em solid #756f6f;
  box-shadow: 0 0.16em 0.01em #343131, 0 0.12em 0.3em rgb(52 49 49 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), 0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
}

.toggle input[type="checkbox"]:checked + label:before {
  background: #c0e7e3;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #21bf73;
  border-left: none;
  border-right: 0.07em solid #37dc8d;
  border-bottom: 0.07em solid #37dc8d;
  box-shadow: 0 0.16em 0.01em #167e4c, 0 0.12em 0.3em rgb(22 126 76 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), -0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  left: 48px;
}
`,
  },
  {
    id: "modelSql6",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #bbb;
  height: 32px;
  width: 74px;
  position: relative;
  display: inline-block;
  box-shadow: inset 0 0.1em 0.03em rgb(0 0 0 / 20%), inset 0 0.1em 0.3em rgb(0 0 0 / 30%), 0 0 2em rgb(255 255 255 / 60%);
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  z-index: 2;
  box-sizing:border-box;
  background: #5b5656;
  border-left: 0.07em solid #756f6f;
  border-bottom: 0.07em solid #756f6f;
  box-shadow: 0 0.16em 0.01em #343131, 0 0.12em 0.3em rgb(52 49 49 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), 0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
}

.toggle input[type="checkbox"]:checked + label:before {
  background: #c0e7e3;
}
.toggle input[type="checkbox"]:checked + label:after {
  background: #21bf73;
  border-left: none;
  border-right: 0.07em solid #37dc8d;
  border-bottom: 0.07em solid #37dc8d;
  box-shadow: 0 0.16em 0.01em #167e4c, 0 0.12em 0.3em rgb(22 126 76 / 60%), 0 0.12em 2em rgb(0 0 0 / 30%), -0.12em 0.15em 0.2em rgb(0 0 0 / 20%);
  transform: translatex(44px);
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
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
  box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "modelSh10",
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
  box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
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
    id: "modelSh11",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
}

.toggle input[type=checkbox] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.toggle input[type=checkbox]:before, .toggle input[type=checkbox]:after {
  content: "";
  width: 5px;
  height: 14px;
  background: #fff;
  z-index: 1;
  left: 10px;
  top: 6px;
  border-radius: 14px;
  box-sizing: border-box;
  position: absolute;
}
.toggle input[type=checkbox]:after {
  background: none;
  border: 3px solid #FFF;
  width: 14px;
  left: 45px;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.toggle label:before {
  content: "";
  width: 72px;
  height: 32px;
  background: #888;
  box-shadow: inset 0 0 0 0px #13bf11;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: 0;
  top: -4px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 1px 10px #0005;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type=checkbox]:checked + label:before {
  box-shadow: inset 40px 0 0 #13bf11;
}
.toggle input[type=checkbox]:checked + label:after {
  left: 32px;
}
    `,
  },

  {
    id: "modelSHl7",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #ffa3a3;
  height: 32px;
  width: 94px;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: 'OFF';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 42px;
  height: 24px;
  z-index: 2;
  display: grid;
  place-content: center;
  font-family: arial;
  font-weight: bold;
  box-sizing:border-box;
  color:#FFF;
  background: #ef3434;
  transition: 0.25s ease-in-out;
}

.toggle input[type="checkbox"]:checked + label:before {
  background: #c0e7e3;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: 'ON';
  background: #21bf73;
  transform: translatex(44px);
}
`,
  },
  {
    id: "modelSHl8",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #ffa3a3;
  height: 18px;
  width: 84px;
  border-radius: 10px;
  box-shadow: inset 0 0.1em 0.03em #0002, 
    inset 0 0.1em 0.3em #0003, 
    0 0 2em #0006;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: 'OFF';
  position: absolute;
  top: -6px;
  left: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 12px;
  font-family: arial;
  font-weight: bold;
  box-sizing:border-box;
  color:#FFF;
  background: #ef3434;
  box-shadow: -2px 2px 4px #0004;
  transition: 0.25s ease-in-out;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #c0e7e3;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: 'ON';
  background: #21bf73;
  transform: translatex(44px);
}
`,
  },
  {
    id: "modelSHl9",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before {
  content: '';
  background: #ffa3a3;
  height: 34px;
  width: 90px;
  border-radius: 20px;
  box-shadow: inset 0 0.1em 0.03em #0002, 
    inset 0 0.1em 0.3em #0003;
  position: relative;
  display: inline-block;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: 'O';
  position: absolute;
  top: 2px;
  left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  box-sizing:border-box;
  color:#FFF;
  background: #ef3434;
  box-shadow: -2px 2px 4px #0004;
  transition: 0.25s ease-in-out;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #c0e7e3;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: 'I';
  background: #21bf73;
  transform: translatex(57px);
}
`,
  },
  {
    id: "modelSHl11",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.toggle input[type=checkbox] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.toggle input[type=checkbox]:before, .toggle input[type=checkbox]:after {
  content: "";
  background: #fff;
  width: 2px;
  height: 16px;
  position: absolute;
  left: 0px;
  top: 0;
  transition: 0.25s ease-in-out;
  transform: translate(13px, 5px) rotate(45deg);
}
.toggle input[type=checkbox]:after {
  transform: translate(13px, 5px) rotate(-45deg);
}

.toggle label {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
}

.toggle label:before {
  content: "";
  background: #CCC;
  height: 36px;
  width: 85px;
  border-radius: 20px;
  border: 1px solid #ddd;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}

.toggle label:after {
  content: "";
  position: absolute;
  top: 0;
  left: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  box-sizing: border-box;
  color: #FFF;
  background: #ef3434;
  transition: 0.25s ease-in-out;
}
.toggle input[type=checkbox]:checked:before {
  left: 51px;
  transform: translate(15px, 5px) rotate(45deg);
}
.toggle input[type=checkbox]:checked:after {
  transform: translate(8px, 12px) rotate(-45deg);
  height: 8px;
  left: 51px;
}
.toggle input[type=checkbox]:checked + label:before {
  background: #EEE;
}
.toggle input[type=checkbox]:checked + label:after {
  background: #21bf73;
  transform: translatex(51px);
}
`,
  },
  {
    id: "modelSHl12",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 42px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.toggle input[type=checkbox] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.toggle input[type=checkbox]:before, .toggle input[type=checkbox]:after {
  content: "";
  background: #ef3434;
  width: 3px;
  height: 22px;
  position: absolute;
  left: 0px;
  top: 0;
  transition: 0.25s ease-in-out;
  transform: translate(16px, 7px) rotate(45deg);
}
.toggle input[type=checkbox]:after {
  transform: translate(16px, 7px) rotate(-45deg);
}
.toggle label {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
}
.toggle label:before {
  content: "";
  background: #EEE;
  height: 42px;
  width: 84px;
  border-radius: 20px;
  border: 1px solid #ddd;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #ddd;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  box-sizing: border-box;
  color: #FFF;
  background: #FFF;
  transition: 0.25s ease-in-out;
}
.toggle input[type=checkbox]:checked:before {
  left: 51px;
  background: #21bf73;
  transform: translate(20px, 8px) rotate(45deg);
}
.toggle input[type=checkbox]:checked:after {
  background: #21bf73;
  transform: translate(10px, 18px) rotate(-45deg);
  height: 8px;
  left: 51px;
}
.toggle input[type=checkbox]:checked + label:before {
  background: #c0e7e3;
  border-color: #21bf73;
}
.toggle input[type=checkbox]:checked + label:after {
  transform: translatex(51px);
  border-color: #21bf73;
}
`,
  },
  {
    id: "modelTX1",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before  , .toggle label:after {
  font-size: 18px;
  font-weight: bold;
  font-family:arial;
  line-height: 36px;
  transition: 0.2s ease-in;
  box-sizing:border-box;
}
.toggle label:before {
  content: 'Yes';
  background: #ef3434;
  color: #0002;
  height: 36px;
  width: 90px;
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
}
.toggle label:after {
  content: 'No';
  position: absolute;
  left: 58px;
  top: -2px;
  color: #fff;
}
.toggle input[type="checkbox"]:checked + label:before {
  background: #21bf73;
  color: #fff;
}
.toggle input[type="checkbox"]:checked + label:after {
  color: #0002;
}
`,
  },
  {
    id: "modelTX2",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}
.toggle label:before  , .toggle label:after {
  font-weight: bold;
  font-family:arial;
  line-height: 36px;
  transition: 0.2s ease-in;
  box-sizing:border-box;
}
.toggle label:before {
  content: 'Yes';
  background: #EEE;
  color: #0003;
  font-size: 16px;
  height: 36px;
  width: 90px;
  display: inline-flex;
  text-decoration: line-through;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
}
.toggle label:after {
  content: 'No';
  position: absolute;
  left: 55px;
  top: -2px;
  font-size: 22px;
  color: #ef3434;
}
.toggle input[type="checkbox"]:checked + label:before {
  color: #21bf73;
  font-size: 22px;
  text-decoration: none;
}
.toggle input[type="checkbox"]:checked + label:after {
  color: #0003;
  font-size: 16px;
  left: 60px;
  text-decoration: line-through;
}
`,
  },
  {
    id: "modelTX3",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing:border-box;
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
  height: 100%;
  align-items: center;
  box-sizing:border-box;
}

.toggle label:before {
  content: 'Yes No';
  background: #FFF;
  color: #ef3434;
  height: 36px;
  word-spacing: 16px;
  font-weight: bold;
  font-size: 16px;
  font-family:arial;
  line-height: 36px;
  width: 90px;
  display: inline-flex;
  align-items: center;
  padding-left: 8px;
  border-radius: 20px;
  border: 2px solid #DDD;
  box-sizing:border-box;
  transition: 0.2s ease-in;
}
.toggle label:after {
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  width: 45px;
  height: 32px;
  background: #EEE;
  color: #ef3434;
  border-radius: 20px 0 0 20px;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:before {
  color: #21bf73;
}
.toggle input[type="checkbox"]:checked + label:after {
  left: 43px;
  border-radius: 0 20px 20px 0;
}
`,
  },
  {
    id: "modelTX4",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `
`,
  },



  {
    id: "modelSh6",
    html: `<div class="toggle ss">
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
    id: "modelx12",
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
    id: "modelEM10",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  background: #ffed00;
  border-radius: 46px;
  border: 2px solid #ffd000;
  box-sizing: border-box;
}
.toggle label:after {
  content: '😞';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 4px;
  top: 6px;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 32px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: '😊';
  transform: rotate(360deg);
  left: 48px;
}
`,
},
  {
    id: "modelEM12",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  background: #ffed00;
  border-radius: 46px;
  border: 2px solid #ffd000;
  box-sizing: border-box;
}
.toggle label:after {
  content: '👎';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 4px;
  top: 6px;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 32px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:after {
  transform: rotateX(180deg) translate(-3px , 3px);
  left: 48px;
}
`,
},
  {
    id: "modelEM13",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '';
  width: 84px;
  height: 42px;
  position: relative;
  display: inline-block;
  border:2px solid #999;
  border-radius: 20px;
  box-sizing: border-box;
}
.toggle label:after {
  content: '🔓';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 6px;
  top: 6px;
  z-index: 2;
  display: grid;
  place-content: center;
  font-size: 32px;
  box-sizing: border-box;
  transition: 0.2s ease-in;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: '🔒';
  left: 48px;
}
`,
},
  {
    id: "modelEM14",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '🔓';
  font-size: 36px;
  position: relative;
  display: inline-block;
}

.toggle input[type="checkbox"]:checked + label:before {
  content: '🔒';
}
`,
},
  {
    id: "modelEM15",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '👎';
  font-size: 36px;
  position: relative;
  display: inline-block;
}

.toggle input[type="checkbox"]:checked + label:before {
  content: '👍';
}
`,
},
  {
    id: "modelEM17",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '😊';
  font-size: 36px;
  position: relative;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:before {
  content: '😞';
}
`,
},
  {
    id: "modelEM18",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '🔔';
  font-size: 36px;
  position: relative;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:before {
  content: '🔕';
}
`,
},
  {
    id: "modelEM19",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '🔈';
  font-size: 36px;
  position: relative;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:before {
  content: '🔇';
}
`,
},
  {
    id: "modelEM20",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '📷';
  font-size: 36px;
  position: relative;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: '';
  position: absolute;
  left: 17px;
  top: 5px;
  width: 4px;
  height: 45px;
  transform: rotate(-45deg);
  background: red;
  box-sizing: border-box;
}
`,
},
  {
    id: "modelEM21",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '📱';
  font-size: 36px;
  position: relative;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: '';
  position: absolute;
  left: 15px;
  top: 4px;
  width: 4px;
  height: 45px;
  transform: rotate(-45deg);
  background: red;
  box-sizing: border-box;
}
`,
},
 
  {
    id: "modelEM22",
    html: `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`,
    css: `.toggle {
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.toggle label:before {
  content: '🚬';
  font-size: 36px;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
}
.toggle input[type="checkbox"]:checked + label:after {
  content: '❌';
  position: absolute;
  font-size: 20px;
  left: 9px;
  top: 24px;
  box-sizing: border-box;
}

`,
},
  










]