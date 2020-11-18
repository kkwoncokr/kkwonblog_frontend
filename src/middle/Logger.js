const Logger = store => next => action => {
    console.debug(action);
    const result = next(action);
    return result;
}

export default Logger;