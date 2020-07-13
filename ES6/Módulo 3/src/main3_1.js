var a = 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))
async function umPorSegundo(){
  await delay()
  console.log(`${a} segundo(s).`)
  a++
  await delay()
  console.log(`${a} segundo(s).`)
  a++
  await delay()
  console.log(`${a} segundo(s).`)
}

umPorSegundo()