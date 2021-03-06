import { IEmiter, EventMap } from "./IEmiter";



export class Emiter implements IEmiter{

    protected eventMap: EventMap = {  };

    addListener(name: string|number, fun: (...params: Array<any>) => void): void{
        const funArray = this.eventMap[name] =this.eventMap[name] || [];
        funArray.push(fun);
    }

    removeListeners(name: string|number){
        delete this.eventMap[name];
    }

    removeListener(name: string|number, fun: (...params: Array<any>) => void): void{
        const funArray = this.eventMap[name];
        if( funArray ){
            if( funArray.length ){
                const index = funArray.indexOf(fun);       
                if( index > -1 ){
                    funArray.splice(index, 1);
                }         
            }else{
                delete this.eventMap[name];
            }

        }
    }

    emit(name: string, ...params: Array<any>): void{
        const funs = [ ...(this.eventMap[name]||[]) ];
        funs.forEach( fun => {
            try{
                fun(...params);
            }catch(e){
                console.error(e);
            }
        }) 
    }
}