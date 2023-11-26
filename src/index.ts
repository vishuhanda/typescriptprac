import {of,Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
    })
  )



const world = 'world';
export function hello(who: string = world): string {
    return `Hello ${who}! `;
  }

console.log(hello())