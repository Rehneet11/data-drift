export function loading (ms:number){
    return new Promise (resolve => setTimeout(resolve,ms))
}