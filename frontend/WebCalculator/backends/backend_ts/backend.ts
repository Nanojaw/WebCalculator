import * as nerdamer from './nerdamer/index'

export class backend {
    static parse(expr: string): number {
        
        var result = nerdamer(expr).toString();

        console.log(result);

        return 1.0;
    }
} 