import {of,Observable, async} from 'rxjs';
import {catchError, map} from 'rxjs/operators';



const emitter: Observable<string> = of("nameone","nametwo","namethree")
emitter.subscribe((value:string)=>{
    console.log(`name : ${value}`)
})






const constemitter = of(4,9,1,3,17)
const mapValue = constemitter.pipe(
    map((value: number) => {
      return Math.sqrt(value)
    }),
    map((value: number) => {
      return `square root: ${value}`
    },
    catchError((error:any) =>{
        console.log(`stream caught : ${error}`);
        return of(null)
    }))
  )

  mapValue.subscribe((value:string)=>{
    console.log(`${value}`)
  })


const p_resolve = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    return resolve("resolve promise")    
  },5000)
  
  
})


const world = 'world';
export function hello(who: string = world): string {
    return `Hello ${who}! `;
  }
console.log(hello())
console.log("wow")

const chk=async function handlePromise() {
  const demo =   await p_resolve
  console.log(demo)
  console.log("I am getting resolved before promise resolved")
}

chk()


