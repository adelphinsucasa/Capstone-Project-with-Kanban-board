/**
 * @jest-environment jsdom
 */
import countComments from './comments.js';
import countCharacter from './characterCounter.js';
import CharaterTest from './mock/characterCounter.js';

describe('Testing Counter Comments function "countComments"', () => {
  test('1.- displays how many comments does exist when the ul is empty', () => {
    document.body.innerHTML = `<div class="comment__retrieved">
                                  <ul id="ulComments" class="ulComments"></ul>
                                  <button id="btnSubmitt" class="btnSubmitt">Submitt</button>
                                </div>`;

    let numComments = 0;
    const btnSubmitt = document.querySelector('.btnSubmitt');
    btnSubmitt.addEventListener('click', () => {
      numComments = countComments();
    });

    btnSubmitt.click();
    expect(numComments).toBe(0);
  });

  test('2.- displays how many comments does exist when the ul has some value', () => {
    document.body.innerHTML = `<div class="comment__retrieved">
                                <ul id="ulComments" class="ulComments">
                                  <li>Comment 1</li>
                                  <li>Comment 2</li>
                                  <li>Comment 3</li>
                                  <li>Comment 4</li>
                                  <li>Comment 5</li>
                                  <li>Comment 6</li>
                                </ul>
                                <button id="btnSubmitt" class="btnSubmitt">Submitt</button>
                              </div>`;

    let numComments = 0;
    const btnSubmitt = document.querySelector('.btnSubmitt');
    btnSubmitt.addEventListener('click', () => {
      numComments = countComments();
    });

    btnSubmitt.click();
    expect(numComments).toBe(6);
  });
});
test('testing number of characters', () => {
  const counterTest = new CharaterTest();
  const counterTest1 = new CharaterTest();
  counterTest.countItems(40);
  counterTest1.countItems(34);
  expect(counterTest.totalCharacter).toBe(40);
  expect(counterTest1.totalCharacter).toBe(34);
});
