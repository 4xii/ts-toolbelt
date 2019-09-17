import {Index} from '../_Internal'
import {Unionize as OUnionize} from '../Object/Unionize'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'

/** Make the fields of **`T`** union the ones of **`T1`**
 * @param T to union from
 * @param T1 to union with
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<T extends Tuple, T1 extends Tuple, K extends Index = keyof T> =
    Cast<OUnionize<T, T1, K>, any[]>