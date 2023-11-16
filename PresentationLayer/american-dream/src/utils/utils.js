export function validate(str, min, max) {
    return (str.length > min && str.length < max);
}