export default function TabButton({children, onSelect}) {

    // This is an imperative coding
    // document.querySelector('button').addEventListener('click', () => {})

    

    return(
        <li><button onClick={onSelect}>{children}</button></li>
    )
}