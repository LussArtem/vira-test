export default function toggleClassList(element, addClass, deleteClass) {
    element.classList.add(addClass);
    element.classList.remove(deleteClass);
}
