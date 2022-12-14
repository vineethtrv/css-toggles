import { TOGGLES } from './toggle.js'; // import examples
const appEl = document.getElementById('app'); // App element section 
const CODE_EXAMPLES = [...TOGGLES]; // Map codes

// Create objects
CODE_EXAMPLES.forEach((obExample, i) => {
    // Append Code examples 
    appEl.appendChild(generateExamples(i, true));

})


function generateExamples(i , viewSource) {
    let codeExample = CODE_EXAMPLES[i];

    /** Create html **/

    // Create Section
    let sectionEl = document.createElement('div');
    sectionEl.setAttribute('class', 'section');


    //  Append Card
    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', 'card');
    sectionEl.appendChild(cardEl);


    // Append View Source Code Button
    if(viewSource){
        let viewCodeBtn = document.createElement('button');
        viewCodeBtn.setAttribute('data-id', codeExample.id);
        viewCodeBtn.setAttribute('data-index', (i + 1));
        viewCodeBtn.innerText = 'View Code </>';
        sectionEl.appendChild(viewCodeBtn);
    }


    //  Create Shadow wrapper element
    let shadowRoot = cardEl.attachShadow({ mode: 'open' });

    // Create HTML Elements
    if (viewSource){
        shadowRoot.innerHTML  =  `<div class="toggle">
            <input type="checkbox"/>
            <label></label>
        </div>
        <div class="toggle">
            <input checked type="checkbox"/>
            <label></label>
        </div>
        `;
    }else{
        shadowRoot.innerHTML = `<div class="toggle">
            <input type="checkbox"/>
            <label></label>
        </div>`;
    }
    

    //Create CSS 
    let exampleStyles = document.createElement('style');
    exampleStyles.type = 'text/css';
    exampleStyles.innerHTML = codeExample.css;
    shadowRoot.appendChild(exampleStyles);

    return sectionEl
}




document.querySelectorAll('#app .section button').forEach(elm => {
    elm.addEventListener('click', (e) => {
        let index = parseInt(e.target.dataset.index);
        let showCase = document.querySelector('.showcase');

        showCase.replaceChildren(generateExamples((index - 1)));


        // console.log(e);
        showCase.dataset.index = index;

        // load code
        document.querySelector('#markup').textContent = `<div class="toggle">
    <input type="checkbox"/>
    <label></label>
</div>`;
        document.querySelector('#css').textContent = CODE_EXAMPLES[index - 1].css;

        // popup
        document.querySelector('body').classList.add('pop')
        document.querySelector('.overlay').classList.add('in')
    })
})


// close popup
document.querySelector('.btn-close').addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('pop')
    document.querySelector('.overlay').classList.remove('in');
});

document.querySelector('.overlay').addEventListener('click', (e) => {
    if (e.target.className === "overlay in") {
        document.querySelector('body').classList.remove('pop')
        document.querySelector('.overlay').classList.remove('in');
    }
});


// Copy to clipboard
document.querySelectorAll('.copy').forEach(copyBtn => {
    copyBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectText(id);
        document.execCommand("copy");
        e.target.textContent = 'Copied';

        setTimeout(time => e.target.textContent = 'Copy', 300);
    })
});


// select Text
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}