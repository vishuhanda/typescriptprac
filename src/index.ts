import {of,Observable} from 'rxjs';

const emitter: Observable<string> = of("nameone","nametwo","namethree")


emitter.subscribe((value:string)=>{

    console.log(`name : ${value}`)

})

const world = 'world';
export function hello(who: string = world): string {
    return `Hello ${who}! `;
  }

console.log(hello())