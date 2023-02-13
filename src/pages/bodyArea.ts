function bodyArea(): void {
  document.querySelector('.nav-aside')?.classList.toggle('active'); 
  document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
  document.querySelector('.open')?.classList.toggle('hidden1');
  document.querySelector('.close')?.classList.toggle('hidden1');
  console.log('ddddd');
}
export default bodyArea;
