import countComments from './comments.js';

test('displays comments quantity', () => {
    document.body.innerHTML =
    `<div class="comment__retrieved">
    <h2 class="totalComments"><h2>
    <ul class="ulComments"></ul>
  </div>
  <div class="comment__section-input">
    <h2 class="add-comment">Add comment</h2>
    <input type="text" class="name" placeholder="Your Name" />
    <input type="text" class="comment" placeholder="add comment here" />
    <button class="btnSubmitt">submit</button>
  </div>`;

    var numComments = 0;
    const btnSubmitt = document.querySelector('.btnSubmitt');
    btnSubmitt.addEventListener('click', () => {
       numComments = countComments();
    });

    btnSubmitt.click();
    expect(numComments).toBe(0);
});