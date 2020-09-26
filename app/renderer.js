// 连接html页面中的各个区域
const newProjectForm = document.querySelector('.add-new-project-form');
const projectMode = document.querySelector('.project-mode');
const projectName = document.querySelector('.project-name');
const resultName = document.querySelector('.result-name');
const newProjectSubmit = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-button');

// 检测4个输入框中输入是否有效，自动启用提交按钮
// 当4个输入框全部有内容，且符合要求时，才能点击提交
newProjectForm.addEventListener('keyup', () => {
    newProjectSubmit.disabled = (projectMode.value ==""||projectName.value ==""||resultName.value =="");
});

// alert()仅能用于浏览器环境
// __dirname仅能用于Node环境
// 而electron可以全都要哈哈哈哈哈
newProjectSubmit.addEventListener('click', () => {
    alert("别点了！功能还没有做完！");
});

// 清空表单函数
const clearForm = () => {
    projectMode.value =="";
    projectName.value =="";
    resultName.value =="";
}