export default function getInitial(name) {
    if(name.split(' ').length > 1) {
        return name.split(' ')[1][0]
    } else {
        return name[0]
    }
}