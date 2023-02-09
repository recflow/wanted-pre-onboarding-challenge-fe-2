/**
 * @file Todo 데이터 모델링
 * @author recflow
 * 
 */
/**
 * Represents single todo
 * @typedef {object} Todo 
 * @property {number} id - 아이디
 * @property {boolean} isCompleted - 완료여부
 * @property {string} contents - 내용
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들

 */
class TodoList {}

/**
 * @param {todo[]} todoList - Todo 리스트
 */


/** create 
 * @param {Object} Todo - Todo 객체
 * @param {string} Todo.contents - Todo의 내용
 * @param {string} Todo.category - Todo 카테고리
 * @param {string} [Todo.tags] - Todo 태그
 */

const addTodo = (contents, {category, tags=[]})=>{};
/** read 
 * @param {?number} id 
 * @returns {(Todo| Todo[])}
*/
const getTodo=(id)=>{};
/** update 
 * 
 * @param {?number} id
*/
const updateTodo=(id, {contents, category, tags})=>{};
/** delete 
 * @param {number} id
*/
const deleteTodo=(id)=>{};
