/*
 * used for retrieving data saved in local-storage with string values
 *
 * params : key name
 * return : string, or null if empty
 *
 * example : const jwt: string | null = get('jwt');
 */
export function get(key: string): string | null {
    return localStorage.getItem(key);
}

/*
 * takes the data value (any), if it's a string it saves it to the key in local-storage, if not a string it stringifies it.
 *
 * params : key name, data value
 *
 * example : set('jwt', jwt);
 */
export function set(key: string, data: any): void {
    const strData = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, strData)
}

/*
 * takes key & removes it from local-storage
 *
 * params : key name
 *
 * example : del('jwt');
 */
export function del(key: string): void {
    localStorage.removeItem(key);
}

/*
 * same function as get, except it's for retrieving data saved in local-storage with object values not strings
 *
 * params : key name
 * return : T type, or null if empty
 *
 * example: const jwt: JWT | null = parse<JWT>('jwt');
 */
export function parse<T>(key: string): T | null {
    return get(key) ? JSON.parse(get(key)!) as T : null;
}
