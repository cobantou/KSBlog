/**
 * Created by pengshuo on 17/7/24.
 */
interface ICache{
    useCache:boolean;
    [propName:string]:any;
}
const cache:ICache = {useCache:true};